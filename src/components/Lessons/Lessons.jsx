import Title from '../UI/Title'
import Video from '../UI/Video';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { useEffect } from 'react';

const Lessons = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            gsap.to('#lessons', { opacity: 1, duration: .3 })
            gsap.fromTo('#lessonsTitle', { y: '-150', opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'expo.inOut' })
            gsap.fromTo('#main-video', { scale: 0 }, { scale: 1 , duration: 1})
            
        }
    }, [inView])


    return <section id='lessons' className='min-h-10 opacity-0' ref={ref}>
        <div className='wrapper'>
            <Title id='lessonsTitle'>ЗАНЯТТЯ</Title>
            <div className='w-full flex items-center justify-center py-14'>
                <div className='self-center w-full flex items-center justfiy-center'>
                    <Video
                        id='main-video'
                        src='/main-video'
                        className='w-1/2 max-md:w-full h-full'

                    />

                </div>
            </div>
            {/* <div className='bg-[#E6E5E6] w-screen pb-8' >
                <div className='text-center w-[80%] m-auto'>
                    <h2 className='text-3xl border-b-2 border-green-700 py-8'>ДЛЯ ДІТЕЙ</h2>
                    <p className='text-xl py-8'>У нас інтерактивні та цікаві заняття для дітей! Можете переглянути відео різних завдань, які ми даємо на уроці!
                        Також ми навчаємо по найактуальнішим книжках! За потреби допомогаємо з домашнім завданням і максимально стараємось зацікавити дітей.
                        Обов’язково перегляньте наші відгуки!</p>
                </div>
                <div className='w-full flex gap-4 items-center justify-center max-md:flex-col '>
                    <Video src='/first-video' className='w-[80%]' id='first-video' />
                    <Video src='/second-video' className='w-[80%]' id='second-video' />
                </div>
            </div>
            <div className='bg-[#E6E5E6] w-screen pb-8'>
                <div className='text-center w-[80%] m-auto'>
                    <h2 className='text-3xl border-b-2 border-green-700 py-8'>ДЛЯ ПІДЛІТКІВ І ДОРОСЛИХ</h2>
                    <p className='text-xl py-8'>З дорослими ми вивчаємо розмовну англійську, тому іноді дивимось короткі відео (2-3хв) з серіалів, звідки беремо корисні фрази.
                        Також ми практикуємо говоріння і розмовляє на різні актуальні теми від Red Flags In Relationship ⛳ до Beauty Routine 💅🏻.
                        Також ми працюємо на онлайн платформі, де учням видно все, що записує викладач в онлайн режимі, або ж учень може занотовувати і записувати слова у платформу.
                        У нас сучасний підхід до навчання!</p>
                </div>
                <div className='w-full flex gap-6 items-center justify-center max-md:flex-col '>
                    <Video src='/third-video' className='w-[80%]' />
                    <Video src='/fourth-video' className='w-[80%]' />
                </div>
            </div> */}
        </div>



    </section >

}


export default Lessons;