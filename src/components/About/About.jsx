import { useEffect } from "react";
import AboutCart from "./AboutCart";
import gsap from "gsap";
import { useInView } from 'react-intersection-observer';

import { PiStudentFill } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { TfiThought } from "react-icons/tfi";
import { RiSpeakFill } from "react-icons/ri";
import astronaut from '../../assets/cosmonavt.webp'
import Title from "../UI/Title";




const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    useEffect(() => {
        let animation;

        if (inView) {
            gsap.to('#about', { opacity: 1 })

            gsap.fromTo('.aboutItems li', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: 'back.inOut', stagger: 0.3 });
            gsap.fromTo('#aboutTitle', { y: -150, opacity: 0 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' })

            if (window.screen.width >= 868) {
                animation = gsap.timeline({ repeat: -1 });
                animation.fromTo('#astronaut', { y: '40vh', x: '-10vw' }, { y: '85vh', x: '40vw', duration: 8, rotate: '180deg' })
                    .to('#astronaut', { y: '50vh', x: '95vw', duration: 8, rotate: '-180deg' }, '-=2')
                    .to('#astronaut', { y: 0, x: '40vw', duration: 8, rotate: '180deg' }, '-=2')
                    .to('#astronaut', { y: '40vh', x: '-10vw', duration: 8, rotate: '-180deg' }, '-=2');
            }
        } else {
            // Clear animations when out of view
            gsap.to('#about', { opacity: 0 });
            gsap.to('.aboutItems li', { opacity: 0, y: 100, duration: 1 });
            gsap.to('#aboutTitle', { y: -150, duration: 1, opacity: 0 });
            gsap.to('#astronaut', { clearProps: 'all' }); // Clear all properties and kill the animation
        }

        return () => {
            if (animation) {
                animation.kill(); // Kill the animation when component unmounts or re-renders
            }
        };
    }, [inView]);

    return (
        <section ref={ref} id='about' className="h-auto bg-cover relative opacity-0" >
            {/* <div className="wrapper gap-14">
                <Title id='aboutTitle'>ДЕТАЛЬНІШЕ ПРО НАС</Title>
                <ul className="aboutItems flex flex-col gap-12">
                    <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1 w-[80%] max-md:w-full m-auto">
                        <li key='cart1'><AboutCart back={<PiStudentFill />}>100+ учнів довірились нам</AboutCart></li>
                        <li key='cart3'><AboutCart back={<GiProgression />}>Уже за 2 місяці учні відчувають значний прогрес!</AboutCart></li>
                    </div>
                    <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1 w-[80%] max-md:w-full m-auto">
                        <li key='cart4'><AboutCart back={<TfiThought />}>У нас найцікавіші та найактуальніші матеріали для дорослих і дітей!</AboutCart></li>
                        <li key='cart5'><AboutCart back={<RiSpeakFill />}>Безкоштовні Speaking Clubs для наших учнів</AboutCart></li>
                    </div>
                </ul>
            </div> */}
            <div className="wrapper gap-14">
                <Title id='aboutTitle'>ДЕТАЛЬНІШЕ ПРО НАС</Title>
                <ul className="aboutItems grid grid-cols-2 gap-12 max-md:grid-cols-1 w-[80%] max-md:w-full m-auto">

                    <li key='cart1'><AboutCart back={<PiStudentFill />}>100+ учнів довірились нам</AboutCart></li>
                    <li key='cart3'><AboutCart back={<GiProgression />}>Уже за 2 місяці учні відчувають значний прогрес!</AboutCart></li>

                    <li key='cart4'><AboutCart back={<TfiThought />}>У нас найцікавіші та найактуальніші матеріали для дорослих і дітей!</AboutCart></li>
                    <li key='cart5'><AboutCart back={<RiSpeakFill />}>Безкоштовні Speaking Clubs для наших учнів</AboutCart></li>

                </ul>
            </div>
            <img src={astronaut} className="absolute z-[-1] top-0 left-0 w-[7vw] max-md:hidden" id='astronaut' alt='astronaut-image'></img>
        </section>
    );
}

export default About;

