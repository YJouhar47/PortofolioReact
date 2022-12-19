import Cards, { ICards } from "../../Components/Card/Cards";
import Layout from "../../Components/Layout/Layout";
import styles from './Portofolio.module.css'
const Portofolio = () => {
    let cards: ICards[] = [
        { title: "Pokemon", link: 'pokemon', image: "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",explanation:"A simple pokemon app that uses React Hooks and Typescript" },
        { title: "QuizApp", link: "quizapp", image: "https://safdarjamal.github.io/quiz-app/static/media/mind.525a3ae0.svg",explanation:"A simple quiz app that uses React Hooks and TypeScript" },
        { title: "Color Picker", link: "colorpicker", image: "https://help.geogebra.org/public/attachments/5d107b5ed8fdb8964fbad44174bc9b18.png",explanation:"A simple color picker that uses React Hooks and TypeScript" },
        { title: "Shopping List", link: "shoppinglist", image: "https://garlicdelight.com/wp-content/uploads/20210319-reverse-shopping-list.png",explanation:"A shopping list app that uses React Hooks and TypeScript" },
        { title: "Todo List", link: "todo", image: "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png",explanation:"A todo list app that uses React Hooks and TypeScript" },
        { title: "Slots", link: "slots", image: "https://blog.meccabingo.com/wp-content/uploads/2020/03/Winning-Tips-for-Slots-Games.jpg",explanation:"A simple slots app that uses React Hooks and TypeScript" },
        { title: "Jokes", link: "jokes", image: "https://media.istockphoto.com/id/639765496/vector/laughing-with-tears-and-pointing-emoticon.jpg?s=612x612&w=0&k=20&c=FVVZllgAwRnQkKmgyDLw4zepwzYc0WBCxOB9N4yFdL0=",explanation:"A simple jokes app that uses React Hooks and TypeScript" },
        { title: "Interval", link: "interval", image: "https://api.time.com/wp-content/uploads/2015/11/interval-training.jpg",explanation:"A simple interval timer app that uses React Hooks and TypeScript" }
    ]
    return (
        <Layout>
        <div>
            <div className={styles.cardswrapper}>
            {cards.map((e) =>
                    <Cards key={e.title} title={e.title} link={e.link} image={e.image} explanation={e.explanation} />
                )}
            </div>
        </div>
        </Layout>
    )
}
export default Portofolio;