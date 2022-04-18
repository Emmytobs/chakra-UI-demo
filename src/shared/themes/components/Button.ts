// Button theme

const Button = {
    baseStyle: {
        color: "black"
    },
    variants: {
        'primary': {
            bgColor: 'brand.500',
            color: 'white',
            _hover: {
                bgColor: 'brand.600'
            }
        },
        'secondary': {
            bgColor: 'transparent',
            border: '1px solid',
            color: 'brand.500',
            borderColor: 'brand.500',
            _hover: {
                transition: 'all .2s ease-in',
                bgColor: 'gray.50',
                borderColor: 'brand.700',
            }
        }
    },
}

export default Button