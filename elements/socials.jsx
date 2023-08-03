import { motion } from "framer-motion";

const twitch_channel = "/Nightleaf";
const youtube_channel = "@Nightleaf";
const tiktok_channel = "/NightleafTV";
const twitter_profile = "@NightleafTV";

export default function displaySocials() {
    return(
        <>
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: 5
                }
            },
        }}>
            <div className="socials center">
                <ul id="socials" className="center">
                    <li>
                        <div className="socials twitch"><i className="bi bi-twitch"></i></div> {twitch_channel}
                    </li>
                    <li>
                        <div className="socials youtube"><i className="bi bi-youtube"></i></div> {youtube_channel}
                    </li>
                    <li>
                        <div className="socials twitter"><i className="bi bi-twitter"></i></div> {twitter_profile}
                    </li>
                    <li>
                        <div className="socials tiktok"><i className="bi bi-tiktok"></i></div> {tiktok_channel}
                    </li>
                </ul>
            </div>
        </motion.div>
        </>
    );
}