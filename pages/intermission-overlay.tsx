import Head from 'next/head';

import Viewport from '../elements/viewport';
import Socials from '../elements/socials';

export default function IntermissionOverlay() {

    return (
        <>
        <Head>
            <title>Nightleaf Intermission Overlay</title>
        </Head>

        <body>  
            <Viewport></Viewport>
        </body>

        <footer>
            <Socials></Socials> 
        </footer>
        </>
    );
}