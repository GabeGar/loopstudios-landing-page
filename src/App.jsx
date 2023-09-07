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
                    <div className="min-h-[50dvh] w-[100%] bg-mInteractive bg-no-repeat bg-center bg-contain"></div>
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

                    <div className="grid gap-7 font-josefinSans text-primary-white">
                        <a href="#" title="Deep Earth project">
                            <div className="h-[20dvh] w-full bg-mDeepEarth mobile-img-container">
                                <p className="mobile-creations-img-text">
                                    Deep Earth
                                </p>
                            </div>
                        </a>

                        <a href="#" title="Night arcade project">
                            <div className="h-[20dvh] w-full bg-mNightArcade mobile-img-container">
                                <p className="mobile-creations-img-text">
                                    Night Arcade
                                </p>
                            </div>
                        </a>

                        <a href="#" title="Soccer team project">
                            <div className="h-[20dvh] w-full bg-mSoccerTeam mobile-img-container">
                                <p className="mobile-creations-img-text">
                                    Soccer Team VR
                                </p>
                            </div>
                        </a>

                        <a href="#" title="Grid game project">
                            <div className="h-[20dvh] w-full bg-mGrid mobile-img-container">
                                <p className="mobile-creations-img-text">
                                    The Grid
                                </p>
                            </div>
                        </a>

                        <a href="#" title="From up above vr project">
                            <div className="h-[20dvh] w-full bg-mFromAbove mobile-img-container">
                                <p className="mobile-creations-img-text">
                                    From Up Above VR
                                </p>
                            </div>
                        </a>

                        <a href="#" title="Pocket borealis project">
                            <div className="h-[20dvh] w-full bg-mPocketBorealis mobile-img-container">
                                <p className="mobile-creations-img-text">
                                    Pocket Borealis
                                </p>
                            </div>
                        </a>

                        <a href="#" title="The Curiosity project">
                            <div className="h-[20dvh] w-full bg-mCuriosity mobile-img-container">
                                <p className="mobile-creations-img-text">
                                    The Curiosity
                                </p>
                            </div>
                        </a>

                        <a href="#" title="Make it fisheye project">
                            <div className="h-[20dvh] w-full bg-mFishEye mobile-img-container">
                                <p className="mobile-creations-img-text">
                                    Make It Fisheye
                                </p>
                            </div>
                        </a>

                        <div className="py-2 mb-[5rem] font-alata flex justify-center text-primary-black">
                            <button className="px-10 py-2 justify-center tracking-[.3rem] border-[.15rem] border-solid border-primary-dark-gray text-primary-black uppercase">
                                See All
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-[4.5rem] bg-primary-black">
                <section className="flex flex-col items-center gap-6 font-alata text-primary-white">
                    <a href="#" title="Homepage">
                        <img
                            className="max-h-[1.75rem] mb-[1rem]"
                            src={logo}
                            alt="loopstudios logo"
                        />
                    </a>
                    <a href="#" title="About page">
                        About
                    </a>
                    <a href="#" title="Careers page">
                        Careers
                    </a>
                    <a href="#" title="Events page">
                        Events
                    </a>
                    <a href="#" title="Products page">
                        Products
                    </a>
                    <a href="#" title="Support page">
                        Support
                    </a>
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

                    <p className="pt-4 text-center font-alata text-primary-dark-gray">
                        © 2023 Loopstudios. All rights reversed
                    </p>
                </section>
            </footer>
        </div>
    );
};

export default App;
