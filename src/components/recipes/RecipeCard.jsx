import Button from '../ui/Button'
import { Link } from 'react-router-dom'
import { useRecipes } from '../../context/RecipesContext'

export default function RecipeCard({ recipe }){
  const ctx = useRecipes() || {}
  const { favorite } = ctx
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/40 backdrop-blur">
      <img src={recipe.imageUrl} alt={recipe.title} className="h-40 w-full object-cover" />
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 font-semibold text-slate-50">{recipe.title}</h3>
        <p className="line-clamp-2 text-sm text-slate-200/80">{recipe.description}</p>
        <div className="flex items-center justify-between text-xs text-slate-300/80">
          <span>{recipe.cuisine} • {recipe.category}</span>
          <span>{recipe.difficulty}</span>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <Link to={`/recipes/${recipe.id}`} className="text-sm font-medium text-amber-300 hover:text-amber-200">View</Link>
          <Button
            variant="secondary"
            onClick={()=>favorite && favorite(recipe.id)}
            disabled={!favorite}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
