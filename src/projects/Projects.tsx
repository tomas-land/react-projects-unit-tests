import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div className='bg-slate-200 w-screen h-screen pt-20'>
            <div className="flex flex-col gap-4 w-[60%] mx-auto">
                <Link to="/search_similar_words"><div className=" bg-slate-300 text-slate-500 p-4 font-bold text-lg text-center" >1_Search Synonymous words (datamuse api, unit test, e2e test)</div></Link>
                <div className=" bg-slate-300 text-slate-500 p-4 font-bold text-lg text-center" >Next Project</div>
                <div className=" bg-slate-300 text-slate-500 p-4 font-bold text-lg text-center" >Next Project</div>
            </div>
        </div>
    )
}

export default Projects