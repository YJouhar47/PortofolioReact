import Cards from "../../Components/Card/Cards";
import Navbar from "../../Components/Navbar/Navbar";
import styles from './Portofolio.module.css'
const Portofolio = () => {
    let cards: Cards[] = [
        { title: "Pokemon", link: 'pokemon', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPBF166wuR_qR6uXRcCxyHSG93_QA9rGYgpPpmnGOuA&s" },
        { title: "QuizApp", link: "quizapp", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPBF166wuR_qR6uXRcCxyHSG93_QA9rGYgpPpmnGOuA&s" },
        { title: "Color Picker", link: "colorpicker", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPBF166wuR_qR6uXRcCxyHSG93_QA9rGYgpPpmnGOuA&s" },
        { title: "Shopping List", link: "shoppinglist", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPBF166wuR_qR6uXRcCxyHSG93_QA9rGYgpPpmnGOuA&s" },
        { title: "Interval", link: "interval", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPBF166wuR_qR6uXRcCxyHSG93_QA9rGYgpPpmnGOuA&s" },
        { title: "Todo List", link: "todo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPBF166wuR_qR6uXRcCxyHSG93_QA9rGYgpPpmnGOuA&s" },
        { title: "Slots", link: "slots", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPBF166wuR_qR6uXRcCxyHSG93_QA9rGYgpPpmnGOuA&s" },
        { title: "Jokes", link: "jokes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPBF166wuR_qR6uXRcCxyHSG93_QA9rGYgpPpmnGOuA&s" }
    ]
    return (
        <div>
            <div className={styles.cardswrapper}>
                {cards.map((e) =>
                    <Cards key={e.title} title={e.title} link={e.link} image={e.image} />
                )}
            </div>
        </div>
    )
}
export default Portofolio;