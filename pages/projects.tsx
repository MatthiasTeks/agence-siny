import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Burger from "../components/burger/burger";
import ProjectsHome from "../components/projects/projects_home";
import IndexMarquee from "../components/index/index_marquee";
import ProjectsBreadcrumb from "../components/projects/projects_breadcrumb";
import ProjectsSwiper from "../components/projects/projects_swiper";
import IndexMerch from "../components/index/index_merch";
import Footer from "../components/footer/footer";

const Projects: NextPage = () => {

    const [burgerOpen, setBurgerOpen] = useState(false);

    return (
        <div id="projects">
            <Head>
                <title>Siny Agency - Projets</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
            <Burger burgerOpen={burgerOpen} />
            <main>
                <ProjectsHome />
                <IndexMarquee />
                <ProjectsBreadcrumb />
                <ProjectsSwiper />
                <IndexMerch />
            </main>
            <Footer />

        </div>
    )
}

export default Projects