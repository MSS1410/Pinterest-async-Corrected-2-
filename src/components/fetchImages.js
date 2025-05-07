import { createApi } from 'unsplash-js'

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY
})

export async function fetchImages(query) {
  try {
    const result = await unsplash.search.getPhotos({
      query,
      perPage: 30
    })

    if (result.errors && result.errors.length > 0) {
      console.error('Error on search:', result.errors[0])
      return { results: [] }
    }

    return result.response
  } catch (error) {
    console.error('Error fetching images:', error)
    return { results: [] }
  }
}
