import Userinput from "./Userinput"
import StartButton from "./StartButton"
import "./styles/Register.css"
import "./styles/Alert.css"
import { useState } from "react";
import SlotGame from "./SlotGame";
import WarningDialog from "./WarningDialog";

export default function Register() {

    const [text, setText] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [alert, setAlert] = useState(false)

    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = () => {
        if (text.length !== 0) {
            setAlert(false)
            setIsValid(true);
        } else {
            setAlert(true);
        }
    }
    const showAlert = () => {
        setAlert(false);
    }



    if (isValid) {
        return (
            <div>
                <SlotGame formData={text} />
            </div>
        )
    } else {
        return (
            <div className="Register">
                {alert &&
                    <div className="Alert">
                        <WarningDialog label="Username is required!" showAlert={showAlert} />
                    </div>}
                <Userinput label="Username*" handleChange={handleChange} value={text} />
                <StartButton label="Start Game" clickFunc={handleSubmit} />
            </div>
        )
    }

}

