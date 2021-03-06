import React from "react";
import styles from "./Home.module.css";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import * as Scroll from "react-scroll";

const Home = () => {
  const SmoothLink = Scroll.Link;

  return (
    <>
      <div className={styles.bg_img}>
        <section className={styles.purple_bg + " " + styles.margin_top}>
          <div className={styles.container + " " + styles.float}>
            <img
              src="../../../assets/think-pink.png"
              width="150"
              alt="pink think logo"
            />
            <h2 className={styles.heading1}>
              Organise your race <br /> from start to finish
            </h2>
            <p className={styles.body}>
              Consult our open collection of guidelines
              <br />
              and tools to help you with the organisation <br />
              of a Race for the Cure
            </p>

            <SmoothLink
              className={styles.button}
              to="scrollto"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Learn more
              <FontAwesome className={styles.margin_left} name="chevron-down" />
            </SmoothLink>
          </div>
        </section>
        <section
          id="scrollto"
          name="scrollTo"
          className={styles.spacer + " " + styles.right + " " + styles.float}
        >
          <div className={styles.container}>
            <h3 className={styles.heading2}>
              Let our guidelines lead <br />
              the way for your race
            </h3>
            <p className={styles.body}>
              Our toolbox consists out of guidelines and tips, based on
              experiences from many organisations. Use it as a guide to collect
              ideas to make your Race a great one.
            </p>
            <Link className={styles.button} to={ROUTES.toolbox}>
              Toolbox
              <FontAwesome
                className={styles.margin_left}
                name="chevron-right"
              />
            </Link>
          </div>
        </section>
        <section className={styles.spacer + " " + styles.float}>
          <div className={styles.container}>
            <h3 className={styles.heading2}>
              Get the right look and feel with our designstudio
            </h3>
            <p className={styles.body}>
              Our designtool helps you create promotional material in no time.
              With just a few clicks your fabulous posters and T-shirts will be
              ready for print!
            </p>
            <Link className={styles.button} to={ROUTES.designstudio}>
              Designstudio
              <FontAwesome
                className={styles.margin_left}
                name="chevron-right"
              />
            </Link>
          </div>
        </section>
        <section className={styles.purple_bg + " " + styles.bg_end}>
          <div className={styles.container}>
            <div className={styles.card + " " + styles.float}>
              <div className={styles.modalContainer}>
                <h3 className={styles.heading2}>
                  Team up with Think Pink Europe
                </h3>
                <p className={styles.body}>
                  Is your organisation ready to take part in Europe’s
                  <br /> biggest sport event to fight against breast cancer?{" "}
                  <br />
                  Get in touch and join the movement!
                </p>
                <Link className={styles.button} to={ROUTES.request}>
                  Request access
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
