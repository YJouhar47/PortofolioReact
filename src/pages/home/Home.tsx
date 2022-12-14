import ProgressBar from "@ramonak/react-progress-bar";
import Layout from "../../Components/Layout/Layout";
import styles from './Home.module.css'
const Aboutme = () => {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1>I am Youssef Jouhar</h1>
                    <h2>I am 22 Years old</h2>
                    <h3>Studying at Artesis Plantijn Antwerpen Hogeschool</h3>
                </div>
                <div className={styles.img}>
                    <img src="https://i.fokzine.net/upload/21/03/210307_1_daily255_01.jpg" alt="foto"/>
                </div>
                <div className={styles.bigtitle}>
                    <h1>SKILLS</h1>
                </div>
                <div className={styles.progress}>
                    <div className={styles.bar}>
                    <ProgressBar customLabel="React (82%)" labelAlignment="center" completed={82} width='100%' bgColor="black" margin="5px" />
                    <ProgressBar customLabel="C# (95%)" labelAlignment="center" completed={95} width='100%' bgColor="black" margin="5px" />
                    <ProgressBar customLabel="Typescript (75%)" labelAlignment="center" completed={75} width='100%' bgColor="black" margin="5px" />
                    <ProgressBar customLabel="Javascript (65%)" labelAlignment="center" completed={65} width='100%' bgColor="black" margin="5px" />
                    <ProgressBar customLabel="C++ (80%)" labelAlignment="center" completed={80} width='100%' bgColor="black" margin="5px" />
                    <ProgressBar customLabel="SQL (55%)" labelAlignment="center" completed={55} width='100%' bgColor="black" margin="5px" />
                </div>
                </div>
            </div>
        </Layout>
    )
}
export default Aboutme;