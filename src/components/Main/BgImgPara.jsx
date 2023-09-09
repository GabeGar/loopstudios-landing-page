const BgImgPara = ({ children }) => {
    return (
        <p
            className={
                "mobile-creations-img-text md:desktop-creations-img-text"
            }
        >
            {children}
        </p>
    );
};

export default BgImgPara;
