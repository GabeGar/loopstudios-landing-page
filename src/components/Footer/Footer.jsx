import logo from "../../assets/images/icons/logo.svg";

import NavLinks from "../UI/NavLinks";
import FooterLinks from "./FooterLinks";

const Footer = () => {
    return (
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
                    <NavLinks />
                </ul>
            </section>

            <section className="md:h-full md:flex md:flex-col md:justify-between md:gap-4">
                <ul className="md:pt-0 md:justify-end flex justify-center items-center gap-5 pt-[3.25rem]">
                    <FooterLinks />
                </ul>

                <p className="md:pt-0 pt-5 text-center font-alata text-primary-dark-gray">
                    © 2023 Loopstudios. All rights reversed.
                </p>
            </section>
        </footer>
    );
};

export default Footer;
