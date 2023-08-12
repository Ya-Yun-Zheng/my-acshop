import './Header.scss'
import NavbarToggle from './NavbarToggle';
import NavbarMenu from './NavbarMenu';
import LogoContainer from './LogoContainer';

function Header() {
    return (
        <header className='site-header'>
            <div class="header-container mx-auto">
                <NavbarToggle/>
                <NavbarMenu/>
                <LogoContainer/>
            </div>
        </header>
    );
}

export default Header;