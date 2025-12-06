import api from './axiosClient'

// Load all recipes (optionally with filters) from json-server
export async function fetchRecipes(params = {}) {
  const res = await api.get('/recipes', { params })
  return res.data
}

// Create a new recipe
export async function createRecipe(data) {
  const res = await api.post('/recipes', data)
  return res.data
}

// Fetch a single recipe by id
export async function fetchRecipeById(id) {
  const res = await api.get(`/recipes/${id}`)
  return res.data
}

// Delete a recipe by id
export async function deleteRecipe(id) {
  await api.delete(`/recipes/${id}`)
  return true
}

