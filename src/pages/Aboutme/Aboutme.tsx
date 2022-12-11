import Layout from "../../Components/Layout/Layout";
import Navbar from "../../Components/Navbar/Navbar";
import styles from './Aboutme.module.css'
const Aboutme = () => {
    return (
        <Layout>
        <div className={styles.wrapper}>
            <h1>I am Youssef Jouhar</h1>
            <h2>I am 22 Years old</h2>
            <h3>Studying at Artesis Plantijn Antwerpen Hogeschool</h3>
        </div>
        </Layout>
    )
}
export default Aboutme;