import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const IndexMarquee = () => {
    return (
        <Box id="marquee" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" height="150px" width="80vw" pt="1em">
            <Marquee>
                <Image
                    src="/images/bondi.webp"
                    height={180}
                    width={140}
                    alt="Man working on his computer"
                />
                <Image
                    src="/images/wary.webp"
                    height={70}
                    width={124}
                    alt="Man working on his computer"
                />
                <Image
                    src="/images/lesfilmsdelabande.webp"
                    height={140}
                    width={280}
                    alt="Man working on his computer"
                />
                <Image
                    src="/images/reactalent.webp"
                    height={80}
                    width={228}
                    alt="Man working on his computer"
                />
                <Image
                    src="/images/wildcodeschool.webp"
                    height={50}
                    width={128}
                    alt="Man working on his computer"
                />
            </Marquee>
        </Box>
    )
}

export default IndexMarquee