import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useAuth } from './AuthContext'
import { createRecipe, deleteRecipe, fetchRecipes } from '../api/recipesApi'

const RecipesCtx = createContext(null)

export function RecipesProvider({ children }) {
  const { user } = useAuth()
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  async function refresh(filters) {
    setLoading(true)
    try {
      const list = await fetchRecipes(filters)
      setRecipes(list)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refresh()
  }, [])

  // Load only recipes for the currently logged-in user using json-server.
  // json-server automatically filters by query parameters, e.g. /recipes?createdBy=u_demo
  const myRecipes = async () => {
    if (!user) return []
    try {
      return await fetchRecipes({ createdBy: user.id })
    } catch (error) {
      console.error('Error fetching user recipes:', error)
      throw error
    }
  }

  const value = useMemo(() => ({
    recipes,
    loading,
    refresh,
    myRecipes,
    create: async (data) => {
      if (!user) throw new Error('auth')
      const payload = {
        ...data,
        createdBy: user.id,
        createdAt: new Date().toISOString(),
      }
      const r = await createRecipe(payload)
      setRecipes(prev => [r, ...prev])
      return r
    },
    remove: async (id) => {
      if (!user) throw new Error('auth')
      await deleteRecipe(id)
      setRecipes(prev => prev.filter(r => r.id !== id))
    },
    // update / favorite / favorites
    // can be migrated to axios/json-server later.
  }), [recipes, loading, user])

  return <RecipesCtx.Provider value={value}>{children}</RecipesCtx.Provider>
}

export function useRecipes() {
  return useContext(RecipesCtx)
}
