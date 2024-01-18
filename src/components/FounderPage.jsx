import { founders } from "../data/founderData"
import { FaBookmark } from "react-icons/fa6";
import logo from "../assets/mindsonproduct.jpeg";

export default function FounderPage() {

    const allFounders = founders.map((elem, i) => {
        return (
            <div key={i} className="w-[280px] flex flex-col items-center justify-center bg-[#e1e1e1] px-5 py-10 rounded-xl relative">
                <FaBookmark className="h-12 w-12 absolute top-0 left-1 text-[#5d17ea]" />
                <img src={logo} alt="Minds on Product" className="h-8 aspect-square rounded-full absolute top-1 left-3" />
                <img src={elem.img} alt="" className="w-24 aspect-square rounded-full grayscale" />
                <h3 className="font-semibold md:text-xl text-base mt-10">{elem.name}</h3>
                <p className="md:text-base text-sm mt-1">{elem.tagLine}</p>
            </div>
        )
    })

    return (
        <section className="flex flex-col items-center justify-center max-w-[1140px] mx-auto md:my-44 my-20 md:px-0 px-6">
            <h2 className="md:text-4xl text-2xl text-center font-semibold">Brains Behind</h2>
            <p className="text-center md:text-xl text-base my-5">Meet the maestros who keep the MindsOnProduct machine whirring, dreaming and spinning.</p>
            <div className="flex items-center justify-center flex-wrap gap-8 mt-10">
                {allFounders}
            </div>
        </section>
    )
}
