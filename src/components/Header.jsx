import logo from "../assets/mindsonproduct.jpeg";

export default function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 flex justify-between md:px-7 px-3 py-2 bg-[#5d17ea] z-20">
            <div className="flex items-center gap-2 cursor-pointer">
                <img src={logo} alt="Minds on Product" className="h-8 aspect-square" />
                <h3 className="text-white font-bold text-lg mt-0.5">
                    MindsOnProduct
                </h3>
            </div>
            <button className="text-white border px-5 py-2 rounded-lg text-sm font-semibold">Get Started</button>
        </header>
    )
}
