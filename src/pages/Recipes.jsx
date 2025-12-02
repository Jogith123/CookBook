import { useState } from 'react'
import RecipeGrid from '../components/recipes/RecipeGrid'
import RecipeFilters from '../components/recipes/RecipeFilters'
import { useRecipes } from '../context/RecipesContext'
import Loader from '../components/ui/Loader'

export default function Recipes(){
  const { recipes, loading, refresh } = useRecipes()
  const [q, setQ] = useState('')
  const [filters, setFilters] = useState({ cuisine:'', category:'', difficulty:'' })
  async function apply(){ await refresh({ q, ...filters }) }
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/80">Explore</p>
          <h1 className="text-2xl font-bold text-white md:text-3xl">All Recipes</h1>
          <p className="mt-1 text-sm text-slate-200/80">Browse every dish in your cookbook and fine-tune with filters.</p>
        </div>
      </div>
      <RecipeFilters q={q} setQ={setQ} filters={filters} setFilters={setFilters} onApply={apply} />
      <div className="rounded-3xl border border-white/5 bg-black/20 p-4 shadow-inner shadow-black/50 md:p-6">
        {loading ? <Loader /> : <RecipeGrid items={recipes} />}
      </div>
    </div>
  )
}
