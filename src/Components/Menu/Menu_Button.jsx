import { useNavigate } from 'react-router-dom';
import styles from '../../Styles/Menu.module.css'
import React from 'react'

function Menu_Button({text, path, external = false, onClick}) {

    const navigate = useNavigate();

    const handleclick = () => {
      if (onClick) onClick();
      if (external) {
        window.location.href = path;
      } else {
        navigate(path);
      }
    }

  return(
    <div className={styles.Menu_button_container}>
      <button 
      className={`${styles.Menu_button} ${external ? styles.buttons : ''}`}
      path={path}
      onClick={handleclick}
      >
        {text}
      </button>
    </div>
  )

}

export default Menu_Button