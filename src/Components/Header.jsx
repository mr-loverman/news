import styles from '../Styles/Header.module.css'
import menu from '../assets/Menu.png'
import { Link } from 'react-router-dom'

function Header({onMouseEnter}) {

  return (
    <>
    <div className={styles.Header}> 
      <div>
        <button className={styles.Header_left_button} onMouseEnter={onMouseEnter}>
          <img className={styles.Header_left_image} src={menu} alt="Menu" />
        </button>
      </div>
      <div>
        <Link to="/" className={styles.Header_middle_text} >
          MIDDLE
        </Link>
      </div>
      <div>
        Logo
      </div>
    </div>
    </>
  )

}

export default Header