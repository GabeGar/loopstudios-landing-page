const Link = ({ classes, href, title, children }) => {
    return (
        <a
            className={classes ? classes : ""}
            href={href ? href : "#"}
            title={title ? title : ""}
        >
            {children}
        </a>
    );
};

export default Link;
