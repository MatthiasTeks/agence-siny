import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Burger from "../components/burger/burger";
import IndexMarquee from "../components/index/index_marquee";
import IndexMarqueeService from "../components/index/index_marquee_service";
import Footer from "../components/footer/footer";
import AgencyStrength from "../components/agency/agency_strength";
import AgencyHome from "../components/agency/agency_home";
import AgencyProcess from "../components/agency/agence_process";


const Agency: NextPage = () => {

    const [burgerOpen, setBurgerOpen] = useState(false);

    return (
        <div id="agency">
            <Head>
                <title>Siny Agency - Agency</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
            <Burger burgerOpen={burgerOpen} />
            <main>
                <AgencyHome />
                <IndexMarquee />
                <AgencyStrength />
                <IndexMarqueeService />
                <AgencyProcess />
            </main>
            <Footer />
        </div>
    )
}

export default Agency