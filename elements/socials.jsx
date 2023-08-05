import { motion } from "framer-motion";
import style from '../styles/socials.module.css';

const twitch_channel = "/Nightleaf";
const youtube_channel = "@Nightleaf";
const tiktok_channel = "/NightleafTV";
const twitter_profile = "@NightleafTV";

const social_bar_variants = {
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
}

const i_variant = {
    hidden: {
        scale: .6,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 10
        }
    },
}

export default function displaySocials() {
    return(
        <>
        <motion.div initial="hidden" animate="visible" variants={social_bar_variants}>
            <div className={style.socials}>
                <ul>
                    <li>
                    <div className={style.twitch}><i className="bi bi-twitch"></i></div> {twitch_channel}
                    </li>
                    <li>
                    <div className={style.youtube}><i className="bi bi-youtube"></i></div> {youtube_channel}
                    </li>
                    <li>
                    <div className={style.twitter}><i className="bi bi-twitter"></i></div> {twitter_profile}
                    </li>
                    <li>
                    <div className={style.tiktok}><i className="bi bi-tiktok"></i></div> {tiktok_channel}
                    </li>
                </ul>
            </div>
        </motion.div>
        </>
    );
}