import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoText from '../../assets/logo-text.png';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="topbar">
            <nav className="navbar container" aria-label="Main navigation">
                <div className="brand-wrap">
                    <img src={logoText} alt="Dev Stack logo" className="brand-logo" />
                </div>

                <div className="nav-links desktop-nav" aria-label="Desktop navigation">
                    {navItems.map((item) => (
                        <a key={item.label} href={item.href} className="nav-link">
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="nav-actions desktop-nav">
                    <button type="button" className="nav-button ghost">
                        Sign In
                    </button>
                    <button type="button" className="nav-button filled">
                        Sign Up
                    </button>
                </div>

                <button
                    type="button"
                    className="menu-toggle mobile-only"
                    aria-label="Toggle navigation menu"
                    onClick={() => setIsMenuOpen((value) => !value)}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {isMenuOpen && (
                <div className="mobile-menu mobile-only">
                    <div className="mobile-menu-inner">
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} className="nav-link mobile-link" onClick={() => setIsMenuOpen(false)}>
                                {item.label}
                            </a>
                        ))}
                        <div className="mobile-actions">
                            <button type="button" className="nav-button ghost">
                                Sign In
                            </button>
                            <button type="button" className="nav-button filled">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
