import placeholder from '../assets/Placeholder.jpg'
import styles from '../Styles/Card.module.css'

function Card() {

  return(
    <>
      <div className={styles.Card_container} >
        <div className={styles.Card_left_side} >
          <img src={placeholder} className={styles.Image} alt="" />
        </div>
        <div className={styles.Card_right_side} >
          <h2 className={styles.Card_title} >
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </h2>
        </div>
      </div>    
    </>
  )

}

export default Card;