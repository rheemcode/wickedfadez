import Slider from "react-slick";
import { CloseButton, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const Navbar = () => {
    return (
        <div id="navbar" className="navbar absolute bg-zinc-900 py-1 w-screen px-2 z-10">
            <div className="container"></div>
            <div className="flex justify-between items-center">
                <div>
                    <div>
                        <img className="w-10 h-10" src={process.env.PUBLIC_URL + "/wickedfadez-logo.svg"} alt="" />
                    </div>
                </div>
                <div className="text-zinc-600">
                    <Popover className="relative">
                        <PopoverButton>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            anchor="bottom" className="flex bg-zinc-900 w-full mt-6 px-4 py-6 text-center rounded-xl font-josefin flex-col z-20 gap-y-2 backdrop-blur shadow-sm shadow-zinc-900 transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                            {({ close }) => (
                                <>
                                    <a onClick={() => close()} className="text-zinc-600" href="#about">About</a>
                                    <a onClick={() => close()} className="text-zinc-600" href="#services">Services</a>
                                    <a onClick={() => close()} className="text-zinc-600" href="#gallery">Gallery</a>
                                    <a onClick={() => close()} className="text-zinc-600" href="#Contact">Contact</a>
                                </>
                            )}

                        </PopoverPanel>
                    </Popover>

                </div>
            </div>
        </div>
    )
}


