import { Box } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import MarqueeServices from "./utils/marquee.services";

const IndexMarqueeService = () => {
    return (
        <Box id="marquee" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" height="150px" width="80vw" pt="1em">
            <Marquee>
                <MarqueeServices image="/images/prototype.png" title="UI/UX Design" resume="Parcours utilisateur" />
                <MarqueeServices image="/images/seo.png" title="Referencement" resume="Optimisation naturel" />
                <MarqueeServices image="/images/concept.png" title="Maquettage" resume="Prototypage web" />
                <MarqueeServices image="/images/mis-a-jour.png" title="Mise à jour" resume="Application pérenne" />
            </Marquee>
        </Box>
    )
}

export default IndexMarqueeService