import Head from "next/head";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";

import styles from "../styles/pages/Home.module.css"
import { CompletedChallenges } from "../components/CompleteChallenges";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
