const Button = ({ classes, onClick, id, children }) => {
    const allClasses = `${classes} ${
        id === "burger" || id === "modalClose"
            ? ""
            : "border-[.15rem] border-solid border-primary-dark-gray px-10 py-2 tracking-[.3rem] font-alata uppercase"
    }`;

    return (
        <button className={allClasses} onClick={onClick ? onClick : null}>
            {children}
        </button>
    );
};

export default Button;
