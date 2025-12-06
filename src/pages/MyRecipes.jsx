import { useEffect, useState } from 'react'
import { useRecipes } from '../context/RecipesContext'
import RecipeGrid from '../components/recipes/RecipeGrid'

export default function MyRecipes() {
  const ctx = useRecipes()
  const myRecipes = ctx?.myRecipes
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!myRecipes) {
      setError('My recipes feature is not available right now.')
      setLoading(false)
      return
    }

    const fetchMyRecipes = async () => {
      try {
        setLoading(true)
        const data = await myRecipes()
        setItems(data)
        setError(null)
      } catch (err) {
        console.error('Failed to load recipes:', err)
        setError('Failed to load your recipes. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchMyRecipes()
  }, [myRecipes])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        {error}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Recipes</h1>
      {items.length > 0 ? (
        <RecipeGrid items={items} />
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">You haven't created any recipes yet.</p>
        </div>
      )}
    </div>
  )
}
