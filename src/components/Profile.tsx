import React from "react";

import styles from "../styles/components/Profile.module.css";

export default function () {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/40405334?s=460&u=2050c0566a83c840ae936555933d8b42b061cbdf&v=4"
        alt="Imagem Carolina Gonzalez"
      />

      <div>
        <strong>Carolina Gonzalez</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
