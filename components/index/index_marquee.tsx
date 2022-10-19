import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const IndexMarquee = () => {
    return (
        <Box id="marquee" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" height="150px" width="80vw" pt="1em">
            <Marquee>
                <Image
                    src="/images/bondi.png"
                    height={180}
                    width={140}
                    alt="Man working on his computer"
                />
                <Image
                    src="/images/wary.png"
                    height={70}
                    width={124}
                    alt="Man working on his computer"
                />
                <Image
                    src="/images/lesfilmsdelabande.png"
                    height={140}
                    width={280}
                    alt="Man working on his computer"
                />
                <Image
                    src="/images/reactalent.png"
                    height={80}
                    width={228}
                    alt="Man working on his computer"
                />
                <Image
                    src="/images/wildcodeschool.png"
                    height={50}
                    width={128}
                    alt="Man working on his computer"
                />
            </Marquee>
        </Box>
    )
}

export default IndexMarquee