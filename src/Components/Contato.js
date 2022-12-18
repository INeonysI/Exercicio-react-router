import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';
const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title="Ranek | contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de esquecrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>andre@origamid.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
