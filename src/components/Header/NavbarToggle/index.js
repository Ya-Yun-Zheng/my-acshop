import "./NavbarToggle.scss";

function NavbarToggle() {
    return <>
        <input id="navbar-toggle" class="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" class="burger-container">
          <img src="/icons/toggle.svg" class="icon-toggle cursor-point" alt=""></img>
        </label>
    </>
}

export default NavbarToggle;