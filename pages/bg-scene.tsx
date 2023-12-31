import Head from 'next/head';
import Socials from '../elements/socials';

import style from '../styles/bg-scene.module.css';

export default function Index() {

    return (
        <>
        <Head>
            <title>Nightleaf Background Scene</title>
        </Head>
        <body className={style.styledBody}>
            <div className={style.tree}>
            </div>
        </body>

        <footer>
            <Socials></Socials> 
        </footer>
        </>
    );
}