import Card from '../Components/Card'
import styles from '../Styles/Home.module.css'
import placeholder from '../assets/Placeholder.jpg'

function Home() {

  return(
    <>
      <div className={styles.Home_container} >
        <div className={styles.Header_container_home} >
          <div className={styles.Home_header_top_side}>
            <img 
            src={placeholder} 
            className={styles.Image} 
            />
          </div>
          <div className={styles.Home_header_bottom_side}>
            <div>
              <h1 className={styles.Header_title} >
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
              </h1>
            </div>
            <div>
              <h5 className={styles.Date} >
                May 31, 2025
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.Separator} ></div>
        <div className={styles.Home_bottom_side} >
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </>
  )

}

export default Home