import { blogs } from "../data/founderData"
import { FaBookmark } from "react-icons/fa6";
import logo from "../assets/mindsonproduct.jpeg";

export default function Blogs() {

    const allBlogs = blogs.map((elem, i) => {
        return (
            <div key={i} className="w-[280px] h-[320px] flex flex-col items-center justify-between bg-[#e1e1e1] px-5 py-8 rounded-xl cursor-pointer relative">
                <FaBookmark className="h-12 w-12 absolute top-0 right-1 text-[#5d17ea]" />
                <img src={logo} alt="Minds on Product" className="h-8 aspect-square rounded-full absolute top-1 right-3" />
                <div className="flex flex-col justify-start items-start">
                    <img src={elem.img} alt="" className="w-16 aspect-square rounded-full" />
                    <h3 className="mt-5 text-base font-semibold">{elem.title}</h3>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                    <h4 className="mt-10">{elem.writtenBy}</h4>
                    <small className="text-xs">{elem.date}</small>
                </div>
            </div>
        )
    })

    return (
        <section className="flex flex-col items-center justify-center max-w-[1140px] mx-auto md:my-44 my-20 md:px-0 px-6">
            <h2 className="md:text-4xl text-2xl text-left font-semibold mb-10">Blogs</h2>
            <div className="flex items-center justify-center flex-wrap gap-8">
                {allBlogs}
            </div>
        </section>
    )
}
