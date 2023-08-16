import "./NavbarToggle.scss";

function NavbarToggle() {
    return <>
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
          <img src="/icons/toggle.svg" className="icon-toggle cursor-point" alt=""></img>
        </label>
    </>
}

export default NavbarToggle;