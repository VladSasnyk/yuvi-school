import { useEffect } from 'react';
import { gsap } from 'gsap';
import Button from "../UI/Button";
import planet from '../../assets/planet.png'
import { useInView } from 'react-intersection-observer';


const Home = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const animationHandler = () => {
        const widthLeft = window.screen.width >= 1300 ? '15%' : window.screen.width >= 1100 ? '10%' : '7%';
        const widthRight = window.screen.width >= 1300 ? '85%' : window.screen.width >= 1100 ? '90%' : '92%';
        gsap.defaults({ duration: .8 });
        const textAnim = gsap.timeline();
        gsap.to('#home', { opacity: 1, duration: .1 })
        textAnim.to('.leftPlanet, .rightPlanet', { scale: 0.2 })
            .to('.leftPlanet', { left: widthLeft })
            .fromTo('.rightPlanet', { left: "50%" }, { left: widthRight }, '-=.8')
            .to('.leftPlanet', { y: '-25vh' })
            .to('.rightPlanet', { y: '25vh' }, '-=.8')

            .fromTo('#rightHomeDiv', { x: '-20vw', opacity: 0 }, { x: '0', opacity: 1 }, `${window.screen.width <= 860 ? '-=2.2' : '-=.8'}`)
            .fromTo('.homeSection h1', { x: '-20vw', opacity: 0 }, { x: '0', opacity: 1 }, `${window.screen.width <= 860 ? '-=2.4' : '-=.8'}`)
            .fromTo('.buttonHome', { opacity: 0, x: '20vw' }, { opacity: 1, x: 0 }, `${window.screen.width <= 860 ? '-=2.4' : '-=.8'}`)
            .fromTo('#leftHomeDiv', { opacity: 0, x: '20vw' }, { opacity: 1, x: 0 }, `${window.screen.width <= 860 ? '-=2.4' : '-=.8'}`)
    }

    //animations
    useEffect(() => {
        if (inView) {
            animationHandler();
        }
    }, [inView]);


    return <section ref={ref} id='home' className='max-sm:h-auto max-sm:pt-20 relative opacity-0 max-w-[99.9%]'>
        <div className="homeSection wrapper gap-24 h-full text-center max-md:gap-12">
            <h1 className="max-sm:text-5xl max-[1040px]:text-7xl text-7xl text-center">
                English Space
            </h1>
            <div className='w-[50%] flex flex-col justfiy-center items-center gap-10 max-[1400px]:w-[70%] max-[1060px]:w-full'>
                <div id='leftHomeDiv' className='flex text-xl w-full gap-4 justify-end max-sm:text-base'>
                    <p className='w-[50%] max-[1060px]:w-[70%] text-end leading-5 bg-[#F1F1F0] p-8 rounded-3xl max-md:w-[80%] max-md:p-4'>Мрію вивчати англійську з
                        комфортом та бачити
                        результат...</p>
                    <img src="/homeImg.png" alt="homeImg" className='w-[7%] h-1/2 max-md:w-[20%] max-md:h-full' />

                </div>
                <div id='rightHomeDiv' className='flex text-xl w-full justify-start gap-4 max-sm:text-base'>
                    <img src="/homeImg2.png" alt="homeImg" className='w-[7%] h-1/2 max-md:w-[20%]' />
                    <p className='w-[70%] max-[1060px]:w-[80%] leading-5 text-start bg-[#F1F1F0] p-8 rounded-3xl max-md:p-4'>
                        <span className='text-[#3F7B5B]'>English Space</span> - твій ідеальний варіант.
                        Тут зручна платформа, захоплюючі
                        уроки, і головне - викладачі, які
                        завжди підтримують і враховують всі
                        ваші побажання.</p>
                </div>
            </div>

            <a href='https://docs.google.com/forms/d/e/1FAIpQLScooAMec1PH5Mpy8JkcoEPXB9SdEEs1fwnjmxkZ36ln4l23YA/viewform' target='_blanc'>
                <Button className='text-white max-sm:w-full w-2/3 max-sm:text-base text-xl buttonHome'>ЗАПИС НА БЕЗКОШТОВНЕ ПРОБНЕ ЗАНЯТТЯ</Button>
            </a>
            {window.screen.width > 860 && (
                <>
                    <img src={planet} className='max-md:hidden leftPlanet absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[40%]'></img>
                    <img src={planet} className='max-md:hidden rightPlanet absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[40%]'></img>
                </>
            )}

        </div>
    </section>
}

export default Home;