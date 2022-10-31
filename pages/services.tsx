import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Burger from "../components/burger/burger";
import IndexMarquee from "../components/index/index_marquee";
import IndexMarqueeService from "../components/index/index_marquee_service";
import Footer from "../components/footer/footer";

const Agency: NextPage = () => {

    const [burgerOpen, setBurgerOpen] = useState(false);

    return (
        <div id="agency">
            <Head>
                <title>Siny Agency - Agency</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="L'Agence Siny à Cenon proche Bordeaux, conception de site internet."></meta>
            </Head>

            <Navbar burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
            <Burger burgerOpen={burgerOpen} />
            <main>
            </main>
            <Footer />
        </div>
    )
}

export default Agency