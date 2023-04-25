import React from 'react';
import styles from './home.module.css';
import Button from '../../components/Button';
import Nina from '../../assets/images/nina.png';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2>Descubri las fragancias de la vida</h2>
        <Button>Ver productos</Button>
      </div>
      <div className={styles.img_container}>
        <img src={Nina} alt="Imagen de un perfume" />
      </div>
    </div>
  )
}

export default Home;