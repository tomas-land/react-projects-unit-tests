
import { useState } from 'react'
import { useGetSimilarWords } from '@/hooks/useGetSimilarWords'


const SearchSimilarWords = () => {
    const [word, setWord] = useState<string>('')
    const { isLoading, similarWords, getSimilarWords } = useGetSimilarWords()

    const handleFormSubmition = (e: React.FormEvent) => {
        e.preventDefault()
        getSimilarWords(word)
    }

    function sum (a: number, b: number) {
        return a + b
    }
    sum(5,5)
    return (
        <div className='flex w-screen h-screen items-center justify-center bg-slate-100'>
            <div className="w-[50%] bg-slate-300 flex">
                <form onSubmit={handleFormSubmition} className="bg-slate-500 w-80 h-80 flex items-center justify-center flex-col p-5">
                    <div className="w-full">
                        <label htmlFor="input">
                            <input value={word} onChange={e => setWord(e.target.value)} id="input" type="text" className="bg-slate-300 w-full p-3 rounded-lg text-slate-800 font-bold tracking-wider outline-none" placeholder="Search similat words..." />
                        </label>
                    </div>
                    <button type="submit" className="p-2 mt-6 w-full bg-slate-100">Search</button>
                </form>
                <div className="p-5 font-bold text-slate-600 flex flex-col">
                    <h2 className="mb-3">Similar words:</h2>
                    {isLoading ? 'loading...' :
                        <ul>
                            {/* {similarWords.map(word => {
                                return <li className="text-slate-500" key={word.word}>{word.word}</li>
                            })} */}
                        </ul>}
                </div>
            </div>
        </div>
    )
}


export default SearchSimilarWords
