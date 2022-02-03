import { motion } from 'framer-motion';
import imgLayout from '../images/shibexDesktop.png';
import imgLayout2 from '../images/shibexMobile.png';
import './css_files/layout.css';
const Layout = () => {
  return (
    <div className=" layoutContainer">
      <div className="col-12">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          src={imgLayout}
          alt="layoutImg"
          className="img-fluid img-desktop"
          style={{ width: '100vw', height: '101vh' }}
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          src={imgLayout2}
          alt="layoutImg"
          className="img-fluid img-mobile"
          style={{ width: '100vw', height: '87vh' }}
        />
        <div className="carousel-caption layout-caption">
          <p className=" fw-bolder text-capitalize">
            An ecosystem of arcade game based on play to burn modele.
          </p>
        </div>
        <motion.div
          className="btn-caption button-layout"
          initial={{ opacity: '0', scale: 0 }}
          animate={{
            opacity: '1',
            transition: { duration: '1' },
            rotate: 360,
            scale: 1,
          }}
          transition={{
            delay: 2,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          <a
            href="https://shibex-soldiers.web.app/"
            className=" btn-slider btn btn-dark rounded-pill innerBtns btn-lg"
            target="_blank"
            rel="noreferrer"
          >
            Let's Play
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Layout;
