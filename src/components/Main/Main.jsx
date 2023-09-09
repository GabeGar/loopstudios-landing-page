import OurCreationsBackgroundImage from "./OurCreationsBackgroundImage";
import BgImgPara from "./BgImgPara";
import Button from "../UI/Button";
import Link from "../UI/Link";

const Main = () => {
    return (
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
                        creations have transformed businesses through digital
                        experiences that bind to their brand.
                    </p>
                </article>
            </section>

            <section>
                <div className="imd:aria-hidden md:flex md:justify-between md:items-center md:pb-[4rem]">
                    <h2 className="md:p-0 text-center text-primary-black text-[2.25rem] font-josefinSans uppercase pb-[3rem]">
                        Our Creations
                    </h2>

                    <Button classes={"imd:hidden imd:pointer-events-none"}>
                        See All
                    </Button>
                </div>

                <div className="font-josefinSans text-primary-white">
                    <ul className="md:grid-cols-4 grid gap-7">
                        <li>
                            <Link href="#DeepEarth" title="Deep earth project">
                                <OurCreationsBackgroundImage
                                    classes={"md:bg-dDeepEarth bg-mDeepEarth"}
                                >
                                    <BgImgPara>Deep Earth</BgImgPara>
                                </OurCreationsBackgroundImage>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#NightArcade"
                                title="Night arcade project"
                            >
                                <OurCreationsBackgroundImage
                                    classes={
                                        "md:bg-dNightArcade bg-mNightArcade"
                                    }
                                >
                                    <BgImgPara>Night Arcade</BgImgPara>
                                </OurCreationsBackgroundImage>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#SoccerTeamVR"
                                title="Soccer team project"
                            >
                                <OurCreationsBackgroundImage
                                    classes={"md:bg-dSoccerTeam bg-mSoccerTeam"}
                                >
                                    <BgImgPara>Soccer Team VR</BgImgPara>
                                </OurCreationsBackgroundImage>
                            </Link>
                        </li>
                        <li>
                            <Link href="#TheGrid" title="The grid project">
                                <OurCreationsBackgroundImage
                                    classes={"md:bg-dGrid bg-mGrid"}
                                >
                                    <BgImgPara>The Grid</BgImgPara>
                                </OurCreationsBackgroundImage>
                                The Grid
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#FromUpAboveVR"
                                title="From up above vr project"
                            >
                                <OurCreationsBackgroundImage
                                    classes={"md:bg-dFromAbove bg-mFromAbove"}
                                >
                                    <BgImgPara>From Up Above VR</BgImgPara>
                                </OurCreationsBackgroundImage>
                                From Up Above VR
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#PocketBorealis"
                                title="Pocket borealis project"
                            >
                                <OurCreationsBackgroundImage
                                    classes={
                                        "md:bg-dPocketBorealis bg-mPocketBorealis"
                                    }
                                >
                                    <BgImgPara>Pocket Borealis</BgImgPara>
                                </OurCreationsBackgroundImage>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#TheCuriosity"
                                title="The curiosity project"
                            >
                                <OurCreationsBackgroundImage
                                    classes={"md:bg-dCuriosity bg-mCuriosity"}
                                >
                                    <BgImgPara>The Curiosity</BgImgPara>
                                </OurCreationsBackgroundImage>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#MakeItFisheye"
                                title="Make it fisheye project"
                            >
                                <OurCreationsBackgroundImage
                                    classes={"md:bg-dFishEye bg-mFishEye"}
                                >
                                    <BgImgPara>Make It Fisheye</BgImgPara>
                                </OurCreationsBackgroundImage>
                            </Link>
                        </li>
                    </ul>

                    <div className="md:hidden md:aria-hidden md:mb-0 pt-8 mb-[5rem] font-alata flex justify-center text-primary-black">
                        <Button
                            classes={
                                "md:hidden md:aria-hidden md:pointer-events-none"
                            }
                        >
                            See All
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;
