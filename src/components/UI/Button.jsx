const Button = ({ classes, onClick, children }) => {
    return (
        <button
            className={`px-10 py-2 justify-center tracking-[.3rem] border-[.15rem] border-solid border-primary-dark-gray text-primary-black uppercase ${
                classes ? classes : ""
            }`}
            onClick={onClick ? onClick : null}
        >
            {children}
        </button>
    );
};

export default Button;
