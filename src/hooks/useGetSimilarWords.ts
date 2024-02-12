import { useState } from 'react'
import { fetchSimilarWords } from "../api/datamuse/getSimilarWords"

export const useGetSimilarWords = () => {
    const [similarWords, setSimilarWords] = useState<{ word: string }[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const getSimilarWords = async (word: string) => {
        setIsLoading(true)
        const newSimilarWords = await fetchSimilarWords(word)
        setSimilarWords(newSimilarWords)
        setIsLoading(false)

    }
    return { isLoading, getSimilarWords, similarWords }
}