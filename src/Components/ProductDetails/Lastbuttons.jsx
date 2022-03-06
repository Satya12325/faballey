import React from 'react'
import styles from "./lastbuttons.module.css"

export const Lastbuttons = () => {
  return (
    <div>
        <div className={styles.buttonwrapper}>
        <button className={styles.button}>MORE NAB-NOW PIECES</button>&nbsp;
        <button className={styles.button}>MORE BLACK NAB-NOW PIECES</button>
        </div>
    </div>
  )
}