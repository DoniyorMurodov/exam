import React from 'react'
import styles from '../styles/Main.module.css'

const Main = () => {
  return (
    <div>
        <div className={styles.main}>
            <button className={styles.btn}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quia perspiciatis soluta incidunt, reprehenderit iusto  <br />numquam aliquam earum voluptas tempore, ipsam doloribus nisi <br /> cum voluptatum maxime quae mollitia. Necessitatibus, culpa <br /> rerum?</button>
        </div>
        <div className={styles.kotegoriya}>
          <a className={styles.A} href="">ABOUT</a>
          <a className={styles.A} href="">ABOUT</a>
          <a className={styles.A} href="">ABOUT</a>
          <a className={styles.A} href="">ABOUT</a>
          <a className={styles.A} href="">ABOUT</a>
          <a className={styles.A} href="">ABOUT</a>
          <a className={styles.A} href="">ABOUT</a>
          <a className={styles.A} href="">ABOUT</a>
          <a className={styles.A} href="">ABOUT</a>
          <a className={styles.A} href="">ABOUT</a>
       
        </div>
    </div>
  )
}

export default Main