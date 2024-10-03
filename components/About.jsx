import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div>
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.left}></div>
                <div className={styles.right}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quia perspiciatis soluta incidunt, reprehenderit iusto  <br />numquam aliquam earum voluptas tempore, ipsam doloribus nisi <br /> cum voluptatum maxime quae mollitia. Necessitatibus, culpa <br /> rerum?</div>
            </div>
            <div className={styles.card}>
            
                <div className={styles.right}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quia perspiciatis soluta incidunt, reprehenderit iusto  <br />numquam aliquam earum voluptas tempore, ipsam doloribus nisi <br /> cum voluptatum maxime quae mollitia. Necessitatibus, culpa <br /> rerum?</div>
                <div className={styles.left}></div>
            </div>

            <div className={styles.card}>
                <div className={styles.left}></div>
                <div className={styles.right}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quia perspiciatis soluta incidunt, reprehenderit iusto  <br />numquam aliquam earum voluptas tempore, ipsam doloribus nisi <br /> cum voluptatum maxime quae mollitia. Necessitatibus, culpa <br /> rerum?</div>
            </div>
        
        </div>
    </div>
  )
}

export default About