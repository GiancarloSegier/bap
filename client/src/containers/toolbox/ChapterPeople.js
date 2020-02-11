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
        <section>
          <div>
            <div className={styles.next}>
              <h3 className={styles.heading2}>Key committee members</h3>
              <p className={styles.copy}>
                This guide includes several jobs descriptions to consider for
                team members who will plan, implement and evaluate a Race event.
              </p>
            </div>

            <div className={styles.jobs}>
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
                    This guide includes several jobs descriptions{" "}
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
                    This guide includes several jobs descriptions{" "}
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
                    This guide includes several jobs descriptions{" "}
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
                    This guide includes several jobs descriptions{" "}
                  </p>
                </div>
              </div>
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
                    This guide includes several jobs descriptions{" "}
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
                    This guide includes several jobs descriptions{" "}
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
                    This guide includes several jobs descriptions{" "}
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
                    This guide includes several jobs descriptions{" "}
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
            <h3 className={styles.heading2}>In depth topics</h3>
            <p className={styles.copy}>
              More about working with people, communication, volunteers
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
                <p className={styles.card_subtitle}>Topic</p>
                <h4 className={styles.card_title}>Volunteers</h4>
              </div>
            </div>
            <div className={styles.chapter_card + " " + styles.grow}>
              <div className={styles.image_container}>
                <img
                  className={styles.chapter_image}
                  src="/assets/financial.png"
                  alt=""
                />
              </div>
              <div>
                <p className={styles.card_subtitle}>Topic</p>
                <h4 className={styles.card_title}>Committee meetings</h4>
              </div>
            </div>
            <div className={styles.chapter_card + " " + styles.grow}>
              <div className={styles.image_container}>
                <img
                  className={styles.chapter_image}
                  src="/assets/financial.png"
                  alt=""
                />
              </div>
              <div>
                <p className={styles.card_subtitle}>chapter 4</p>
                <h4
                  className={styles.card_title + " " + styles.card_title_small}
                >
                  Legal, Security &amp; Medical Provision
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChapterPeople;
