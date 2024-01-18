import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="absolute bottom-0 right-0 left-0 text-white flex md:px-7 px-3 py-2">
            <div className="flex justify-evenly w-full">
                <ul className="flex flex-col gap-y-2">
                    <li>Explore</li>
                    <li>Blogs</li>
                    <li>Courses</li>
                    <li>Tutors</li>
                </ul>
                <ul className="flex flex-col gap-y-2">
                    <li>Join</li>
                    <li>Support</li>
                    <li>Contact Us</li>
                    <li>Feedback</li>
                </ul>
                <ul className="flex flex-col gap-y-3">
                    <li>
                        <div className="max-w-[280px] min-w-[250px] relative">
                            <input type="text" className="rounded-lg p-2 w-full  bg-white text-black font-semibold hover:border-0 hover:outline-none focus:outline-none" />
                            <button className="text-white bg-[#5d17ea] px-5 py-2.5 rounded-lg text-sm font-semibold absolute right-0">Submit</button>
                        </div>
                    </li>
                    <li className="flex gap-x-4 items-center">
                        <FaTwitter className="h-7" />
                        <FaFacebookF className="h-5" />
                        <FaInstagram className="h-7" />
                    </li>
                </ul>
            </div>
        </footer>
    )
}
