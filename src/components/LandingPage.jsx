import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../assets/LandingPage.css"
// import Footer from "./Footer";

export default function LandingPage() {
    return (
        <>
        <Navbar/>
        <Outlet/>
        {/* <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" class="image w-full" /> */}
        <div class="flex">
            <div class="flex-none w-full bg-gray-700">
                <div class="flex flex-row">
                    <div class="basis-1/2 mt-40 mb-40 ml-24">
                        
                        <h6 class="text-xl font-bold dark:text-white mb-5">Hello, My Name is</h6>
                        <h1 class="text-6xl font-extrabold dark:text-white">Syafitriawan Akbar Rabbani</h1>
                        <h6 class="text-md font-extrabold dark:text-white">Programmer Developer</h6>

                    </div>
                </div>
            </div>
        </div>

        <h2 class="text-4xl font-extrabold text-white text-center mt-10">The Projects</h2>

        <div class="flex flex-row mt-5">
            <div class="basis-1/3 bg-pink-400">01</div>
            <div class="basis-1/3 bg-pink-400">02</div>
            <div class="basis-1/3 bg-pink-400">03</div>
        </div>
        {/* <Footer/> */}
        </>
    )
}