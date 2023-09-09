const Button = ({ classes, onClick, id, children }) => {
    const allClasses = `${classes} px-10 py-2 tracking-[.3rem] ${
        id === "burger" || id === "modalClose"
            ? ""
            : "border-[.15rem] border-solid border-primary-dark-gray"
    }`;

    return (
        <button className={allClasses} onClick={onClick ? onClick : null}>
            {children}
        </button>
    );
};

export default Button;
