import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
        <section className={styles.contactInformation}>
            <h1 className=''>Contact us:</h1>
            <p className=''>example@mail.com</p>
        </section>
    </footer>
  )
}

export default Footer