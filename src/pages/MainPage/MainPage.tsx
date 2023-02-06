import React from 'react';
import { Header } from '../../components/Header/Header';
import { MainForm } from '../../components/MainForm/MainForm';
import { MatrixDescription } from '../../components/MatrixDescription/MatrixDescription';
import { Footer } from '../../components/Footer/Footer';
import styles from './MainPage.module.css';
import bg from '../../images/bg-first.svg';

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <MainForm />
      <MatrixDescription />
      <Footer />
      <img
        className={styles.mainPageImage}
        src={bg}
        alt="Фоновое изображение главной страницы"
      />
    </div>
  );
};
