import Link from "./Link";

const NavLinks = ({ onClick }) => {
    return (
        <>
            <li onClick={onClick}>
                <Link href={"#About"} title={"About Page"}>
                    About
                </Link>
            </li>
            <li onClick={onClick}>
                <Link href={"#Careers"} title={"Careers Page"}>
                    Careers
                </Link>
            </li>
            <li onClick={onClick} title={"Events Page"}>
                <Link href={"#Events"}>Events</Link>
            </li>
            <li onClick={onClick}>
                <Link href={"#Products"} title={"Products Page"}>
                    Products
                </Link>
            </li>
            <li onClick={onClick}>
                <Link href={"#Support"} title={"Support Page"}>
                    Support
                </Link>
            </li>
        </>
    );
};

export default NavLinks;
