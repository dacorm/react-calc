import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import styles from './CalculatePage.module.css';
import { CalcMatrixForm } from '../../components/CalcMatrixForm/CalcMatrixForm';

export const CalculatePage = () => {
  return (
    <div className={styles.calcPage}>
      <Header />
      <CalcMatrixForm />
      <Footer />
    </div>
  );
};
