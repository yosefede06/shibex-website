import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './css_files/gamePlay.css';

const GamePlay = () => {
  const { ref, inView } = useInView({
    root: document,
    rootMargin: '10%',
    threshold: 0.1,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      //end point of animation
      animation.start({
        y: '0',
        opacity: 1,
      });
    }
    if (!inView) {
      //start point of animation
      animation.start({ y: '-200px', opacity: 0 });
    }
  }, [inView, animation]);

  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      //end point of animation2
      animation2.start({
        y: '0',
        opacity: 1,
      });
    }
    if (!inView) {
      //start point of animation2
      animation2.start({ y: '200px', opacity: 0 });
    }
  }, [inView, animation2]);

  return (
      <>
        <section className="gamePlay-cont">
          <div className="container mt-3 gamePlay-container align-center">
            <div className="row">
              <div className="col-12">
                <div className="header" ref={ref}>
                  <motion.h1
                      className="text-center display-1 gameplayHeader mb-3 mt-5"
                      animate={animation2}
                  >
                    The Shibex Games
                  </motion.h1>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row ">
              <div className="col-12 col-sm-4  video-container ">
                <iframe
                    className="video"
                    // src="https://www.youtube.com/embed/nVIw_b1CQNA?&autoplay=1&mute=1&loop=1&controls=0"
                    src="https://www.youtube.com/embed/nVIw_b1CQNA?&controls=0"
                    title="Shibex Ride GamePlay"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12 buttonWrapper mt-5" ref={ref}>
                <motion.button
                    className="platBtn btn-lg rounded-pill"
                    animate={animation}
                >
                  <a
                      href="https://shibex-soldiers.web.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-dark"
                      style={{ textDecoration: 'none' }}
                  >
                    <strong className="innerBtn">Let's Play</strong>
                  </a>
                </motion.button>
              </div>
            </div>
            <br />
            <br />
          </div>
        </section>
      </>
  );
};

export default GamePlay;
