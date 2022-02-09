import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import thirdImage from '../images/avatar_update/image0.png';
import firstImage from '../images/avatar_update/image1.png';
import forthImage from '../images/avatar_update/image2.png';
import sixtImage from '../images/avatar_update/image3.png';
import fifthImage from '../images/avatar_update/image4.png';
import eightImage from '../images/avatar_update/image5.png';
import sevenImage from '../images/avatar_update/image6.png';
import secondImage from '../images/avatar_update/image7.png';
import './css_files/testimonial.css';
const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      //end point of animation
      animation.start({
        x: '0',
        rotate: [0, 360, 0, 360],
        transition: {
          duration: 0.6,
        },
      });
    }
    if (!inView) {
      //start point of animation
      animation.start({ x: '-200vw' });
    }
  }, [inView, animation]);

  return (
      <>
        {' '}
        <section
            className="testimonial-section d-flex align-items-center "
            style={{ position: 'relative' }}
        >
          {/* desktop */}
          <div className="custom-shape-divider-top-desktop">
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1100 120"
                preserveAspectRatio="none"
            >
              <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  className="shape-fill"
              ></path>
              <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  className="shape-fill"
              ></path>
              <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  className="shape-fill"
              ></path>
            </svg>
          </div>
          {/* mobile */}
          <div className="custom-shape-divider-top-mobile">
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
              <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  className="shape-fill"
              ></path>
              <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  className="shape-fill"
              ></path>
              <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="container testimonials-title" ref={ref}>
            <motion.h1
                className="testi-header text-capitalized headerTitle mt-5"
                animate={animation}
            >
              The Shibex Team
            </motion.h1>
            <div
                className="row align-items-center testimonials-row  "
                data-bs-interval={3000}
            >
              <div className="col-md-6 col-6 testi-img ">
                <div className="img-box ">
                  <div className="circle" />
                  <div className="img-box-inner ">
                    <div
                        id="myCarousel"
                        className="carousel slide "
                        data-bs-ride="carousel"
                        data-bs-interval={5000}
                    >
                      <div className="carousel-inner ">
                        <div className="carousel-item active">
                          <img
                              src={firstImage}
                              className="d-block  testSlider ms-2 "
                              alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                              src={secondImage}
                              className="d-block  testSlider ms-2"
                              alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                              src={thirdImage}
                              className="d-block  testSlider ms-2"
                              alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                              src={forthImage}
                              className="d-block  testSlider ms-2"
                              alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                              src={fifthImage}
                              className="d-block  testSlider ms-2"
                              alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                              src={sixtImage}
                              className="d-block  testSlider ms-2"
                              alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                              src={sevenImage}
                              className="d-block  testSlider ms-2"
                              alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                              src={eightImage}
                              className="d-block  testSlider ms-2"
                              alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div
                    id="myCarousel"
                    className="carousel slide"
                    data-bs-interval={5000}
                    data-bs-ride="carousel"
                >
                  <div className="carousel-inner text-light p-3 text-center ">
                    <div className="carousel-item testi-item active">
                      <h3 className="fontName">Raph, CEO</h3>
                      <span className="paragraph fw-bolder  ">
                      GAMING OBSESSED
                    </span>
                    </div>
                    <div className="carousel-item testi-item">
                      <h3 className=" fontName">Jo, CTO</h3>
                      <span className="paragraph fw-bolder  ">
                      HERE FOR THE TECH
                    </span>
                    </div>
                    <div className="carousel-item testi-item ">
                      <h3 className="   fontName ">Nati, COO</h3>
                      <span className="paragraph fw-bolder">ORGANISED AF</span>
                    </div>
                    <div className="carousel-item testi-item">
                      <h3 className="   fontName">Steven & Jose, ADVISORS</h3>
                      <span className="paragraph fw-bolder ">
                      BELIEVERS, MOON SHOT
                    </span>
                    </div>
                    <div className="carousel-item testi-item">
                      <h3 className="   fontName">Salome, CM</h3>
                      <span className="paragraph fw-bolder  ">
                      COMMUNITY IS EVERYTHING
                    </span>
                    </div>
                    <div className="carousel-item testi-item">
                      <h3 className="   fontName ">Alex, NEGOTIATOR</h3>
                      <span className="paragraph fw-bolder  ">
                      HOTHEAD INSANE NEGOTIATOR
                    </span>
                    </div>
                    <div className="carousel-item testi-item">
                      <h3 className="   fontName">Badi & Ryan, CMO</h3>
                      <span className="paragraph fw-bolder  ">
                      LIVE IN THE WEB3
                    </span>
                    </div>
                    <div className="carousel-item testi-item">
                      <h3 className="   fontName">Ubab</h3>
                      <span className="paragraph fw-bolder ">
                      DESIGNER GRAPHICS ADDICT
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default Testimonials;
