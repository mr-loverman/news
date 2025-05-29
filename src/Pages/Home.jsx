import styles from '../Styles/Home.module.css'
import placeholder from '../assets/Placeholder.jpg'

function Home() {

  return(
    <>
      <div>
        <div className={styles.Card_container_home} >
          <div className={styles.Home_header_top_side}>
            <img src={placeholder} />
          </div>
          <div className={styles.Home_header_top_side}></div>
        </div>
        <div></div>
      </div>
    </>
  )

}

export default Home