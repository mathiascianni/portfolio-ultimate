//Animation
import { motion } from "motion/react"

//Icons
import Logo from "../assets/matna-logo.svg?react"

const PageTransition = ({ children }) => {
    return (
        <>
            {children}
            <motion.div
                className="hidden lg:block z-50 fixed inset-0 bg-primary origin-right"
                initial={{ width: "0%" }}
                animate={{ width: "0%" }}
                exit={{ width: "100%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                initial={{ clipPath: "inset(0% 0% 0% 0%)", left: "50%", opacity: 1 }}
                animate={{ clipPath: "inset(0% 100% 0% 0%)", left: "0%", opacity: 0 }}
                exit={{ clipPath: "inset(0% 0% 0% 0%)", left: "50%", opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block top-1/2 left-1/2 z-[60] fixed bg-primary-dark p-8 rounded-sm -translate-x-1/2 -translate-y-1/2">
                <Logo className="w-24 h-24 text-primary" />
            </motion.div>
            <motion.div
                className="hidden lg:block z-50 fixed inset-0 bg-primary origin-left"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                exit={{ width: "0%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
                className="lg:hidden block z-50 fixed inset-0 bg-primary shadow-md"
                initial={{ height: "100%" }}
                animate={{ height: "0%" }}
                exit={{ height: "0%" }}
                transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                initial={{ top: "50%", opacity: 1 }}
                animate={{ top: "0%", opacity: 0 }}
                exit={{ top: "50%", opacity: 1 }}
                transition={{ duration:  .8 , ease: [0.22, 1, 0.36, 1] }}
                className="lg:hidden block left-1/2 z-[60] fixed bg-primary-dark p-8 rounded-sm -translate-x-1/2 -translate-y-1/2">
                <Logo className="w-16 h-16 text-primary" />
            </motion.div>
            <motion.div
                className="lg:hidden block z-50 fixed inset-0 bg-primary shadow-md"
                initial={{ height: "0%" }}
                animate={{ height: "0%" }}
                exit={{ height: "100%" }}
                transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    )
}

export default PageTransition
