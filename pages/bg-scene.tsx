import Head from 'next/head';

import Socials from '../elements/socials';

export default function Index() {

    return (
        <>
        <Head>
            <title>Nightleaf Background Scene</title>
        </Head>

        <body>
            <div className="tree center">
            </div>
        </body>

        <footer>
            <Socials></Socials> 
        </footer>
        </>
    );
}