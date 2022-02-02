/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion, useAnimation } from 'framer-motion';
import './css_files/timer.css';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ShibexChart from './shibexChart';

const Timer = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: '0',
        transition: { duration: 0.8, type: 'spring' },
      });
    }
    if (!inView) {
      animation.start({ x: '200vw' });
    }
  }, [inView, animation]);

  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation2.start({
        x: '0',
        transition: { duration: 0.8, type: 'spring' },
      });
    }
    if (!inView) {
      animation2.start({ x: '-200vw' });
    }
  }, [inView, animation2]);
  const animation3 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation3.start({
        opacity: 1,
        transition: { delay: 0.1 },
      });
    }
    if (!inView) {
      animation3.start({ opacity: 0 });
    }
  }, [inView, animation3]);
  return (
    <>
      <section
        className="bg-primary-3 o-hidden"
        style={{ position: 'relative' }}
      >
        <div className="container layer-1 ">
          <div className="row justify-content-between ">
            <motion.div
              className="col-xl-6 text-light mt-5 desktopPara"
              data-aos="fade-right"
              data-aos-easing="ease-in"
            >
              <h1 className="timerHeader ms-5 ">
                A Decentralized GameFi Token that Evolved into the amazing IoTex
                Ecosystem !
              </h1>
              <p className=" timerPara ms-3 mt-5">
                We are always on the move and we are constantly innovating for
                you: referencing, partnerships and above all... new games.
                Here's what to expect: keep an eye on the countdown
              </p>
              <div className="d-flex mb-5">
                <span className="badge badge-primary ">News</span>
                <a
                  href="#"
                  className="text-small hover-arrow newsLink text-muted"
                >
                  Stay Updated with company
                </a>
              </div>
            </motion.div>

            <div className="col-xl-6 col-md-6 mt-5 desktopTimer">
              <motion.div
                className="timer "
                data-aos="fade-left"
                data-aos-easing="ease-in"
              >
                <div className="text-center text-light">
                  <div className="mb-4">
                    <h1 className="comingHeader">
                      Shibex will be tradable on QuickSwap
                    </h1>
                  </div>
                  <div>
                    <span className="text-small text-white fw-bolder  ms-5 coming-soon mb-3 ">
                      Coming Soon!
                    </span>
                  </div>
                </div>
                <div className="card card-body mt-4 shadow-lg timerBox ">
                  <div className="row">
                    <div className="col-12 mb-4 add-countdown-time ">
                      <div data-active className="row text-center">
                        <div className="col">
                          <h2
                            className="  mb-2 timerDigits"
                            style={{ color: 'var(--yellowColor)' }}
                          >
                            00
                          </h2>
                          <span className=" mb-0 timerClock" data-days-label>
                            Days
                          </span>
                        </div>
                        <div className="col">
                          <h2
                            className="  mb-2 timerDigits"
                            style={{ color: 'var(--yellowColor)' }}
                          >
                            00
                          </h2>
                          <span className=" mb-0 timerClock" data-hours-label>
                            Hour
                          </span>
                        </div>
                        <div className="col">
                          <h2
                            className="  mb-2 timerDigits"
                            style={{ color: 'var(--yellowColor)' }}
                          >
                            00
                          </h2>
                          <span className=" mb-0 timerClock" data-minutes-label>
                            Minutes
                          </span>
                        </div>
                        <div className="col">
                          <h2
                            className="  mb-2 timerDigits"
                            style={{ color: 'var(--yellowColor)' }}
                          >
                            00
                          </h2>
                          <span className=" mb-0 timerClock" data-seconds-label>
                            Seconds
                          </span>
                        </div>
                      </div>
                      <div data-elapsed style={{ display: 'none' }}>
                        <h1>
                          This is the fallback for when the countdown is elapsed
                        </h1>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://swap.mimo.exchange/#/swap?inputCurrency=0x838403e073a79719a0927a16642ca7dcdc642bd5"
                    className="btn  rounded-pill purchaseBtn fw-bold mt-4 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buy Shibex
                  </a>
                </div>
              </motion.div>
            </div>

            {/* <motion.div
              className="col-xl-6 text-light mt-5 mobilePara"
              data-aos="fade-right"
              data-aos-easing="ease-in"
            >
              <h1 className="timerHeader ms-5 ">
                A Decentralized GameFi Token that Evolved into the amazing IoTex
                Ecosystem !
              </h1>
              <p className=" timerPara ms-3 mt-5">
                We are always on the move and we are constantly innovating for
                you: referencing, partnerships and above all... new games.
                Here's what to expect: keep an eye on the countdown
              </p>
              <div className="d-flex mb-5">
                <span className="badge badge-primary ">News</span>
                <a
                  href="#"
                  className="text-small hover-arrow newsLink text-muted"
                >
                  Stay Updated with company
                </a>
              </div>
            </motion.div>

            <div className="col-xl-6 col-md-6 mt-5 mobileTimer">
              <motion.div
                className="timer"
                data-aos="fade-left"
                data-aos-easing="ease-in"
              >
                <div className="text-center text-light">
                  <div className="mb-4">
                    <h1 className="comingHeader">
                      Shibex will be tradable on QuickSwap
                    </h1>
                  </div>
                  <div>
                    <span className="text-small text-dark fw-bolder fs-3 ms-5 comingHeader coming-soon mb-3">
                      Coming Soon!
                    </span>
                  </div>
                </div>
                <div className="card card-body mt-4 shadow-lg timerBox  ">
                  <div className="row">
                    <div className="col-12 mb-4 add-countdown-time ">
                      <div data-active className="row text-center">
                        <div className="col">
                          <h2 className=" text-warning mb-2 timerDigits ">
                            00
                          </h2>
                          <span className=" mb-0 timerClock" data-days-label>
                            Days
                          </span>
                        </div>
                        <div className="col">
                          <h2 className=" text-warning mb-2 timerDigits">00</h2>
                          <span className=" mb-0 timerClock" data-hours-label>
                            Hour
                          </span>
                        </div>
                        <div className="col">
                          <h2 className=" text-warning mb-2 timerDigits">00</h2>
                          <span className=" mb-0 timerClock" data-minutes-label>
                            Minutes
                          </span>
                        </div>
                        <div className="col">
                          <h2 className=" text-warning mb-2 timerDigits">00</h2>
                          <span className=" mb-0 timerClock" data-seconds-label>
                            Seconds
                          </span>
                        </div>
                      </div>
                      <div data-elapsed style={{ display: 'none' }}>
                        <h1>
                          This is the fallback for when the countdown is elapsed
                        </h1>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://swap.mimo.exchange/#/swap?inputCurrency=0x838403e073a79719a0927a16642ca7dcdc642bd5"
                    className="btn btn-warning rounded-pill purchaseBtn fw-bold mt-4 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buy Shibex
                  </a>
                </div>
              </motion.div>
            </div> */}
          </div>
        </div>
        <div className="container mt-5" ref={ref}>
          <motion.div className="row chartWrap" animate={animation3}>
            <div className="col-2 col-lg-1 col-xl-2 col-md-1 col-sm-1 "></div>
            <div className="col-10 col-lg-8 col-xl-10 col-md-10 col-sm-10 chart">
              <ShibexChart />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Timer;
