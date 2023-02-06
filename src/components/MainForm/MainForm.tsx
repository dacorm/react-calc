import React from 'react';
import styles from './MainForm.module.css';

export const MainForm = () => {
  return (
    <div className={styles.mainForm}>
      <h1 className={styles.mainFormTitle}>Матрица судьбы</h1>
      <h2 className={styles.mainFormSubTitle}>Глубокая расшифровка вашей личности</h2>
      <p className={styles.mainFormParagraph}>
        <span className={styles.mainFormSpan}>Рассчитайте бесплатно </span>
        вашу матрицу судьбы, прямо сейчас, чтобы узнать себя на 100%
      </p>
      <form className={styles.mainFormInputs}>
        <input
          id="name"
          type="text"
          placeholder="Введите ваше имя"
          className={styles.inputText}
        />
        <input
          id="date"
          type="text"
          placeholder="Введите дату рождения"
          className={styles.inputText}
        />
        <label className={styles.mainFormSwitch} htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className={`${styles.mainFormSlider} ${styles.mainFormRound}`}></div>
        </label>
        <button type="submit" className={styles.mainFormButton}>
          Рассчитать мою судьбу
        </button>
      </form>
    </div>
  );
};
