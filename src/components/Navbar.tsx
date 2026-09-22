import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="topbar">
            <nav className="navbar container" aria-label="Main navigation">
                <div className="brand-wrap">
                    <div className="brand-mark" aria-hidden="true">
                        <span className="brand-mark-inner" />
                    </div>
                    <div className="brand-text">
                        <span>Dev</span>
                        <span className="brand-stack">Stack</span>
                    </div>
                </div>

                <div className="nav-links desktop-nav" aria-label="Desktop navigation">
                    {navItems.map((item) => (
                        <a key={item} href="#" className="nav-link">
                            {item}
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
                            <a key={item} href="#" className="nav-link mobile-link" onClick={() => setIsMenuOpen(false)}>
                                {item}
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
