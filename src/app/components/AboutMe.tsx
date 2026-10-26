import SectionLabel from "./SectionLabel";
import MotionTag from "./MotionTag";
import AboutBento from "./AboutBento";
import { slideInFromRight } from "../utils/motion";

export default function AboutMe() {
    return (
        <MotionTag
            tag="div"
            variants={slideInFromRight(0.9)}
            initial="hidden"
            animate="visible"
            className="lg:pl-6 w-full min-w-0"
        >
            <section
                id="about-me"
                className="w-full flex flex-wrap justify-center lg:justify-start mb-8 lg:mb-12"
            >
                <SectionLabel label="ABOUT ME" />
                <AboutBento />
            </section>
        </MotionTag>
    );
}
