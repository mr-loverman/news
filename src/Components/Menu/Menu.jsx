import Menu_Button from "./Menu_Button"
import styles from '../../Styles/Menu.module.css'
import { useState } from "react";


function Menu({isOpen, onMouseLeave}) {

  const [resource, setResource] = useState(true);

  const setResourceVisibility = () => {
    setResource(prevResource => !prevResource);
    console.log(`${styles.Menu_resource} ${resource ? styles.visible : ''}`)
  }
  
  return(
    <>
      <div className={`${styles.Menu} ${isOpen ? styles.open : ''}`} onMouseLeave={onMouseLeave} >
        <Menu_Button text={"Home"} path={"/"} />
        <Menu_Button text={"All News"} path={"/All-News"}/>
        <Menu_Button text={"About"} path={"/About"}/>
        <Menu_Button text={"Resources"} onClick={setResourceVisibility}/>
        <div className={`${styles.Menu_resource} ${resource ? styles.visible : ''}`}>
          <Menu_Button text={"Schoology"} path={"https://dyci.schoology.com/login?&school=2558503832"} external/>
          <Menu_Button text={"DYCI Official Website"} path={"https://dyci.edu.ph/"} external/>
        </div>

      </div>
    </>
  );
}

export default Menu