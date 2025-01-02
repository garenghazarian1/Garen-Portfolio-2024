// MyProjects.js
import Link from "next/link";
import styles from "./MyProjects.module.css";
import { useTranslations } from "next-intl";

export default function MyProjects() {
  const t = useTranslations("MyProjects");
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>{t("title")}</h1>
        <div className={styles.projectPreview}>
          <h2 className={styles.h2}>KEN Beauty Center: Project Overview</h2>
          <Link
            href="https://kenbeautysalon.com/"
            className={styles.h2}
            target="_blank"
          >
            CLick here to open the link
          </Link>
          <div className={styles.iframeContainer}>
            <iframe
              src="https://kenbeautysalon.com/"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className={styles.p}>
            KEN Beauty Center is my inaugural real-world project, developed for
            a client in Abu Dhabi. This comprehensive application empowers the
            business owner to seamlessly manage multiple salon locations through
            a single interface. Key features include:
            <ul>
              <li>
                <strong>Store Management:</strong> Owners can establish new
                store locations, complete with customizable operational hours,
                off days, and service offerings. Each store can be uniquely
                tailored with its own sections, service categories, titles,
                descriptions, durations, and pricing structures.
              </li>
              <li>
                <strong>Employee Coordination:</strong> The platform facilitates
                the hiring of new employees and the precise management of their
                schedules, including work hours, days, and vacation periods. It
                also provides functionalities for monitoring appointments,
                salaries, and commission percentages.
              </li>
              <li>
                <strong>Service Booking:</strong> Clients can conveniently
                schedule appointments, choosing their preferred store, time, and
                service provider. The system is designed to ensure that each
                appointment is unique, enhancing customer experience and
                operational efficiency.
              </li>
              <li>
                <strong>Quality Assurance:</strong> All functionalities are
                rigorously tested to maintain high standards of reliability and
                user satisfaction.
              </li>
            </ul>
          </p>
        </div>

        <div className={styles.projectPreview}>
          <h2 className={styles.h2}>
            Interactive Music and Video Platform for Vartan Ghazarian
          </h2>

          <Link
            href="https://garenghazarian1.github.io/Vartan-/"
            className={styles.h2}
            target="_blank"
          >
            CLick here to open the link
          </Link>
          <div className={styles.iframeContainer}>
            <iframe
              src="https://garenghazarian1.github.io/Vartan-/"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className={styles.p}>
            Project Overview: Developed an immersive web platform for Vartan
            Ghazarian, a celebrated artist, to showcase his musical and video
            content. The website features a dynamic user interface with a modern
            design that includes a full-screen carousel, dedicated music and
            video sections, and interactive elements such as contact forms and
            social media integration.
          </p>
        </div>

        <div className={styles.projectPreview}>
          <h2 className={styles.h2}>Game Interface</h2>

          <Link
            href="https://garenghazarian1.github.io/Kostas-Garen-group-project/#"
            className={styles.h2}
            target="_blank"
          >
            CLick here to open the link
          </Link>
          <div className={styles.iframeContainer}>
            <iframe
              src="https://garenghazarian1.github.io/Kostas-Garen-group-project/#"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className={styles.p}>
            This project showcases an educational game web application,
            developed as a group endeavor. It features a user-friendly hero page
            designed to engage and educate users through interactive gaming
            experiences. The application combines aesthetic appeal with
            functional design, ensuring an intuitive user interface and a
            seamless gameplay experience.
          </p>
        </div>

        <div className={styles.projectPreview}>
          <h2 className={styles.h2}>NIght moon</h2>
          <Link
            href="https://garenghazarian1.github.io/night-moon/#"
            className={styles.h2}
            target="_blank"
          >
            CLick here to open the link
          </Link>
          <div className={styles.iframeContainer}>
            <iframe
              src="https://garenghazarian1.github.io/night-moon/#"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className={styles.p}>
            This project showcases an educational java script website, scroll
            effect.
          </p>
        </div>

        <div className={styles.projectPreview}>
          <h2 className={styles.h2}>Portfolio</h2>
          <Link
            href="https://garenghazarian1.github.io/portfolio-28-06-2023/index.html"
            className={styles.h2}
            target="_blank"
          >
            CLick here to open the link
          </Link>
          <div className={styles.iframeContainer}>
            <iframe
              src="https://garenghazarian1.github.io/portfolio-28-06-2023/index.html"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className={styles.p}>nice styled Portfolio website</p>
        </div>
      </div>
    </>
  );
}
