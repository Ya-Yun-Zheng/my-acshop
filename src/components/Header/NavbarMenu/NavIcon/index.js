import "./NavIcon.scss";

function NavIcon(props) {
    return <img
        src={props.src}
        class="nav-icon cursor-point"
        alt=""
        onClick={props.onClick}
    />;
}

export default NavIcon;