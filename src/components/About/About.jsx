import { useEffect } from "react";
import AboutCart from "./AboutCart";
import gsap from "gsap";
import { useInView } from 'react-intersection-observer';


// icons for bg
import { PiStudentFill } from "react-icons/pi";
// import { GiTeacher } from "react-icons/gi";
import { GiProgression } from "react-icons/gi";
import { TfiThought } from "react-icons/tfi";
import { RiSpeakFill } from "react-icons/ri";
import astronaut from '../../assets/cosmonavt.png'
import Title from "../UI/Title";




const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    /* Shine */

    useEffect(() => {
        if (inView) {
            gsap.to('#about', { opacity: 1 })

            gsap.fromTo('.aboutItems li', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: 'back.inOut', stagger: 0.3 });
            gsap.from('#aboutTitle', { y: -150, duration: 1, opacity: 0, ease: 'power2.inOut' },)


            const astronaut = gsap.timeline({ repeat: -1 });

            if (window.screen.width >= 868) {
                astronaut.fromTo('#astronaut', { y: '40vh', x: '-10vw' }, { y: '85vh', x: '40vw', duration: 8, rotate: '180deg' })
                    .to('#astronaut', { y: '50vh', x: '95vw', duration: 8, rotate: '-180deg' }, '-=2')
                    .to('#astronaut', { y: 0, x: '40vw', duration: 8, rotate: '180deg' }, '-=2')
                    .to('#astronaut', { y: '40vh', x: '-10vw', duration: 8, rotate: '-180deg' }, '-=2');
            }

        }

    }, [inView]);

    return (
        // style={{backgroundImage:`url(${bg})`}}
        <section ref={ref} id='about' className="h-auto bg-cover relative opacity-0" >
            <div className="wrapper gap-14">
                <Title id='aboutTitle'>ДЕТАЛЬНІШЕ ПРО НАС</Title>
                <ul className="aboutItems flex flex-col gap-12">
                    <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
                        <li key='cart1'><AboutCart back={<PiStudentFill />}>100+ учнів довірились нам</AboutCart></li>
                        {/* <li key='cart2'><AboutCart back={<GiTeacher />}>8 сучасних викладачів</AboutCart></li> */}
                        <li key='cart3'><AboutCart back={<GiProgression />}>Уже за 2 місяці учні відчувають значний прогрес!</AboutCart></li>
                    </div>
                    <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
                        <li key='cart4'><AboutCart back={<TfiThought />}>У нас найцікавіші та найактуальніші матеріали для дорослих і дітей!</AboutCart></li>
                        <li key='cart5'><AboutCart back={<RiSpeakFill />}>Ми надаємо можливість учням відвідувати безкоштовні Speaking Clubs та практикувати англійську у нашому телеграм каналі</AboutCart></li>
                    </div>
                </ul>
            </div>
            <img src={astronaut} className="absolute z-[-1] top-0 left-0 w-[7vw] max-md:hidden" id='astronaut'></img>
        </section>
    );
}

export default About;
