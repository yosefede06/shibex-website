import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './css_files/roadmap.css';

const Roadmap = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      //end point of animation
      animation.start({
        opacity: 1,
        transition: { duration: 0.5, delay: 0.2 },
      });
    }
    if (!inView) {
      //start point of animation
      animation.start({ opacity: 0 });
    }
  }, [inView, animation]);

  const animation2 = useAnimation();
  useEffect(() => {
    if (inView) {
      //end point of animation2
      animation2.start({
        opacity: 1,
        x: '0',
        transition: { delay: 0.4 },
      });
    }
    if (!inView) {
      //start point of animation2
      animation2.start({ opacity: 0, x: '10vw' });
    }
  }, [inView, animation]);

  const animation3 = useAnimation();
  useEffect(() => {
    if (inView) {
      //end point of animation3
      animation3.start({
        opacity: 1,
        x: '0',
        transition: { delay: 0.4 },
      });
    }
    if (!inView) {
      //start point of animation3
      animation3.start({ opacity: 0, x: '-10vw' });
    }
  }, [inView, animation3]);
  return (
      <section
          className="sectionRoadmap bg-primary-3 text-light"
          style={{ position: 'relative' }}
      >
        <div className="custom-shape-divider-bottom-1642543135">
          <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
          >
            <path
                d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
                className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="roadmapContainer">
          <div className="row text-center mb-4">
            <div className="col-12 " ref={ref}>
              <motion.h1 className="display-1 roadmapHead" animate={animation}>
                Roadmap
              </motion.h1>
            </div>
          </div>

          <div className="row o-hidden o-lg-visible roadmap-items">
            <div className="col d-flex flex-column align-items-center">
              <ol className="process-vertical mt-5 mb-5 roadmap-list">
                <div className="div" ref={ref}>
                  <motion.li className=" ballsItem firstC " animate={animation2}>
                    <div className="process-circle bg-primary roadmapA  " />
                    <div>
                      <span className="text-small text-muted ">Q4 2021 </span>
                      <h5 className="mb-3 milestoneText text-white q2021">
                        Team Recruitment
                      </h5>
                      <h5 className="mb-3 milestoneText text-white q2021">
                        Launch of the SHIBEX Token
                      </h5>
                      <h5 className="mb-3 milestoneText text-white q2021">
                        Creation of the first game
                      </h5>
                    </div>
                  </motion.li>

                  <motion.li className=" ballsItem " animate={animation3}>
                    <div className="process-circle bg-primary" />
                    <div>
                      <span className="text-small text-muted">Q1 2022 </span>
                      <h5 className="mb-3  milestoneText text-white">
                        Listing on MimoSwap
                      </h5>
                      <h5 className="mb-3  milestoneText text-white">
                        Cross-chain Polygon
                      </h5>
                      <h5 className="mb-3  milestoneText text-white">
                        Listing on QuickSwap
                      </h5>
                      <h5 className="mb-3  milestoneText text-white ">
                        Partnership with well-known NFT collections
                        <br />
                        to integrate them on our “play to burn” games
                      </h5>
                    </div>
                  </motion.li>
                  <motion.li className=" ballsItem " animate={animation2}>
                    <div className="process-circle bg-primary" />
                    <div>
                      <span className="text-small text-muted">Q2 2022 </span>
                      <h5 className="mb-3  milestoneText text-white">
                        Creation of a game ecosystem with
                        <br />
                        the release of a game every month with NFT partnerships
                      </h5>
                      <h5 className="mb-3  milestoneText text-white">
                        Listing on centralized exchange
                      </h5>
                    </div>
                  </motion.li>
                  <motion.li className=" ballsItem " animate={animation3}>
                    <div className="process-circle bg-primary" />
                    <div>
                      <span className="text-small text-muted">Q3 2022</span>
                      <h5 className="mb-3  milestoneText text-white">
                        Continuation of NFT partnerships
                      </h5>
                      <h5 className="mb-3  milestoneText text-white">
                        Burn a part of the supply with the “play to burn”
                      </h5>
                      <h5 className="mb-3  milestoneText text-white">
                        Extend listing on centralized exchanges
                      </h5>
                    </div>
                  </motion.li>

                  <motion.li className=" ballsItem " animate={animation2}>
                    <div className="process-circle process-ultimate bg-primary" />
                    <div>
                    <span className="text-small milestoneHead text-muted">
                      Q4 2022
                    </span>
                      <h5 className="mb-3  milestoneText  text-light text-start">
                        Creation of a new token that will allow holders to receive
                        dividends.
                      </h5>
                      <h5 className="mb-3  milestoneText  text-light  text-start">
                        This new token could be claim by Shibex holders.
                      </h5>
                      <h5 className="mb-3  milestoneText text-light  text-start">
                        It will have 8B of supply.
                      </h5>
                    </div>
                  </motion.li>
                </div>
              </ol>
              <h5>To be continued…</h5>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Roadmap;
