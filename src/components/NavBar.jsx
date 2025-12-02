import { useState } from 'react';
import logo from '/logo/logo.png';
import { MenuIcon, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SideBar } from '#components';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const [hamMenuOpen, setHamMenuOpen] = useState(false);

    const toggleHamMenu = () => {
        setHamMenuOpen((prev) => !prev);
    };

    const navLinkClass = ({ isActive }) => `${isActive ? 'text-emerald-400' : 'text-white'} cursor-pointer transition duration-300`;
    return (
        <>
            <nav className="navBar">
                {/* Logo */}
                <div className="cursor-pointer" onClick={() => navigate('/')}>
                    <img src={logo} alt="logo" className="h-11 md:h-13 xl:h-14" />
                </div>

                {
                    !hamMenuOpen ? (
                        /* Menu Icon */
                        <div
                            onClick={toggleHamMenu}
                            className="md:hidden text-gray-400 focus:text-cyan-300  cursor-pointer"
                            style={{
                                borderRadius: '8px',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                padding: '2px',
                                boxShadow: 'inset 0 0 0 1px #16a34a',
                                filter: 'drop-shadow(0 0 1px #16a34a)',
                            }}
                        >
                            <MenuIcon size={32} />
                        </div>
                    ) : (
                        /* Close Icon */
                        <div
                            onClick={toggleHamMenu}
                            className="md:hidden text-gray-400 active:text-red-300 cursor-pointer"
                            style={{
                                borderRadius: '17px',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                padding: '2px',
                                boxShadow: 'inset 0 0 0 1px #16a34a',
                                filter: 'drop-shadow(0 0 2px #16a34a)',
                            }}>
                            <X size={32} />
                        </div>
                    )
                }


                {/* Navigation Menu Desktop */}
                <ul
                    className="hidden md:flex gap-15 font-medium text-lg tracking-widest bg-black/30 backdrop-blur-sm text-white px-8 py-3 relative list-none "
                    style={{
                        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
                        filter: 'drop-shadow(0 0 4px #16a34a)',
                        boxShadow: 'inset 0 0 0 2px #16a34a',
                    }}
                >
                    <li>
                        <NavLink
                            to='/'
                            className={navLinkClass}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li >
                        <NavLink
                            to='/projects'
                            className={navLinkClass}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li >
                        <NavLink
                            to='/about'
                            className={navLinkClass}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/contact'
                            className={navLinkClass}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <SideBar open={hamMenuOpen} close={() => setHamMenuOpen(false)} />
        </>
    );
}

export default NavBar;