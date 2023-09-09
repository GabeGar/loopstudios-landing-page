import facebook from "../../assets/images/icons/icon-facebook.svg";
import twitter from "../../assets/images/icons/icon-twitter.svg";
import pinterest from "../../assets/images/icons/icon-pinterest.svg";
import instagram from "../../assets/images/icons/icon-instagram.svg";
import Link from "../UI/Link";

const FooterLinks = () => {
    return (
        <>
            <li>
                <Link href="#Facebook" title="Share via facebook">
                    <img src={facebook} alt="Facebook logo" />
                </Link>
            </li>
            <li>
                <Link href="#Twitter" title="To twitter">
                    <img src={twitter} alt="Share via twitter" />
                </Link>
            </li>
            <li>
                <Link href="#Pinterest" title="To pinterest">
                    <img src={pinterest} alt="Share via pinterest" />
                </Link>
            </li>
            <li>
                <Link href="#Instagram" title="To Instagram">
                    <img src={instagram} alt="Share via instagram" />
                </Link>
            </li>
        </>
    );
};

export default FooterLinks;
