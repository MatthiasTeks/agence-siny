import { useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from 'react-responsive'
import { Box, Button, Heading, Icon, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const ProjectsSwiper = () => {

    const [slideFirst, setSlideFirst] = useState(false);
    const [slideSecond, setSlideSecond] = useState(false);
    const [slideThird, setSlideThird] = useState(false);
    const [slideFourth, setSlideFourth] = useState(false);
    const [slideFifth, setSlideFifth] = useState(false);
    const [slideSixth, setSlideSixth] = useState(false);

    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    return (
        <Box h={{sm: "500px", '2xl': "650px"}} w="80%" mx="10vw" my="4em">
            <Swiper slidesPerView={isMobile ? 1 : 3} spaceBetween={30} className="mySwiper" pagination={{ clickable: true }} modules={[Pagination]}>
                <SwiperSlide id="fdlb-projet" onMouseOver={() => setSlideFirst(true)} onMouseLeave={() => setSlideFirst(false)}>
                    <Box display="flex" flexDirection="column" justifyContent="end" alignItems="center" w="100%" h="100%" py="2em" className={`box-resume ${slideFirst ? "active-slide" : ""}`}>
                        <a href="https://astounding-mousse-7bf3ec.netlify.app/" target="_blank" rel="noreferrer">
                            <Box>
                                <Text color="white.500" cursor="pointer" zIndex="1" position="relative">voir le site web</Text>
                            </Box>
                        </a>
                    </Box>
                    <Box className="box-filter" borderRadius="12px"></Box>
                </SwiperSlide>
                <SwiperSlide id="bondi-projet" onMouseOver={() => setSlideSecond(true)} onMouseLeave={() => setSlideSecond(false)}>
                    <Box display="flex" flexDirection="column" justifyContent="end" alignItems="center" w="100%" h="100%" py="2em" className={`box-resume ${slideSecond ? "active-slide" : ""}`}>
                        <a href="https://bondi-restaurant.com/" target="_blank" rel="noreferrer">
                            <Box>
                                <Text color="white.500" cursor="pointer" zIndex="1" position="relative">voir le site web</Text>
                            </Box>
                        </a>
                    </Box>
                    <Box className="box-filter" borderRadius="12px"></Box>
                </SwiperSlide>
                <SwiperSlide id="mv-projet" onMouseOver={() => setSlideThird(true)} onMouseLeave={() => setSlideThird(false)}>
                    <Box display="flex" flexDirection="column" justifyContent="end" alignItems="center" w="100%" h="100%" py="2em" className={`box-resume ${slideThird ? "active-slide" : ""}`}>
                        <a href="https://astounding-mousse-7bf3ec.netlify.app/" target="_blank" rel="noreferrer">
                            <Box>
                                <Text color="white.500" cursor="pointer" zIndex="1" position="relative">voir le site web</Text>
                            </Box>
                        </a>
                    </Box>
                    <Box className="box-filter" borderRadius="12px"></Box>
                </SwiperSlide>
                <SwiperSlide id="wary-projet" onMouseOver={() => setSlideFourth(true)} onMouseLeave={() => setSlideFourth(false)}>
                    <Box display="flex" flexDirection="column" justifyContent="end" alignItems="center" w="100%" h="100%" py="2em" className={`box-resume ${slideFourth ? "active-slide" : ""}`}>
                        <a href="https://wary.gg/" target="_blank" rel="noreferrer">
                            <Box>
                                <Text color="white.500" cursor="pointer" zIndex="1" position="relative" >voir le site web</Text>
                            </Box>
                        </a>
                    </Box>
                    <Box className="box-filter" borderRadius="12px"></Box>
                </SwiperSlide>
                <SwiperSlide id="react-projet" onMouseOver={() => setSlideFifth(true)} onMouseLeave={() => setSlideFifth(false)}>
                    <Box display="flex" flexDirection="column" justifyContent="end" alignItems="center" w="100%" h="100%" py="2em" className={`box-resume ${slideFifth ? "active-slide" : ""}`}> 
                        <a href="https://talentreact.com/" target="_blank" rel="noreferrer">
                            <Box>
                                <Text color="white.500" cursor="pointer" zIndex="1" position="relative">voir le site web</Text>
                            </Box>
                        </a>
                    </Box>
                    <Box className="box-filter" borderRadius="12px"></Box>
                </SwiperSlide>
                <SwiperSlide id="fatline-projet" onMouseOver={() => setSlideSixth(true)} onMouseLeave={() => setSlideSixth(false)}>
                    <Box display="flex" flexDirection="column" justifyContent="end" alignItems="center" w="100%" h="100%" py="2em" className={`box-resume ${slideSixth ? "active-slide" : ""}`}>
                        <a href="https://matthiasteks.github.io/fatline/" target="_blank" rel="noreferrer">
                            <Box>
                                <Text color="white.500" cursor="pointer" zIndex="1" position="relative">voir le site web</Text>
                            </Box>
                        </a>
                    </Box>
                    <Box className="box-filter" borderRadius="12px"></Box>
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}

export default ProjectsSwiper