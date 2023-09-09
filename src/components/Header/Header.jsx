import logo from "../../assets/images/icons/logo.svg";
import hamburgerMenu from "../../assets/images/icons/icon-hamburger.svg";

import NavLinks from "../UI/NavLinks";
import Hero from "./Hero";
import Button from "../UI/Button";

const Header = ({ setModalOpen }) => {
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    return (
        <header>
            <Hero>
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
                            <Button onClick={handleOpenModal} id={"burger"}>
                                <img
                                    src={hamburgerMenu}
                                    alt="navigation menu icon"
                                />
                            </Button>
                        </li>
                        <ul className="imd:hidden imd:pointer-events-none imd:aria-hidden flex justify-between min-w-[35%] gap-2 font-alata text-primary-white">
                            <NavLinks />
                        </ul>
                    </ul>
                </nav>

                <section>
                    <h1 className="md:max-w-[50dvw] md:text-[calc(1rem+4.5vw)] md:leading-[1] p-[1.5rem] border-[.25rem] border-solid font-josefinSans uppercase text-primary-white text-[calc(1.25rem+5vw)] leading-[1]">
                        Immersive experiences that deliver
                    </h1>
                </section>
            </Hero>
        </header>
    );
};

export default Header;
