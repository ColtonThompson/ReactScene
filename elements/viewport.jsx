import { motion } from "framer-motion";

const viewport_title = "Title PH";

export default function displayViewport() {
    return(
        <>
            <div className="viewport-title">
                {viewport_title}
            </div>
            <div className="viewport">
                
                <img src="../camera/webcam-ph.png"></img>
            </div>
        </>
    );
}