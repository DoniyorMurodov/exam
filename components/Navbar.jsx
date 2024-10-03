import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div>
<div className={styles.all}>
    <div className={styles.left}><img className={styles.imgnav} src="nav.jpg" alt="" /></div>
    <div className={styles.center}>
        <a className={styles.A} href="">Home</a>
        <a className={styles.A} href="">About</a>
        <a className={styles.A} href="">Contact</a>
    </div>
    <div className={styles.right}>
        <button className={styles.btn}>Sign up</button>
    </div>
</div>
    </div>
  )
}

export default Navbar