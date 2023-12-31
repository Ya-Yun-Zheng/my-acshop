import NavItem from "./NavItem";
import "./NavList.scss";

function NavList(props) {
    return <ul className={`nav-list ${props.className}`}>
        {props.children.map(
            (child, index) => <NavItem key={index}>{child}</NavItem>
        )}
    </ul>
}

export default NavList;