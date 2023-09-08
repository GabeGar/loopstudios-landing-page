/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            // * Mobile images
            backgroundImage: {
                mCuriosity: "url('src/assets/images/mobile/curiosity.jpg')",
                mDeepEarth: "url('src/assets/images/mobile/deep-earth.jpg')",
                mFishEye: "url('src/assets/images/mobile/fisheye.jpg')",
                mFromAbove: "url('src/assets/images/mobile/from-above.jpg')",
                mGrid: "url('src/assets/images/mobile/grid.jpg')",
                mHero: "url('src/assets/images/mobile/hero.jpg')",
                mInteractive: "url('src/assets/images/mobile/interactive.jpg')",
                mNightArcade:
                    "url('src/assets/images/mobile/night-arcade.jpg')",
                mPocketBorealis:
                    "url('src/assets/images/mobile/pocket-borealis.jpg')",
                mSoccerTeam: "url('src/assets/images/mobile/soccer-team.jpg')",

                // * Desktop images
                dCuriosity: "url('src/assets/images/desktop/curiosity.jpg')",
                dDeepEarth: "url('src/assets/images/desktop/deep-earth.jpg')",
                dFishEye: "url('src/assets/images/desktop/fisheye.jpg')",
                dFromAbove: "url('src/assets/images/desktop/from-above.jpg')",
                dGrid: "url('src/assets/images/desktop/grid.jpg')",
                dHero: "url('src/assets/images/desktop/hero.jpg')",
                dInteractive:
                    "url('src/assets/images/desktop/interactive.jpg')",
                dNightArcade:
                    "url('src/assets/images/desktop/night-arcade.jpg')",
                dPocketBorealis:
                    "url('src/assets/images/desktop/pocket-borealis.jpg')",
                dSoccerTeam: "url('src/assets/images/desktop/soccer-team.jpg')",
            },
            colors: {
                "primary-white": "hsl(var(--white) / <alpha-value>)",
                "primary-black": "hsl(var(--black) / <alpha-value>)",
                "primary-dark-gray": "hsl(var(--dark-gray) / <alpha-value>)",
                "primary-very-dark-gray":
                    "hsl(var(--very-dark-gray) / <alpha-value>)",
            },
            fontFamily: {
                alata: "'alata', var(--font-fallback)",
                josefinSans: "'josefinSans', var(--font-fallback)",
            },
            screens: {
                imd: { max: "767px" },
            },
        },
    },
    plugins: [],
};
