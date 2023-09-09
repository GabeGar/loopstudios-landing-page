const OurCreationsBackgroundImage = ({ classes, children }) => {
    return (
        <div
            className={`md:min-h-[60dvh] h-[20dvh] mobile-img-container ${
                classes ? classes : ""
            }`}
        >
            {children}
        </div>
    );
};

export default OurCreationsBackgroundImage;
