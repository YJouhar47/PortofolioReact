import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Layout from "../../Components/Layout/Layout";
import styles from './Home.module.css'
import backgroundimage from '../../images/background.jpg'
const Home = () => {
    return (
        <Layout>
            <div className={styles.contentwrapper}>
                <h2>Youssef J.</h2>
                <h3>Portofolio voor Web Frameworks 2022</h3>
                <Link to="/aboutme"><button type="button">More about me!</button></Link>
            </div>
        </Layout>
    )
}
export default Home;