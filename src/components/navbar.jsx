import { motion } from 'framer-motion';
import './css_files/navbar.css';
import logo from '../images/shibexLogoSmall1.webp';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm navbarColor"
      aria-label="Third navbar example"
    >
      <div className="container-fluid">
        <motion.img
          src={logo}
          alt=""
          className="shiba_logo"
          animate={{
            scale: [1, 1.2, 1.2, 0, 1],
            rotate: [0, 0, 360, 0, 360],
          }}
        />

        <button
          className="navbar-toggler border-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="bi bi-list text-info"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse " id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 myNav  col-12 d-flex justify-content-evenly">
            <li className="nav-item">
              <motion.a
                className="nav-link navLinkColor active fw-bold fs-4"
                aria-current="page"
                href="https://shibex-soldiers.web.app/"
                whileHover={{
                  color: 'var(--goldColor)',
                }}
                whileTap={{ scale: 0.5, originX: 0 }}
                target="_blank"
                rel="noreferrer"
              >
                Play
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                className="nav-link navLinkColor fw-bold fs-4"
                href="https://swap.mimo.exchange/#/swap?inputCurrency=0x838403e073a79719a0927a16642ca7dcdc642bd5"
                whileHover={{
                  color: 'var(--goldColor)',
                }}
                whileTap={{ scale: 0.5, originX: 0 }}
                target="_blank"
                rel="noreferrer"
              >
                Buy
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                whileHover={{
                  color: 'var(--goldColor)',
                }}
                whileTap={{ scale: 0.5, originX: 0 }}
                className="nav-link  navLinkColor fw-bold fs-4"
                target="_blank"
                rel="noreferrer"
                href="#"
              >
                News
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
