import "./NavLink.scss";

function NavLink(props) {
    return <a className="nav-link" href={props.link}>
        {props.children}
    </a>;
}

export default NavLink;