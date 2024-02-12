const baseUrl = import.meta.env.VITE_DATAMUSE_BASE_URL

export const fetchSimilarWords = async (word:string) => {
    const response = await fetch(`${baseUrl}/words?ml=${word}&max=5`)
    const data = await response.json()
    return data
  }