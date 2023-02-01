import React from "react";
import styles from "./MatrixDescription.module.css";
import Matrix from "../../images/matrica-destiny.svg";

export const MatrixDescription = () => {
  return (
    <div className={styles.matrixDescription}>
      <h2 className={styles.matrixDescriptionTitle}>
        Что такое матрицы судьбы?
      </h2>
      <div className={styles.matrixDescriptionWrapper}>
        <div className={styles.matrixDescriptionTextWrapper}>
          <p className={styles.matrixDescriptionText}>
            Это система для персонального расчёта всех важных аспектов жизни,
            основанная на дате вашего рождения. Это самое простое и быстрое
            решение, если вам нужны точные ответы здесь и сейчас.
          </p>
          <p className={styles.matrixDescriptionText}>
            Результаты расшифровок нашего калькулятора, дают не только подробное
            описание ваших качеств, но и откроют «слепые зоны» и врожденные
            программы, развивая которые, Вы перейдёте на новый уровень во всех
            сферах жизни.
          </p>
          <p className={styles.matrixDescriptionText}>
            Благодаря комбинации из тысяч расшифровок в нашем сервисе, Вы
            моментально получите свой глубокий разбор личности, даже без помощи
            нумеролога.
          </p>
        </div>
        <img className={styles.matrixDescriptionImage} src={Matrix} />
      </div>
    </div>
  );
};
