import { useEffect } from 'react';
import { gsap } from 'gsap';
import Button from "../UI/Button";

//img
// import border from '../../assets/border.png'
import planet from '../../assets/planet.png'


// import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';


const Home = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    //animations
    useEffect(() => {
        if (inView) {
            const widthLeft = window.screen.width >= 1300 ? '15%' : window.screen.width >= 1100 ? '10%' : '7%';
            const widthRight = window.screen.width >= 1300 ? '85%' : window.screen.width >= 1100 ? '90%' : '92%';
            gsap.defaults({ duration: 1 });
            const textAnim = gsap.timeline();
            gsap.to('#home', { opacity: 1, duration: .1 })
            textAnim.to('.leftPlanet, .rightPlanet', { scale: 0.2 })
                .to('.leftPlanet', { left: widthLeft })
                .fromTo('.rightPlanet', { left: "50%" }, { left: widthRight }, '-=1')
                .to('.leftPlanet', { y: '-25vh' })
                .to('.rightPlanet', { y: '25vh' }, '-=1')
                // .fromTo('.subTitleHome', { opacity: 0 }, { opacity: 1 }, '-=1.7')
                .fromTo('#rightHomeDiv', { x: '-10vw', opacity: 0 }, { x: '0', opacity: 1 }, '-=0.8')
                .fromTo('.homeSection h1', { x: '-10vw', opacity: 0 }, { x: '0', opacity: 1 }, '-=1')
                .fromTo('.buttonHome', { opacity: 0, x: '10vw' }, { opacity: 1, x: 0 }, '-=1')
                .fromTo('#leftHomeDiv', { opacity: 0, x: '10vw' }, { opacity: 1, x: 0 }, '-=1')

            // .fromTo('.left', { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.5')
        }
    }, [inView]);


    return <section ref={ref} id='home' className='max-sm:h-auto max-sm:pt-20 relative opacity-0 max-w-[99.9%]'>
        <div className="homeSection wrapper gap-24 h-full text-center max-md:gap-12">
            <h1 className="max-sm:text-5xl max-[1040px]:text-7xl text-8xl text-center">
                English Space
            </h1>
            <div className='w-[50%] flex flex-col justfiy-center items-center gap-10 max-[1400px]:w-[70%] max-[1060px]:w-full'>
                <div id='leftHomeDiv' className='flex text-2xl w-full gap-4 justify-end'>
                    <p className='w-[50%] max-[1060px]:w-[70%] text-end leading-5 bg-[#F1F1F0] p-8 rounded-3xl max-md:w-[80%] max-md:p-4'>Мрію вивчати англійську з
                        комфортом та бачити
                        результат...</p>
                    <img src="/homeImg.png" alt="homeImg" className='w-[7%] h-1/2 max-md:w-[20%] max-md:h-full' />

                </div>
                <div id='rightHomeDiv' className='flex text-2xl w-full justify-start gap-4 '>
                    <img src="/homeImg2.png" alt="homeImg" className='w-[7%] h-1/2 max-md:w-[20%]' />
                    <p className='w-[70%] max-[1060px]:w-[80%] leading-5 text-start bg-[#F1F1F0] p-8 rounded-3xl max-md:p-4'>
                        <span className='text-[#3F7B5B]'>English Space</span> - твій ідеальний варіант.
                        Тут зручна платформа, захоплюючі
                        уроки, і головне - викладачі, які
                        завжди підтримують і враховують всі
                        ваші побажання.</p>
                </div>
            </div>


            {/* <div className="bg-[#F1F1F1] text-black p-4 rounded-lg shadow-md">
                <p>Мрію вивчити англійську з
                    комфортом та бачити
                    результат...</p>
            </div> */}


            {/* <div className='relative w-1/4 h-auto text-xl p-14 text-start right-40 leading-5 max-[1400px]:w-[30%] max-[1100px]:w-[40%] max-[860px]:w-[55%] max-[620px]:w-full max-md:right-0'>

                Мрію вивчити англійську з
                комфортом та бачити
                результат...

                <img src="/cloudBg.png" alt="" className='absolute object-contain left-5 top-0 z-[-1] h-full w-full max-md:scale-[1.05] max-md:left-0' />
            </div>
            <div className='relative w-[35%] h-auto text-xl p-16 text-start leading-5 left-40 max-[1400px]:w-[50%] max-md:w-[95vw] max-md:left-0 max-md:text-sm max-md:px-14 max-md:py-10'>

                <span className='text-[#3F7B5B]'>English Space</span> - твій ідеальний варіант.
                Тут зручна платформа, захоплюючі
                уроки, і головне - викладачі, які завжди
                підтримують і враховують всі ваші
                побажання.

                <img src="/cloudBg.png" alt="" className='absolute object-contain left-0 top-0 z-[-1] h-full w-full' />
            </div> 
       */}




            {/* <div className='subTitleHome relative w-auto text-center p-14'>
                <h3 className="text-3xl max-[376px]:text-xl">
                    Ваша онлайн-школа англійської мови
                </h3>
                <img src={border} className='borderText max-sm:-left-0 absolute top-0 -left-5 h-full w-full h-content top-0'></img>
            </div>

            <p className="max-[376px]:text-xl text-2xl text-center">Вивчай англійську не залишаючи дім. Зручні уроки та цікаві завдання чекають на тебе</p> */}
            {/* <Link to='lessons' smooth={true} duration={1200}> */}
            <a href='https://docs.google.com/forms/d/e/1FAIpQLScooAMec1PH5Mpy8JkcoEPXB9SdEEs1fwnjmxkZ36ln4l23YA/viewform' target='_blanc'>
                <Button className='text-white max-sm:w-full w-2/3 max-sm:text-2xl text-3xl buttonHome'>Запис на безкоштовне пробне заняття</Button>
            </a>
            {/* </Link> */}
            <img src={planet} className='max-md:hidden leftPlanet absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[50%]'></img>
            <img src={planet} className='max-md:hidden rightPlanet absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[50%]'></img>
        </div>
    </section>
}

export default Home;