import { useState } from "react"
import ShowUsername from "./ShowUsername"
import { generateEmojiSlot, winnigCondition } from "./utils/utils.js"
import "./styles/ShowUsername.css"
import Slot from "./Slot.jsx"
import StartButton from "./StartButton.jsx"
import WinningAlert from "./WinningAlert.jsx"
import ShowCoins from "./utils/ShowCoins.jsx"

export default function SlotGame({ formData }) {
    const [player, setPlayer] = useState({ name: formData, coins: 1000 })
    const [slots, setSlots] = useState(generateEmojiSlot(3));
    const [alert, setAlert] = useState(false);


    const resetEmojis = () => {
        setSlots(generateEmojiSlot(3));
        setAlert(false)
        if (!isWinner) {
            setPlayer(prevPlayer => {
                return {
                    ...prevPlayer,
                    coins: prevPlayer.coins - 150
                }
            })
        } else {
            setPlayer(prevPlayer => {
                return {
                    ...prevPlayer,
                    coins: prevPlayer.coins + 100
                }
            })
        }

    }

    const isWinner = winnigCondition(slots);

    return (
        <>
            <div className="ShowAlert">
                {isWinner && <WinningAlert alertLabel="Congrats! You have won 100 Coins!" alertTitel="+100" />}
            </div>
            <div className="ShowUsername">
                <div className="ShowUserText">
                    <ShowUsername label="Username" value={player.name} />
                </div>
                <div className="ShowCoins">
                    <ShowCoins label="Coins" value={player.coins} />
                </div>
            </div>
            <div className="ShowUsername" style={{ flexDirection: "row", marginTop: "5%" }}>
                {slots.map((s, idx) => (
                    <div key={idx}>
                        <Slot emoji={s} />
                    </div>
                ))}
            </div>
            <div className="ShowUsername" style={{ marginTop: "5%" }}>
                <StartButton label={isWinner ? "Play Again" : "Get Lucky"} clickFunc={resetEmojis} />
            </div>
        </>

    )
}