const Hero = ({ children }) => {
    return (
        <div className="grid bg-mHero md:bg-dHero md:px-[6.5rem] md:py-12 min-h-screen bg-no-repeat bg-center bg-cover p-6">
            {children}
        </div>
    );
};

export default Hero;
