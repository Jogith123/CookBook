import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useRecipes } from '../context/RecipesContext'
import Button from '../components/ui/Button'
import { fetchRecipeById } from '../api/recipesApi'

export default function RecipeDetails(){
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { favorite, remove } = useRecipes()
  const [r, setR] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function loadRecipe() {
      try {
        const recipe = await fetchRecipeById(id)
        setR(recipe)
      } catch (err) {
        console.error('Failed to load recipe', err)
        setR(null)
      } finally {
        setLoading(false)
      }
    }
    loadRecipe()
  }, [id])
  if (loading) return <div className="py-12 text-center text-sm text-slate-300">Loading...</div>
  if (!r) return <div className="py-12 text-center text-sm text-slate-300">Not found.</div>
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl shadow-black/60 backdrop-blur">
        <div className="grid gap-0 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)]">
          <div className="relative h-64 w-full md:h-full">
            <img
              src={r.imageUrl}
              alt={r.title}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
          <div className="flex flex-col justify-between p-5 md:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/80">
                Featured Recipe
              </p>
              <h1 className="mt-1 text-2xl font-bold text-white md:text-3xl">
                {r.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-200/90">
                {r.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-slate-100/90">
                <span className="rounded-full bg-white/10 px-3 py-1">
                  {r.cuisine}
                </span>
                <span className="rounded-full bg-white/8 px-3 py-1">
                  {r.category}
                </span>
                <span className="rounded-full bg-emerald-500/80 px-3 py-1 text-slate-950">
                  {r.difficulty}
                </span>
                {r.prepTime != null && (
                  <span className="rounded-full bg-white/8 px-3 py-1">
                    Prep {r.prepTime} min
                  </span>
                )}
                {r.cookTime != null && (
                  <span className="rounded-full bg-white/8 px-3 py-1">
                    Cook {r.cookTime} min
                  </span>
                )}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
              <Button onClick={()=>favorite?.(r.id)} disabled={!favorite}>Save to Cookbook</Button>
              {user && user.id === r.createdBy && remove && (
                <>
                  <Button variant="secondary" onClick={()=>navigate(`/edit/${r.id}`)}>Edit</Button>
                  <Button variant="danger" onClick={async()=>{ await remove(r.id); navigate('/recipes') }}>Delete</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]">
        <section className="rounded-3xl border border-white/10 bg-black/35 p-5 shadow-xl shadow-black/60">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300/80">
            Ingredients
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {r.ingredients.map((i,idx)=>(
              <li
                key={idx}
                className="flex items-start justify-between rounded-2xl bg-white/5 px-3 py-2 text-slate-100"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-amber-200/90">
                  {i.quantity}
                </span>
                <span className="ml-3 flex-1 text-right text-sm font-normal text-slate-100">
                  {i.name}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/10 bg-black/35 p-5 shadow-xl shadow-black/60">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300/80">
            Cooking Steps
          </h2>
          <ol className="mt-3 space-y-3 text-sm">
            {r.steps.map((s,idx)=>(
              <li
                key={idx}
                className="relative flex gap-3 rounded-2xl bg-white/5 px-3 py-3 text-slate-100"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gradient-to-br from-primary-500 via-amber-400 to-rose-400 text-xs font-bold text-slate-950 shadow">
                  {idx+1}
                </span>
                <p className="flex-1 leading-relaxed">{s}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}
