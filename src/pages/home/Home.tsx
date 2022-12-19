import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import styles from './Home.module.css'
const Aboutme = () => {
    return (
        <Layout>
            <div className={styles.header}>
                <h1>I am Youssef Jouhar</h1>
                <h2>I am 22 Years old</h2>
                <h3>Studying at Artesis Plantijn Antwerpen Hogeschool</h3>
                <Link to="/portofolio"><button className={styles.button}>Go to portofolio</button></Link>
            </div>
            <div className={styles.skills}>
                <div className={styles.skillstext}>
                    <h1>SKILLS &rarr;</h1>
                </div>
                <div className={styles.skillsprogress}>
                    <ProgressBar customLabel="React (82%)" labelAlignment="center" completed={82} width='100%' bgColor="black" margin="5px" />
                    <ProgressBar customLabel="C# (95%)" labelAlignment="center" completed={95} width='100%' bgColor="black" margin="5px" />
                    <ProgressBar customLabel="Typescript (75%)" labelAlignment="center" completed={75} width='100%' bgColor="black" margin="5px" />
                    <ProgressBar customLabel="Javascript (65%)" labelAlignment="center" completed={65} width='100%' bgColor="black" margin="5px" />
                    <ProgressBar customLabel="C++ (80%)" labelAlignment="center" completed={80} width='100%' bgColor="black" margin="5px" />
                    <ProgressBar customLabel="SQL (55%)" labelAlignment="center" completed={55} width='100%' bgColor="black" margin="5px" />
                </div>
                <div>
                    <img  className={styles.img} src="https://i.guim.co.uk/img/media/583b1b167c0b51719de576054d524326e577b21f/0_206_4488_2693/master/4488.jpg?width=1200&quality=85&auto=format&fit=max&s=634e0f9f6e23310f5e9432207b892432" alt="foto" />
                </div>
            </div>
        </Layout>
    )
}
export default Aboutme;