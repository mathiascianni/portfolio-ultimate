import { delay } from "motion"

export const mobileMenuContainer = {
    open: {
        opacity: 1,
        y: 0,
        transition:{
            duration: 0.5,
            staggerChildren: 0.3,
            delayChildren:.3,
            
        }
    },
    closed: {
        opacity: 0,
        y: 200,
        transition: {
            duration: 0.5,
            when: "afterChildren"
        }
    }
}

export const mobileMenuItems = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    },
    closed: {
        opacity: 0,
        x: -50,
        transition: {
            duration: 0.3
        }
    }
}