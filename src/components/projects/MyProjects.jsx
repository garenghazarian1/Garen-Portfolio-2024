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
            className={styles.link}
            target="_blank"
          >
            🔗 Click here to open the Link
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

        {/* ------------------------------------ */}

        <div className={styles.projectPreview}>
          <h2 className={styles.h2}>
            🎰 Eurojackpot Number Analyzer &ndash; A Smart Approach to Winning!
          </h2>

          {/* 🔗 Clickable External Link */}
          <Link
            href="https://garenghazarian1.github.io/Eurojackpot/"
            className={styles.link} // Corrected className
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Click here to open the Link
          </Link>

          {/* 🖼️ Responsive iFrame */}
          <div className={styles.iframeContainer}>
            <iframe
              src="https://garenghazarian1.github.io/Eurojackpot/"
              frameBorder="0"
              className={styles.iframe} // Proper styling
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Eurojackpot Number Analyzer"
            ></iframe>
          </div>

          {/* 📜 Project Description */}
          <p className={styles.p}>
            Hey everyone! 👋 I&#39;ve been working on an{" "}
            <strong>intelligent Eurojackpot number analyzer</strong> that helps
            analyze past draw results, track number frequencies, and generate{" "}
            <strong>strategic number combinations</strong> based on different
            methods:
          </p>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              ✅ <strong>🔥 Hot Numbers</strong> &ndash; Picks the most
              frequently drawn numbers.
            </li>
            <li className={styles.listItem}>
              ✅ <strong>❄️ Cold Numbers</strong> &ndash; Selects numbers that
              haven&#39;t appeared much.
            </li>
            <li className={styles.listItem}>
              ✅ <strong>🎯 Balanced Strategy</strong> &ndash; A mix of both hot
              and cold numbers with additional balancing rules.
            </li>
          </ul>

          <h3 className={styles.h3}>💡 Features of the App:</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              🔢 <strong>Dynamic Input Handling</strong> &ndash; No more static
              text! Easily enter and edit past draws using intuitive input
              fields.
            </li>
            <li className={styles.listItem}>
              📊 <strong>Visual Frequency Charts</strong> &ndash; Analyzes
              number trends and displays them in an interactive chart.
            </li>
            <li className={styles.listItem}>
              🎲 <strong>Smart Combination Generator</strong> &ndash; Uses
              real-time calculations to predict number patterns.
            </li>
          </ul>
        </div>
        {/* ------------------------------------ */}

        <div className={styles.projectPreview}>
          <h2 className={styles.h2}>
            Interactive Music and Video Platform for Vartan Ghazarian
          </h2>

          <Link
            href="https://vartanghazarian.com/"
            className={styles.link}
            target="_blank"
          >
            🔗 Click here to open the Link
          </Link>
          <div className={styles.iframeContainer}>
            <iframe
              src="https://vartanghazarian.com/"
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
        {/* ------------------------------------ */}

        <div className={styles.projectPreview}>
          <h2 className={styles.h2}>Game Interface</h2>

          <Link
            href="https://garenghazarian1.github.io/Kostas-Garen-group-project/#"
            className={styles.link}
            target="_blank"
          >
            🔗 Click here to open the Link
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
        {/* ------------------------------------ */}

        <div className={styles.projectPreview}>
          <h2 className={styles.h2}>NIght moon</h2>
          <Link
            href="https://garenghazarian1.github.io/night-moon/#"
            className={styles.link}
            target="_blank"
          >
            🔗 Click here to open the Link
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
        {/* ------------------------------------ */}
        <div className={styles.projectPreview}>
          <h2 className={styles.h2}>Portfolio</h2>
          <Link
            href="https://garenghazarian1.github.io/portfolio-28-06-2023/index.html"
            className={styles.link}
            target="_blank"
          >
            🔗 Click here to open the Link
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
