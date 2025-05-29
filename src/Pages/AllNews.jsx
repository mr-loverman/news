import Card from '../Components/Card'
import styles from '../Styles/AllNews.module.css'

function AllNews() {

  return(
    <>
      <div className={styles.All_news_cards_container} >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  )

}

export default AllNews