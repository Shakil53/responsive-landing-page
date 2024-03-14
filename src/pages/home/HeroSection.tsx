import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/macbook-exposed.png";
import { motion } from 'framer-motion';



const intro = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.25,
            delayChildren: 0.2,
        },
    },
};

const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: {opacity: 1, y: 0, transition: {duration: 0.7, type: 'spring', bounce: 0.5} }
}

const HeroSection = () => {
    return (
        <Container className="  h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 place-content-center">
            <motion.div
                variants={intro}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={introChildren}
                    className="text-5xl lg:text-8xl font-bold text-nowrap"><span className="text-gray">Don't worry.</span>
                <br></br>
                <span>We'll fix it.</span></motion.h1>
                <motion.p
                    variants={introChildren}
                    className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg">Welcome to <span className="text-primary-forground font-semibold">iRepair</span>, your one-step place for all kinds of <span className="text-primary-forground font-semibold">Macbook</span> repairs and diagonstics.</motion.p>
                <motion.div
                    variants={introChildren}
                >
                     <Button>BOOK A SERVICE</Button>
                </motion.div>
            </motion.div>
            <div className=" mt-10 w-3/4 lg:w-full mx-auto">
                <img className="-rotate-[35deg] h-[95%] object-contain" src={macbook}></img>
            </div>
        </Container>
    );
};

export default HeroSection;