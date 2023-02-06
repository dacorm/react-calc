import React from 'react';
import styles from './CalcMatrixForm.module.css';
import MatrixImg from '../../images/CalcMatrix.jpg';

export const CalcMatrixForm = () => {
  return (
    <div className={styles.calcMatrixForm}>
      <h1 className={styles.calcMatrixFormTitle}>
        Ваш персональный расчет матрицы судьбы
      </h1>
      <div className={styles.calcMatrixFormTextWrapper}>
        <p className={styles.calcMatrixFormText}>Имя: Амогус</p>
        <p className={styles.calcMatrixFormText}>Дата рождения: 26.10.2000</p>
        <p className={styles.calcMatrixFormText}>Возраст: 22</p>
      </div>
      <img
        className={styles.calcMatrixImage}
        src={MatrixImg}
        alt="Матрица с вычислениями"
      />
    </div>
  );
};
