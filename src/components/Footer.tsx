import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const productLinks = ['Technologies', 'Projects', 'Features'];
const companyLinks = ['About', 'Contact', 'Careers'];
const legalLinks = ['Privacy Policy', 'Terms', 'Cookies'];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand-wrap">
            <div className="brand-mark" aria-hidden="true">
              <span className="brand-mark-inner" />
            </div>
            <div className="brand-text">
              <span>Dev</span>
              <span className="brand-stack">Stack</span>
            </div>
          </div>
          <p>
            Discover the best tools and technologies to build modern digital products.
          </p>
          <div className="social-links" aria-label="Social links">
            <a href="#" aria-label="GitHub" className="social-icon"><FaGithub /></a>
            <a href="#" aria-label="X" className="social-icon"><FaXTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            {productLinks.map((link) => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            {companyLinks.map((link) => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            {legalLinks.map((link) => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
