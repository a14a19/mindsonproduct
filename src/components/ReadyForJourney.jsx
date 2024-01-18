export default function ReadyForJourney() {
    return (
        <section className="flex flex-col items-center justify-center max-w-[1140px] mx-auto md:my-44 my-20 md:px-0 px-6">
            <p className="md:text-4xl text-2xl text-center font-semibold">Ready for the journey? Sign up now and start getting real-product-management-experience vibes!</p>
            <div className="sm:max-w-[320px] sm:min-w-[290px] max-w-full min-w-full relative mt-10 z-10">
                <input type="text" className="rounded-lg p-2 w-full bg-[#e1e1e1] text-black font-semibold hover:border-0 hover:outline-none focus:outline-none" placeholder="example@email.com" />
                <button className="text-white bg-[#5d17ea] px-5 py-2.5 rounded-lg text-sm font-semibold absolute sm:-right-16 -right-0">Submit</button>
            </div>
        </section>
    )
}
