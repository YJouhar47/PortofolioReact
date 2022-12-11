import styles from "./Slot.module.css";

const Slot = ({value}:{value:number}) => {
    let logos : string [] = ["/kers.png","/citroen.png","/watermeloen.png","/druiven.png","/zeven.png"];
    return(
        <>
        <img src={logos[value]} alt="" className={styles.slot} />
        </>
    );
}
export default Slot;