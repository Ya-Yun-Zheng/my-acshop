import "./NavIcon.scss";

function NavIcon(props) {
    return <img
        src={props.src}
        className="nav-icon cursor-point"
        alt=""
        onClick={props.onClick}
    />;
}

export default NavIcon;