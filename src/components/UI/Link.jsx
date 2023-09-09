const Link = ({ classes, href, title, id, children }) => {
    return (
        <a
            className={classes ? classes : ""}
            href={href ? href : "#"}
            title={title ? title : ""}
            id={id ? id : ""}
        >
            {children}
        </a>
    );
};

export default Link;
