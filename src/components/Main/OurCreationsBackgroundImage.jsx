const OurCreationsBackgroundImage = ({ classes, children }) => {
    return (
        <div
            className={`main-img-container md:min-h-[60dvh] h-[20dvh] mobile-img-container ${
                classes ? classes : ""
            }`}
        >
            {children}
        </div>
    );
};

export default OurCreationsBackgroundImage;
