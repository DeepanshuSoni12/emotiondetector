import "./App.css";
import { useState, useRef } from "react";
import AudioRecorder from "../src/AudioRecorder";
import {MdAudiotrack} from "react-icons/md"
const App = () => {
    let [recordOption, setRecordOption] = useState("video");
    const toggleRecordOption = (type) => {
        return () => {
            setRecordOption(type);
        };
    };
    return (
        <div className="bordered">
            <h1>Get Your Voice recorded</h1>
            <div className="button-flex">
             
                <button className="btn" onClick={toggleRecordOption("audio")}>
                <MdAudiotrack /> Record Audio
                </button>
            </div>
            <div>
                {recordOption === "audio" && <AudioRecorder />}
            </div>
        </div>
    );
};
export default App;