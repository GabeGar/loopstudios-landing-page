import { useState } from "react";

import logo from "./assets/images/icons/logo.svg";
import hamburgerMenu from "./assets/images/icons/icon-hamburger.svg";
import facebook from "./assets/images/icons/icon-facebook.svg";
import twitter from "./assets/images/icons/icon-twitter.svg";
import pinterest from "./assets/images/icons/icon-pinterest.svg";
import instagram from "./assets/images/icons/icon-instagram.svg";
import MobileModal from "./components/MobileNavModal";

const App = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen">
            {modalOpen && (
                <MobileModal
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                />
            )}
            <header>
                <div className="grid bg-mHero min-h-screen bg-no-repeat bg-center bg-cover p-6">
                    <nav>
                        <ul className="flex justify-between items-center pt-6">
                            <li>
                                <img
                                    className="max-h-[1.75rem]"
                                    src={logo}
                                    alt="loopstudios logo"
                                />
                            </li>
                            <li>
                                <button onClick={() => setModalOpen(true)}>
                                    <img
                                        src={hamburgerMenu}
                                        alt="navigation menu icon"
                                    />
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <section>
                        <h1 className="p-[1.5rem] border-[.25rem] border-solid font-josefinSans uppercase text-primary-white text-[2.7rem] leading-[2.8rem]">
                            Immersive experiences that deliver
                        </h1>
                    </section>
                </div>
            </header>

            <main className="p-6">
                <section className="flex flex-col items-center gap-4 text-center">
                    <div className="min-h-[45dvh] w-[100%] bg-mInteractive bg-no-repeat bg-center bg-contain"></div>
                    <h2 className="text-primary-black text-[2rem] leading-10 font-josefinSans uppercase">
                        The leader in interactive vr
                    </h2>
                    <p className="max-w-[90%] mb-[5rem] font-alata text-primary-very-dark-gray">
                        Founded in 2011, Loopstudios has been producing
                        world-class virtual reality projects for some of the
                        best companies around the globe.Our award-winning
                        creations have transformed businesses through digital
                        experiences that bind to their brand.
                    </p>
                </section>

                <section>
                    <h2 className="text-center text-primary-black text-[2.25rem] font-josefinSans uppercase pb-[3rem]">
                        Our Creations
                    </h2>

                    <div className="font-josefinSans text-primary-white">
                        <ul className="grid gap-7">
                            <li>
                                <a href="#" title="Deep earth project">
                                    <div className="h-[20dvh] bg-mDeepEarth mobile-img-container">
                                        <p className="mobile-creations-img-text">
                                            Deep Earth
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Night arcade project">
                                    <div className="h-[20dvh] bg-mNightArcade mobile-img-container">
                                        <p className="mobile-creations-img-text">
                                            Night Arcade
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Soccer team project">
                                    <div className="h-[20dvh] bg-mSoccerTeam mobile-img-container">
                                        <p className="mobile-creations-img-text">
                                            Soccer Team VR
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="The grid project">
                                    <div className="h-[20dvh] bg-mGrid mobile-img-container">
                                        <p className="mobile-creations-img-text">
                                            The Grid
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="From up above vr project">
                                    <div className="h-[20dvh] bg-mFromAbove mobile-img-container">
                                        <p className="mobile-creations-img-text">
                                            From Up Above VR
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Pocket borealis project">
                                    <div className="h-[20dvh] bg-mPocketBorealis mobile-img-container">
                                        <p className="mobile-creations-img-text">
                                            Pocket Borealis
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="The curiosity project">
                                    <div className="h-[20dvh] bg-mCuriosity mobile-img-container">
                                        <p className="mobile-creations-img-text">
                                            The Curiosity
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Make it fisheye project">
                                    <div className="h-[20dvh] bg-mFishEye mobile-img-container">
                                        <p className="mobile-creations-img-text">
                                            Make It Fisheye
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <div className="pt-8 mb-[5rem] font-alata flex justify-center text-primary-black">
                            <button className="px-10 py-2 justify-center tracking-[.3rem] border-[.15rem] border-solid border-primary-dark-gray text-primary-black uppercase">
                                See All
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-[4.5rem] bg-primary-black">
                <section className="flex flex-col items-center  font-alata text-primary-white">
                    <ul className="flex flex-col gap-6 items-center">
                        <li>
                            <a href="#" title="Homepage">
                                <img
                                    className="max-h-[1.75rem] mb-[1rem]"
                                    src={logo}
                                    alt="loopstudios logo"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="About page">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Careers page">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Events page">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Products page">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Support page">
                                Support
                            </a>
                        </li>
                    </ul>
                </section>

                <section>
                    <ul className="flex justify-center items-center gap-5 pt-[3.25rem]">
                        <li>
                            <a href="#" title="Share via facebook">
                                <img src={facebook} alt="Facebook logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="To twitter">
                                <img src={twitter} alt="Share via twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="To pinterest">
                                <img
                                    src={pinterest}
                                    alt="Share via pinterest"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="To Instagram">
                                <img
                                    src={instagram}
                                    alt="Share via instagram"
                                />
                            </a>
                        </li>
                    </ul>

                    <p className="pt-5 text-center font-alata text-primary-dark-gray">
                        © 2023 Loopstudios. All rights reversed
                    </p>
                </section>
            </footer>
        </div>
    );
};

export default App;
