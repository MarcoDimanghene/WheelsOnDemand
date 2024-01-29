export const INITIAL_LIMIT = 8;
export const SHIPPING_COST = 325000;
export const BASE_URL= 'https://nucbaz-api.vercel.app/'

export const FadeVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};

