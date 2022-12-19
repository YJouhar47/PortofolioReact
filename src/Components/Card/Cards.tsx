import { useNavigate } from 'react-router-dom'
import styles from './Cards.module.css'
export interface ICards {
    title:string,
    link:string
    image:string
    explanation:string
}
const Cards = ({title,link,image,explanation}:ICards) => {
    const navigate = useNavigate()
    return (
            <div className={styles.polaroid} onClick={()=> navigate(`/portofolio/${link}`)}>
            <div className={styles.container}>
            <p>{title}</p>
            <img className={styles.cardsimage} src={image} alt={title}></img>
            <p>{explanation}</p>
            <button>Go to project</button>
            </div>
            </div>
    )
}
export default Cards;