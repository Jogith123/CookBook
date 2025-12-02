import { useMemo, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RecipeGrid from '../components/recipes/RecipeGrid'
import { useRecipes } from '../context/RecipesContext'

function ArcCarousel(){
  const slides = useMemo(() => [
    {
      src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      alt: 'Vibrant salad bowl',
      label: 'Fresh & Colorful',
    },
    {
      src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543',
      alt: 'Gourmet burger',
      label: 'Comfort Classics',
    },
    {
      src: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927',
      alt: 'Pasta plate',
      label: 'Pasta Night',
    },
    {
      src: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0',
      alt: 'Dessert plate',
      label: 'Sweet Treats',
    },
  ], [])

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, 3200)
    return () => clearInterval(id)
  }, [slides.length, paused])

  const active = slides[index]

  return (
    <div
      className="relative w-full max-w-[520px] sm:mt-2 md:mt-0"
      onMouseEnter={()=>setPaused(true)}
      onMouseLeave={()=>setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-10 rounded-[40%] bg-gradient-to-br from-yellow-400/40 via-amber-300/20 to-transparent blur-3xl" />

      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-black/40 p-3 shadow-2xl shadow-black/70 backdrop-blur-xl">
        <div className="relative h-64 w-full overflow-hidden rounded-3xl sm:h-72">
          <img
            key={active.src}
            src={active.src}
            alt={active.alt}
            className="h-full w-full origin-center scale-105 object-cover transition duration-700 ease-out hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 px-2 pb-1">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300/80">
              Today&apos;s inspiration
            </p>
            <p className="mt-1 text-sm font-medium text-white">{active.label}</p>
          </div>

          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                onClick={()=>setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index
                    ? 'bg-gradient-to-r from-primary-500 via-amber-400 to-rose-400 shadow-[0_0_0_4px_rgba(250,204,21,0.25)]'
                    : 'bg-white/15 hover:bg-white/30'
                }`}
                aria-label={`Go to slide ${i+1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home(){
  const tabs = ['Breakfast','Lunch','Dinner']
  const [tab, setTab] = useState('Breakfast')
  return (
    <div className="relative overflow-hidden">
      {/* Curved yellow backdrop */}
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-[380px] rounded-b-[55%] bg-yellow-300/80 sm:-top-36 sm:h-[440px] md:-top-40 md:h-[500px]"></div>

      <main className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-20 pt-16 md:grid-cols-2 md:pb-28 md:pt-24">
        <section className="order-2 md:order-1">
          <h1 className="text-5xl font-extrabold leading-tight text-white drop-shadow-sm md:text-6xl">
            Delicious
          </h1>
          <h2 className="mt-2 text-3xl font-semibold text-slate-100 md:text-4xl">
            Quench the Hunger
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white md:text-base">Discover amazing recipes from around the world. Our virtual assistant helps you
              find the perfect dish for any occasion.</p>
          <button
            onClick={() => document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="mt-7 inline-flex items-center rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-yellow-600 md:px-8 md:text-base"
          >
            Quench now
          </button>
        </section>

        <section className="order-1 flex justify-center md:order-2">
          <ArcCarousel />
        </section>
      </main>

      {/* Featured recipes section to merge landing with app */}
      <FeaturedRecipes />
    </div>
  )
}

function FeaturedRecipes(){
  const { recipes, loading } = useRecipes()
  const top = recipes.slice(0, 6)
  return (
    <section id="recipes" className="mx-auto mt-24 w-full max-w-6xl px-4 pb-12 scroll-mt-24 md:mt-32 md:scroll-mt-40">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Popular Recipes</h3>
        <Link to="/recipes" className="text-sm font-medium text-yellow-600 hover:text-yellow-700">View all</Link>
      </div>
      <RecipeGrid items={top} />
    </section>
  )
}
