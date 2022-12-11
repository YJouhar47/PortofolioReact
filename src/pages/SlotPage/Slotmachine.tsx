import styles from "./Slotmachine.module.css";
import { MouseEventHandler, useState } from "react";
import Slot from "../../Components/Slots/Slot";
import Layout from "../../Components/Layout/Layout";

const SlotMachine = ({aantalSlots}:{aantalSlots:number}) => {
    const [money, setMoney] = useState<number>(100);
    const [slots, setSlots] = useState<number[]>(() => {
        let initSlots: number[] = [];
        for (let index = 0; index < aantalSlots; index++) {
            initSlots.push(Math.floor(Math.random() * aantalSlots));
        }
        return initSlots;
    });
    let gewonnen: boolean = slots.every(v => v == slots[0]);
    const handleBtnClick: MouseEventHandler<HTMLButtonElement> = () => {
        setSlots(() => {
            let initSlots: number[] = [];
            for (let index = 0; index < aantalSlots; index++) {
                initSlots.push(Math.floor(Math.random() * aantalSlots));
            }
            return initSlots;
        });
        if(gewonnen){
            setMoney(prevMoney => prevMoney + 20);
        }else{
            setMoney(prevMoney => prevMoney - 3);
        }
    }
    return (
        <Layout>
        < >
            <h2>Slots :</h2>
            <div className={styles.slotMachine}>
                <p className={styles.saldo}>Saldo: &euro;{money}</p>
                <div className={styles.slots}>
                    <button className={styles.btn} onClick={handleBtnClick} disabled={money == 0}>Pull Lever</button>
                    {slots.map((i, index) => <Slot value={i} key={index} />)}
                </div>
                {money == 0 && <p className={styles.text}>Je bent bankroept!</p>}
            </div>
        </>
        </Layout>
    );
}
export default SlotMachine;