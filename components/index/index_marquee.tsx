import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const IndexMarquee = () => {
    return (
        <Box id="marquee" display="flex" flexDirection={{ sm: "column" }} justifyContent="center" alignItems="center" mx="10vw" height="150px" width="80vw" pt="1em">
            <Marquee>
                <Image
                    src="/images/index_marquee/bondi.webp"
                    height={180}
                    width={140}
                    alt="Man working on his computer"
                />
                <Image
                    src="/images/index_marquee/wary.webp"
                    height={70}
                    width={124}
                    alt="Man working on his computer"
                />
                <Image
                    src="/images/index_marquee/lesfilmsdelabande.webp"
                    height={140}
                    width={280}
                    alt="Man working on his computer"
                />
                <Image
                    src="/images/index_marquee/reactalent.webp"
                    height={80}
                    width={228}
                    alt="Man working on his computer"
                />
                <Image
                    src="/images/index_marquee/wildcodeschool.webp"
                    height={50}
                    width={128}
                    alt="Man working on his computer"
                />
            </Marquee>
        </Box>
    )
}

export default IndexMarquee