import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className=" flex md:px-7 px-3 py-2">
            <div className="flex justify-evenly w-full md:flex-row flex-col gap-y-3">
                <ul className="flex flex-col gap-y-3 font-semibold">
                    <li className="cursor-pointer">Explore</li>
                    <li className="cursor-pointer">Blogs</li>
                    <li className="cursor-pointer">Courses</li>
                    <li className="cursor-pointer">Tutors</li>
                </ul>
                <ul className="flex flex-col gap-y-3 font-semibold">
                    <li className="cursor-pointer">Join</li>
                    <li className="cursor-pointer">Support</li>
                    <li className="cursor-pointer">Contact Us</li>
                    <li className="cursor-pointer">Feedback</li>
                </ul>
                <ul className="flex flex-col gap-y-3">
                    <li>
                        <div className="max-w-[320px] min-w-[290px] relative z-10">
                            <input type="text" className="rounded-lg p-2 w-full bg-[#e1e1e1] text-black font-semibold hover:border-0 hover:outline-none focus:outline-none" placeholder="example@email.com" />
                            <button className="text-white bg-[#5d17ea] px-5 py-2.5 rounded-lg text-sm font-semibold absolute md:-right-16 -right-6">Submit</button>
                        </div>
                    </li>
                    <li className="flex gap-x-4 items-center">
                        <FaTwitter className="h-7 text-[#5d17ea] cursor-pointer" />
                        <FaFacebookF className="h-5 text-[#5d17ea] cursor-pointer" />
                        <FaInstagram className="h-7 text-[#5d17ea] cursor-pointer" />
                    </li>
                </ul>
            </div>
        </footer>
    )
}
