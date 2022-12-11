import { Link, useNavigate } from 'react-router-dom'
import styles from './Cards.module.css'
interface Cards {
    title:string,
    link:string
    image:string
}
const Cards = ({title,link,image}:Cards) => {
    const navigate = useNavigate()
    return (
        <div   onClick={()=> navigate(`/${link}`)}>
            <div className={styles.polaroid}>
            <img src={image}></img>
            <div className={styles.container}>
            <p>{title}</p>
            </div>
            </div>
        </div>
    )
}
export default Cards;