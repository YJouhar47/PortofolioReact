import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from './Home.module.css'
const Home = () => {
    return (
        <>
            <div className={styles.contentwrapper} style={{ background: 'black' }}>
                <h2>Youssef J.</h2>
                <h3>Portofolio voor Web Frameworks 2022</h3>
                <Link to="/aboutme"><button type="button">More about me!</button></Link>
            </div>
            
        </>
    )
}
export default Home;