import { extendTheme } from "@chakra-ui/react"
import "@fontsource/open-sans";
import "@fontsource/lato";

const theme = extendTheme({
    fonts: {
        heading: `'Lato', sans-serif`,
        body: `'Open Sans', sans-serif`,
    },
    styles: {
        global: {
            body: {
                bg: 'WhiteAlpha.50',
            },
        },
    },
    colors: {
        white: {
            500: '#FFFFFE',
        },
        blue: {
            50: '#3DA9FC',
            100: '#b6defc',
            200: '#8ac8f5',
            300: '#5eb2f0',
            400: '#359dea',
            500: '#3DA9FC',
            600: '#094067',
            700: '#094067',
            800: '#002c48',
            900: '#00101c',
        },
        gray: {
            100: '#5F6C7B',
            200: '#1E1E1E',
            500: '#5F6C7B',
        },
        red: {
            500: '#EF4565',
        }
    },
    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
    }
})

export default theme