import React from "react";
import styles from "../Toolbox.module.css";
import { ROUTES } from "../../constants";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <>
      <img className={styles.welcome_img} src="/assets/welcome.png" alt="" />
      <div className={styles.container + " " + styles.margincontainer}>
        <section className={styles.introduction}>
          <div className={styles.content}>
            <p className={styles.smalltitle}>Introduction</p>
            <h1 className={styles.heading1}>
              Let these guidelines lead the way
            </h1>

            <p className={styles.largebody + " " + styles.margin_top}>
              Race for the Cure grew to be the world’s largest sporting event in
              the fight against breast cancer. Yet there is always room for
              growth.
            </p>
            <p className={styles.largebody}>
              This toolkit was created to help you organise a Race from start to
              finish. Whether you organise it for the first time or not, use
              this toolkit as a guideline, a plan or simply as inspiration.
            </p>
          </div>
        </section>
      </div>
      <section className={styles.purple_bg}>
        <div className={styles.container}>
          <div className={styles.next}>
            <h3 className={styles.heading2}>Getting Started</h3>
          </div>
          <div className={styles.card_grid}>
            <div className={styles.chapter_card + " " + styles.grow}>
              <Link to={ROUTES.start}>
                <div className={styles.image_container}>
                  <img
                    className={styles.chapter_image}
                    src="/assets/starting.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className={styles.card_subtitle}>chapter 1</p>
                  <h4 className={styles.card_title}>starting your event</h4>
                </div>
              </Link>
            </div>
            <div className={styles.chapter_card + " " + styles.grow}>
              <Link to={ROUTES.people}>
                <div className={styles.image_container}>
                  <img
                    className={styles.chapter_image}
                    src="/assets/people.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className={styles.card_subtitle}>chapter 2</p>
                  <h4 className={styles.card_title}>Managing People</h4>
                </div>
              </Link>
            </div>
            <div className={styles.chapter_card + " " + styles.grow}>
              <Link to={ROUTES.people}>
                <div className={styles.image_container}>
                  <img
                    className={styles.chapter_image}
                    src="/assets/financial.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className={styles.card_subtitle}>chapter 3</p>
                  <h4 className={styles.card_title}>
                    Financial &amp; Sponsors
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <section className={styles.share}>
          <img
            className={styles.shareImage}
            src="/assets/empty_announcements.png"
            alt=""
          />
          <div className={styles.shareContent}>
            <p className={styles.heading3}>
              Share your knowledge to expand our toolbox.
            </p>

            <p className={styles.copy + " " + styles.margin_top}>
              Although the guidelines are carefully put together, they are far
              from complete. We are more than happy to hear your about
              experiences, tips and remarks so we can continuously update our
              guidelines.
            </p>
            <a className={styles.button} href="/">
              Get in touch
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
export default Welcome;
