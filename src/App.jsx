import { useState } from "react";

import MobileModal from "./components/UI/Overlays/MobileNavModal";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

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

            <Header setModalOpen={setModalOpen} />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
