import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import Button from './components/Button'

const theme = extendTheme({
    'styles': {
        global: {
            body: {
                
            }
        }
    },
    colors: {
        brand: {
            // 50: '#f5fee5',
            // 100: '#e1fbb2',
            // 200: '#cdf781',
            // 300: '#b8ee56',
            // 400: '#a2e032',
            // 500: '#8ac919',
            // 600: '#71ab09',
            // 700: '#578602',
            // 800: '#3c5e00',
            // 900: '#203300',
            
            50: '#B870FF',
            100: '#A347FF',
            200: '#A347FF',
            300: '#9933FF',
            400: '#8F1FFF',
            500: '#850AFF',
            600: "#7000E0",
            700: '#6600CC',
            800: "#5C00B8",
            900: "#5200A3"
        }
    },
    components: {
        Button
    }
},
// withDefaultColorScheme({
//     colorScheme: 'brand',
//     components: ['Input']
// })
)

export default theme