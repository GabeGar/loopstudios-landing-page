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
                <div className="grid bg-mHero md:bg-dHero md:px-[6.5rem] md:py-12 min-h-screen bg-no-repeat bg-center bg-cover p-6">
                    <nav>
                        <ul className="flex justify-between items-center pt-6">
                            <li>
                                <img
                                    className="max-h-[1.75rem]"
                                    src={logo}
                                    alt="loopstudios logo"
                                />
                            </li>
                            <li className="md:hidden md:pointer-events-none">
                                <button onClick={() => setModalOpen(true)}>
                                    <img
                                        src={hamburgerMenu}
                                        alt="navigation menu icon"
                                    />
                                </button>
                            </li>
                            <ul className="imd:hidden imd:pointer-events-none imd:aria-hidden flex justify-between min-w-[35%] gap-2 font-alata text-primary-white">
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                                <li>
                                    <a href="#">Events</a>
                                </li>
                                <li>
                                    <a href="#">Products</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                        </ul>
                    </nav>

                    <section>
                        <h1 className="md:max-w-[50dvw] md:text-[calc(1rem+4.5vw)] md:leading-[1] p-[1.5rem] border-[.25rem] border-solid font-josefinSans uppercase text-primary-white text-[calc(1.25rem+5vw)] leading-[1]">
                            Immersive experiences that deliver
                        </h1>
                    </section>
                </div>
            </header>

            <main className="md:relative md:px-[6.5rem] md:py-[7.5rem] p-6">
                <section className="md:flex-row md:gap-0 flex flex-col gap-4 md:pb-[10.5rem] text-center">
                    <div className="md:relative md:bg-dInteractive md:bg-left md:bg-[length:60%_100%] min-h-[45dvh] w-[100%] bg-mInteractive bg-no-repeat bg-center bg-contain"></div>

                    <article className="md:absolute md:right-[13%] md:top-[12%] md:min-w-[40%] md:max-w-[20rem] md:h-[16%] md:pl-[4rem] md:pt-[4rem] md:pb-[calc(3rem+1vh)] md:z-50 md:text-left md:bg-gradient-to-r md:from-primary-white md:to-primary-white md:bg-contain flex flex-col items-center justify-end gap-4">
                        <h2 className="md:self-start md:whitespace-pre-line text-primary-black text-[2rem] leading-10 font-josefinSans uppercase">
                            The leader in interactive vr
                        </h2>
                        <p className="md:whitespace-pre-line md:mb-0 md:max-w-[90%] md:w-[max-content] md:self-start mb-[6rem] max-h-[40%] font-alata text-primary-very-dark-gray">
                            Founded in 2011, Loopstudios has been producing
                            world-class virtual reality projects for some of the
                            best companies around the globe. Our award-winning
                            creations have transformed businesses through
                            digital experiences that bind to their brand.
                        </p>
                    </article>
                </section>

                <section>
                    <div className="imd:aria-hidden md:flex md:justify-between md:items-center md:pb-[4rem]">
                        <h2 className="md:p-0 text-center text-primary-black text-[2.25rem] font-josefinSans uppercase pb-[3rem]">
                            Our Creations
                        </h2>

                        <button className="imd:hidden imd:pointer-events-none px-10 py-2 justify-center tracking-[.3rem] border-[.15rem] border-solid border-primary-dark-gray text-primary-black uppercase">
                            See All
                        </button>
                    </div>

                    <div className="font-josefinSans text-primary-white">
                        <ul className="md:grid-cols-4 grid gap-7">
                            <li>
                                <a href="#DeepEarth" title="Deep earth project">
                                    <div
                                        className="md:min-h-[60dvh] h-[20dvh]
                        md:bg-dDeepEarth bg-mDeepEarth mobile-img-container"
                                    >
                                        <p className="mobile-creations-img-text md:desktop-creations-img-text">
                                            Deep Earth
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#NightArcade"
                                    title="Night arcade project"
                                >
                                    <div className="md:h-[60dvh] h-[20dvh] md:bg-dNightArcade bg-mNightArcade mobile-img-container">
                                        <p className="mobile-creations-img-text md:desktop-creations-img-text ">
                                            Night Arcade
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#SoccerTeamVR"
                                    title="Soccer team project"
                                >
                                    <div className="md:h-[60dvh] h-[20dvh] md:bg-dSoccerTeam bg-mSoccerTeam mobile-img-container">
                                        <p className="mobile-creations-img-text md:desktop-creations-img-text ">
                                            Soccer Team VR
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#TheGrid" title="The grid project">
                                    <div className="md:h-[60dvh] h-[20dvh] md:bg-dGrid bg-mGrid mobile-img-container">
                                        <p className="mobile-creations-img-text md:desktop-creations-img-text ">
                                            The Grid
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#FromUpAboveVR"
                                    title="From up above vr project"
                                >
                                    <div className="md:h-[60dvh] h-[20dvh] md:bg-dFromAbove bg-mFromAbove mobile-img-container">
                                        <p className="mobile-creations-img-text md:desktop-creations-img-text ">
                                            From Up Above VR
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#PocketBorealis"
                                    title="Pocket borealis project"
                                >
                                    <div className="md:h-[60dvh] h-[20dvh] md:bg-dPocketBorealis bg-mPocketBorealis mobile-img-container">
                                        <p className="mobile-creations-img-text md:desktop-creations-img-text ">
                                            Pocket Borealis
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#TheCuriosity"
                                    title="The curiosity project"
                                >
                                    <div className="md:h-[60dvh] h-[20dvh] md:bg-dCuriosity bg-mCuriosity mobile-img-container">
                                        <p className="mobile-creations-img-text md:desktop-creations-img-text ">
                                            The Curiosity
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#MakeItFisheye"
                                    title="Make it fisheye project"
                                >
                                    <div className="md:h-[60dvh] h-[20dvh] md:bg-dFishEye bg-mFishEye mobile-img-container">
                                        <p className="mobile-creations-img-text md:desktop-creations-img-text ">
                                            Make It Fisheye
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <div className="md:mb-0 pt-8 mb-[5rem] font-alata flex justify-center text-primary-black">
                            <button className="md:hidden md:aria-hidden md:pointer-events-none px-10 py-2 justify-center tracking-[.3rem] border-[.15rem] border-solid border-primary-dark-gray text-primary-black uppercase">
                                See All
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="md:flex md:justify-between md:items-center md:px-[6.5rem] py-[4.5rem] bg-primary-black">
                <section className="font-alata text-primary-white">
                    <div className="md:justify-start md:pb-0 flex justify-center pb-3">
                        <img
                            className="max-h-[1.75rem] mb-[1rem]"
                            src={logo}
                            alt="loopstudios logo"
                        />
                    </div>

                    <ul className="md:flex-row flex flex-col gap-6 items-center">
                        <li>
                            <a href="#About" title="About page">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#Careers" title="Careers page">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#Events" title="Events page">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="#Products" title="Products page">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#Support" title="Support page">
                                Support
                            </a>
                        </li>
                    </ul>
                </section>

                <section className="md:h-full md:flex md:flex-col md:justify-between md:gap-4">
                    <ul className="md:pt-0 md:justify-end flex justify-center items-center gap-5 pt-[3.25rem]">
                        <li>
                            <a href="#Facebook" title="Share via facebook">
                                <img src={facebook} alt="Facebook logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#Twitter" title="To twitter">
                                <img src={twitter} alt="Share via twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#Pinterest" title="To pinterest">
                                <img
                                    src={pinterest}
                                    alt="Share via pinterest"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#Instagram" title="To Instagram">
                                <img
                                    src={instagram}
                                    alt="Share via instagram"
                                />
                            </a>
                        </li>
                    </ul>

                    <p className="md:pt-0 pt-5 text-center font-alata text-primary-dark-gray">
                        © 2023 Loopstudios. All rights reversed.
                    </p>
                </section>
            </footer>
        </div>
    );
};

export default App;
