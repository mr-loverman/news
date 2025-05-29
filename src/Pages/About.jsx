import styles from '../Styles/About.module.css'
import logo from '../assets/Dyci_logo.png'

function About() {

  return(
    <div className={styles.About_container}>
      <div className={styles.Upper_about}>
        <div className={styles.Upper_left_about}>
          <img src={logo} />
        </div>
        <div className={styles.Upper_right_about}>
          <div className={styles.Upper_about_text_container}>
            <p className={styles.text}>
              This news site aims to inform and update students about current advancement and happenings in the Computer Engineering related industries.
              <br/>
              <br/>
              If you have any news you want to share or any concerns about the website, please contact the number provided below.
            </p>
          </div>
          <div>
            <p>
              09765375557
            </p>
          </div>
        </div>
      </div>
      <div className={styles.Lower_about}>
        <div></div>
        <div></div>
      </div>
    </div>
  )

}

export default About