const Home = () => {
    return (
        <>
            <div className="relative z-10">
                <Navbar />
            </div>
            <div className="container h-screen flex flex-row items-center justify-center relative">
                <div className="w-10/12">
                    <div className="w-712 mx-auto flex flex-col justify-center items-center">

                        <img className="w-36 h-36" src={process.env.PUBLIC_URL + "/wickedfadez-logo.svg"} alt="" />
                        <div className="relative">
                            <img className="w-48" src={process.env.PUBLIC_URL + "/wickedfadez.svg"} alt="" />
                            <img className="w-48 blur-md absolute top-0 left-0" src={process.env.PUBLIC_URL + "/wickedfadez.svg"} alt="" />
                            <div className="mt-2 text-xs text-zinc-700">
                                Precision Cuts, Styled Confidence.
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <a href="https://calendly.com/wickedfadez/30min" className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-3xl py-4 px-8 font-medium font-josefin">Book Appointment</a>
                    </div>
                </div>


                <div className="absolute py-4 bottom-0  animate-bounce">
                    <img className="w-6 grayscale-50 grayscale blur" src={process.env.PUBLIC_URL + "/clipper-2.svg"} alt="" />
                    <img className="absolute bottom-5 w-6 grayscale-50 grayscale blur-lg" src={process.env.PUBLIC_URL + "/clipper-2.svg"} alt="" />
                </div>
            </div>

            <div id="about" className="container relative border-t border-zinc-800 mt-12">
                <div className="holder">
                    <div className="img-holder h-80 relative z-10 back bg-cover bg-top" style={{ backgroundImage: "url('/haircut-bg.png')" }}>

                    </div>
                </div>
                <div className="mt-12 container px-4 font-josefin">
                    <div>
                        <h3 className="text-zinc-600 text-3xl font-josefin font-bold">
                            Welcome to WickedFadez
                        </h3>
                        <div className="mt-2">
                            <p className="text-center text-zinc-600">
                                your destination for precision grooming in Nottingham. With over 4 years of professional barbering experience, each service is tailored to bring out your individual style. From sharp fades to modern cuts and detailed beard trims, every haircut is executed with skill and dedication, ensuring you leave feeling fresh and confident. At WickedFadez, the goal is simple: to provide a personal and professional grooming experience every time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="bussiness" className="relative">
                <div id="rip" className="container relative border-y border-zinc-800 mt-12">

                    <div className="py-12 bg-zinc-900  container px-4 font-josefin">
                        <div>
                            <h3 className="text-zinc-600 text-3xl font-josefin font-bold">
                                BUSINESS HOURS
                            </h3>
                            <div className="mt-2 px-8">
                                <table className="table-auto text-left text-zinc-500 w-full px-8">
                                    <tbody className="space-y-4">
                                        <tr>
                                            <td>MONDAY</td>
                                            <td className="p-3 text-right">10AM - 7PM</td>


                                        </tr>
                                        <tr >
                                            <td>TEUSDAY</td>
                                            <td className="p-3 text-right">10AM - 7PM</td>

                                        </tr>
                                        <tr>
                                            <td>WEDNESDAY</td>
                                            <td className="p-3 text-right">10AM - 7PM</td>


                                        </tr>
                                        <tr>
                                            <td>THURSDAY</td>
                                            <td className="p-3 text-right">10AM - 7PM</td>


                                        </tr>
                                        <tr>
                                            <td>FRIDAY</td>
                                            <td className="p-3 text-right">10AM - 7PM</td>


                                        </tr>
                                        <tr>
                                            <td>SATURDAY</td>
                                            <td className="p-3 text-right">10AM - 7PM</td>


                                        </tr>
                                        <tr>
                                            <td className="p-3">SUNDAY</td>
                                            <td className="p-3 text-right">CLOSED</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-12">
                                <a href="https://calendly.com/wickedfadez/30min" className="bg-gradient-to-b from-zinc-800 to-zinc-800 rounded-3xl py-4 px-8 font-medium font-josefin">Book Appointment</a>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="services" className="relative">
                <div className="container relative mt-12">

                    <div className="py-12 container px-4 font-josefin">
                        <div>
                            <h3 className="text-zinc-600 text-3xl font-josefin font-bold">
                                SERVICES
                            </h3>
                            <div className="mt-2 px-8">
                                <table className="table-auto text-left text-zinc-500 w-full px-8">
                                    <tbody className="space-y-4">
                                        <tr>
                                            <td>
                                                HAIRCUT
                                                <div className="text-xs text-zinc-700">
                                                    Experience a top-tier fade, expertly finished with a precise hairline for a clean, HD-enhanced appearance.
                                                </div></td>
                                            <td className="p-3 text-right">£25</td>


                                        </tr>
                                        <tr>
                                            <td>
                                                SHAPE UP
                                                <div className="text-xs text-zinc-700">
                                                    A perfectly precise line-up, clean and defined, enhanced for a high-definition look.
                                                </div></td>
                                            <td className="p-3 text-right">£10</td>


                                        </tr>
                                        <tr>
                                            <td className="capitalize">
                                                Shape Up With Beard
                                                <div className="text-xs text-zinc-700">
                                                    A clean shape-up complemented by a well-groomed beard, delivering a sharp and polished look.
                                                </div>
                                            </td>
                                            <td className="p-3 text-right">£15</td>
                                        </tr>
                                        <tr>
                                            <td className="capitalize">
                                                Haircut With Beard
                                                <div className="text-xs text-zinc-700">

                                                    A fresh haircut paired with a meticulously styled beard, creating a cohesive and polished appearance.</div>
                                            </td>
                                            <td className="p-3 text-right">£30</td>
                                        </tr>
                                        <tr>
                                            <td className="capitalize">
                                                Kids Haircut
                                                <div className="text-xs text-zinc-700">
                                                    Exclusively for those under 14, offering tailored styles that are fun and age-appropriate.
                                                </div>
                                            </td>
                                            <td className="p-3 text-right">£15</td>
                                        </tr>

                                        <tr>
                                            <td className="capitalize">
                                                Patterns
                                                <div className="text-xs text-zinc-700">
                                                    Unique and creative patterns to add an artistic touch to any hairstyle.
                                                </div>
                                            </td>
                                            <td className="p-3 text-right">£10</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-12">

                                <a href="https://calendly.com/wickedfadez/30min" className="bg-gradient-to-b from-zinc-800 to-zinc-800 rounded-3xl py-4 px-8 font-medium font-josefin">Book Appointment</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="location" className="relative">
                <div id="rip" className="container relative border-zinc-800 mt-12">

                    <div className="py-12 bg-zinc-900  container px-4 font-josefin mt-2">
                        <h3 className="text-zinc-600 text-3xl font-josefin font-bold">
                            Where to find me
                        </h3>

                        <div className="img-holder-2 relative">
                            <div className="h-72 mt-4">
                                <iframe width="100%" height="100%" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=10%20Trinity%20Walk,%20Nottingham%20NG1%202AN+(Fidelfadez)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="gallery" className="relative">
                <div className="container relative mt-12">

                    <div className="py-12 container px-4 font-josefin">
                        <div>
                            <h3 className="text-zinc-600 text-3xl font-josefin font-bold">
                                GALLERY
                            </h3>
                            <div>
                                <p className="text-zinc-700">
                                    Discover a collection of stylish cuts and creative designs that showcase the artistry at WickedFadez.
                                </p>
                            </div>
                            <div className="mt-8 px-8 color teext-zinc">
                                <Slider {...{
                                    dots: true,
                                    infinite: true,
                                    speed: 500,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    prevArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#272729" className="size-6">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                                    </svg>,
                                    nextArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#272729" className="size-6">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                    </svg>

                                }}>
                                    <div className="h-64">
                                        {/* <img src={process.env.PUBLIC_URL + "/haircut-bg.png"} alt="" /> */}
                                        <div className="h-64 rounded-lg img-holder bg-cover bg-center" style={{ backgroundImage: "url('/haircut-2.png')" }}></div>
                                    </div>
                                    <div className="h-64">
                                        {/* <img src={process.env.PUBLIC_URL + "/haircut-2.png"} alt="" /> */}
                                        <div className="h-64 rounded-lg img-holder bg-cover bg-center" style={{ backgroundImage: "url('/haircut-3.png')" }}></div>
                                    </div>
                                    <div className="h-64">
                                        {/* <img src={process.env.PUBLIC_URL + "/haircut-2.png"} alt="" /> */}
                                        <div className="h-64 rounded-lg img-holder bg-cover bg-center" style={{ backgroundImage: "url('/haircut-bg.png')" }}></div>
                                    </div>
                                    <div className="h-64">
                                        {/* <img src={process.env.PUBLIC_URL + "/haircut-2.png"} alt="" /> */}
                                        <div className="h-64 rounded-lg img-holder bg-cover bg-center" style={{ backgroundImage: "url('/haircut.png')" }}></div>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <div id="contact" className="relative">
                <div className="relative px-5">

                    <div className="container py-8 border-t-2 border-zinc-900 text-left px-4 font-josefin">
                        <div>
                            <h3 className="text-zinc-600 text-xl font-josefin font-bold">
                                CONTACT ME
                            </h3>
                            <div>
                                <p className="text-zinc-700 text-xs">
                                    Get in touch for appointments or inquiries. Your next look is just a message away!
                                </p>
                            </div>
                            <div className="mt-4">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <svg className="fill-zinc-900 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
                                        </svg>
                                        <div className="text-zinc-700 text-sm">
                                            - @wickedfadez
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">

                                        <svg className="fill-zinc-900 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                        <div className="text-zinc-700 text-sm">
                                            -07931460629
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >

        </>
    )
}

export default Home;