import React from "react";
import styles from "../Toolbox.module.css";
import { Link } from "react-router-dom";
const ChapterPeople = () => {
  return (
    <>
      <section className={styles.header_bg}>
        <div className={styles.container + " " + styles.header}>
          <img className={styles.header_img} src="/assets/people.png" alt="" />
          <div className={styles.header_text}>
            <p className={styles.smalltitle}>Chapter 2</p>
            <h1 className={styles.heading1}>Managing people</h1>
            <p className={styles.intro}>
              Once you know when and when the race will take place, it is
              important to create a strong team and think about who does what.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <section className={styles.whenwere}>
          <h2 className={styles.heading2}>Selecting a race committee</h2>
          <div className={styles.grid}>
            <div>
              <p className={styles.copy}>
                <span className={styles.highlight}>
                  Remember that the Race is a joint effort.
                </span>
                Depending on your organisation and your means, you can decide to
                put into place some committees, which will coordinate one or
                several specific aspects of the race. However, it is quite
                important to have a Race Committee. This latter will be in
                charge of the overall organisation. Then, you can create smaller
                committee, such as a volunteer committee or a logistic
                committee.
              </p>
            </div>
            <div>
              <img
                src="/assets/empty_request.png"
                className={styles.header_img}
                alt=""
              />
            </div>
          </div>
        </section>
        <div className={styles.quote + " " + styles.card}>
          <p>
            A succesful Race is a joint effort. Planning, implementing and
            evaluating a Race together can be fun or challenging, but almost
            always rewarding.
          </p>
        </div>
        <section>
          <div>
            <div className={styles.next}>
              <h3 className={styles.heading2}>Jobs to be done</h3>
              <p className={styles.copy}>
                We advise you to assign the following roles to seperate
                individuals in your Race Committee
              </p>
            </div>

            <div className={styles.jobs}>
              <div
                className={
                  styles.job_card + " " + styles.orange + " " + styles.grow
                }
              >
                <img
                  src="/assets/jobs/ambassador.png"
                  className={styles.job_img}
                  alt=""
                />
                <div>
                  <h4 className={styles.job_title}>Ambassador</h4>
                  <p className={styles.job_desc}>
                    Helps generate media attention and coverage
                  </p>
                </div>
              </div>
              <Link
                to={`/toolbox/people/event`}
                className={
                  styles.job_card + " " + styles.green + " " + styles.grow
                }
              >
                <img
                  src="/assets/jobs/event.png"
                  className={styles.job_img}
                  alt=""
                />
                <div>
                  <h4 className={styles.job_title}>Event manager</h4>
                  <p className={styles.job_desc}>
                    Responsible for the overall planning and implementation
                  </p>
                </div>
              </Link>
              <div
                className={
                  styles.job_card + " " + styles.blue + " " + styles.grow
                }
              >
                <img
                  src="/assets/jobs/sponsor.png"
                  className={styles.job_img}
                  alt=""
                />
                <div>
                  <h4 className={styles.job_title}>Sponsor manager</h4>
                  <p className={styles.job_desc}>
                    Responsible for identifying and securing sponsors
                  </p>
                </div>
              </div>
              <div
                className={
                  styles.job_card + " " + styles.lime + " " + styles.grow
                }
              >
                <img
                  src="/assets/jobs/logic.png"
                  className={styles.job_img}
                  alt=""
                />
                <div>
                  <h4 className={styles.job_title}>Logistics manager</h4>
                  <p className={styles.job_desc}>
                    Responsibility for identifying and securing logistics
                  </p>
                </div>
              </div>
              <div
                className={
                  styles.job_card + " " + styles.pinq + " " + styles.grow
                }
              >
                <img
                  src="/assets/jobs/volunteer.png"
                  className={styles.job_img}
                  alt=""
                />
                <div>
                  <h4 className={styles.job_title}>Volunteer manager</h4>
                  <p className={styles.job_desc}>
                    Responsible for covering all things related to volunteers
                  </p>
                </div>
              </div>
              <div
                className={
                  styles.job_card + " " + styles.softpink + " " + styles.grow
                }
              >
                <img
                  src="/assets/jobs/survivor.png"
                  className={styles.job_img}
                  alt=""
                />
                <div>
                  <h4 className={styles.job_title}>
                    Survivor recognition <br /> manager
                  </h4>
                  <p className={styles.job_desc}>
                    responsible for the most inspiring part of Race day
                  </p>
                </div>
              </div>
              <div
                className={
                  styles.job_card + " " + styles.purple + " " + styles.grow
                }
              >
                <img
                  src="/assets/jobs/prmanager.png"
                  className={styles.job_img}
                  alt=""
                />
                <div>
                  <h4 className={styles.job_title}>PR manager</h4>
                  <p className={styles.job_desc}>
                    Oversees the public relations committee
                  </p>
                </div>
              </div>

              <div
                className={
                  styles.job_card + " " + styles.yellow + " " + styles.grow
                }
              >
                <img
                  src="/assets/jobs/racetreasurer.png"
                  className={styles.job_img}
                  alt=""
                />
                <div>
                  <h4 className={styles.job_title}>Race Treasurer</h4>
                  <p className={styles.job_desc}>
                    Responsible for managing the race budget
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.purple_bg}>
        <div className={styles.container}>
          <div className={styles.next}>
            <h3 className={styles.heading2}>What's next</h3>
            <p className={styles.copy}>
              Got your Race Committee up and running? Time to take a look at
              more practical things then.
            </p>
          </div>
          <div className={styles.card_grid}>
            <div className={styles.chapter_card + " " + styles.grow}>
              <div className={styles.image_container}>
                <img
                  className={styles.chapter_image}
                  src="/assets/financial.png"
                  alt=""
                />
              </div>
              <div>
                <p className={styles.card_subtitle}>Chapter 3</p>
                <h4 className={styles.card_title}>Financials and sponsors</h4>
              </div>
            </div>
            <div className={styles.chapter_card + " " + styles.grow}>
              <div className={styles.image_container}>
                <img
                  className={styles.chapter_image}
                  src="/assets/legal.png"
                  alt=""
                />
              </div>
              <div>
                <p className={styles.card_subtitle}>Chapter 4</p>
                <h4
                  className={styles.card_title + " " + styles.card_title_small}
                >
                  Legal, security and medical provision
                </h4>
              </div>
            </div>
            <div className={styles.chapter_card + " " + styles.grow}>
              <div className={styles.image_container}>
                <img
                  className={styles.chapter_image}
                  src="/assets/empty_request.png"
                  alt=""
                />
              </div>
              <div>
                <p className={styles.card_subtitle}>chapter 5</p>
                <h4 className={styles.card_title}>Public relations</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChapterPeople;
