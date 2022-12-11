import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import styles from './Home.module.css'
const Home = () => {
    return (
        <body>
            <Navbar></Navbar>
            <div className={styles.contentwrapper} style={{ background: 'black' }}>
                <h2>Youssef J.</h2>
                <h3>Portofolio voor Web Frameworks 2022</h3>
                <Link to="/aboutme"><button type="button">More about me!</button></Link>
            </div>
        </body>
    )
}
export default Home;