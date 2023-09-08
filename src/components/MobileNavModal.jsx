import { useEffect } from "react";
import { createPortal } from "react-dom";

import logo from "../assets/images/icons/logo.svg";
import close from "../assets/images/icons/icon-close.svg";

const MobileModal = ({ modalOpen, setModalOpen }) => {
    // * Prevents bg scrolling, when overlay is on rendered
    useEffect(() => {
        const html = document.querySelector("html");
        html.classList.add("overflow-hidden");

        return () => html.classList.remove("overflow-hidden");
    }, [modalOpen]);

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return createPortal(
        <div className="modal-overlay p-6">
            <div className="text-primary-white">
                <section className="flex justify-between pt-6">
                    <img
                        className="max-h-[1.75rem]"
                        src={logo}
                        alt="Loopstudios logo"
                    />
                    <button onClick={handleModalClose}>
                        <img src={close} alt="Close the menu" />
                    </button>
                </section>

                <section className="mt-[45%]">
                    <nav>
                        <ul className="flex flex-col gap-4 font-josefinSans text-[1.75rem] uppercase ">
                            <li onClick={handleModalClose}>
                                <a href="#">About</a>
                            </li>
                            <li onClick={handleModalClose}>
                                <a href="#">Careers</a>
                            </li>
                            <li onClick={handleModalClose}>
                                <a href="#">Events</a>
                            </li>
                            <li onClick={handleModalClose}>
                                <a href="#">Products</a>
                            </li>
                            <li onClick={handleModalClose}>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </div>
        </div>,
        document.querySelector("#overlay-root")
    );
};

export default MobileModal;
