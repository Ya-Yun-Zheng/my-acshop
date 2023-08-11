import { useState } from "react";
import NavList from "./NavList";
import NavLink from "./NavLink";
import NavIcon from "./NavIcon";
import "./NavbarMenu.scss";

function NavbarMenu() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeClick() {
    console.log(darkMode);
    document.body.setAttribute("data-theme", darkMode ? "light" : "dark");
    setDarkMode(!darkMode);
  }

  return (
    <nav className="navbar-menu">
        <NavList className="site-menu-list mr-auto">
          <NavLink link="#">男款</NavLink>
          <NavLink link="#">女款</NavLink>
          <NavLink link="#">最新消息</NavLink>
          <NavLink link="#">客製商品</NavLink>
          <NavLink link="#">聯絡我們</NavLink>
        </NavList>
        <NavList className="site-action-list">
          <NavIcon src="/icons/search.svg"/>
          <NavIcon src="/icons/cart.svg"/>
          <NavIcon
            src={`/icons/${darkMode ? "sun" : "moon"}.svg`}
            onClick={handleDarkModeClick}
          />
        </NavList>
    </nav>
  );
}

export default NavbarMenu;
