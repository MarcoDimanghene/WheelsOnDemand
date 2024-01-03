export const INITIAL_LIMIT = 8;
export const SHIPPING_COST = 500;

export const FadeVariants = {
    initial: {
        y: "50%",
        opacity: 0,  
        },
    animate: {
        y: "0%",
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
            },
        },
    exit: {
        y: "-50%",
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
            },
        },
}
