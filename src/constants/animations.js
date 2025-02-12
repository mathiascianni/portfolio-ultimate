export const mobileMenuContainer = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            staggerChildren: 0.2,
            delayChildren: .3,

        }
    },
    closed: {
        opacity: 0,
        y: 200,
        transition: {
            duration: 0.3,
            when: "afterChildren"
        }
    }
}

export const mobileMenuItems = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    },
    closed: {
        opacity: 0,
        x: -50,
        transition: {
            duration: 0.2
        }
    }
}

export const fadeInContainer = {
    hidden: {
        opacity: 0,
        y: 200,
        transition: {
            duration: 0.5,
            when: "beforeChildren"
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.3,
            delayChildren: .3,

        }
    }
}

export const fadeInItem = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    }
}

export const imageAnimation = {
    initial: {
        opacity: 0,
        y: 50,
        rotate: 0,
        transition: {
            duration: 0.3,
        }
    },
    animateR: {
        opacity: 1,
        y: 0,
        rotate: 10,
        transition: {
            duration: 0.3,
        }
    },
    animateL: {
        opacity: 1,
        y: 0,
        rotate: -10,
        transition: {
            duration: 0.3,
        }
    }
}