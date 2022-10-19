import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components/navbar/navbar";
import Burger from "../components/burger/burger";
import IndexHome from "../components/index/index_home";
import IndexMarquee from "../components/index/index_marquee";
import IndexSiny from "../components/index/index_siny";
import IndexMarqueeService from "../components/index/index_marquee_service";
import IndexConcevoir from "../components/index/index_concevoir";
import IndexDevelopper from "../components/index/index_developper";
import IndexPilotage from "../components/index/index_pilotage";
import IndexReseaux from "../components/index/index_reseaux";
import IndexMerch from "../components/index/index.merch";
import Footer from "../components/footer/footer";

const Index: NextPage = () => {

    const [burgerOpen, setBurgerOpen] = useState(false);

    return (
        <div id="index">
            <Head>
              <title>Siny Agency - La digitalisation à porter de tous.</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
            <Burger burgerOpen={burgerOpen} />
            <main>
                <IndexHome />
                <IndexMarquee />
                <IndexSiny />
                <IndexMarqueeService />
                <IndexConcevoir />
                <IndexDevelopper />
                <IndexPilotage />
                <IndexReseaux />
                <IndexMerch />
            </main>
            <Footer />
        </div>
    )
}

export default Index
