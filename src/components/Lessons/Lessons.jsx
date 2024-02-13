import Title from '../UI/Title'
import Video from '../UI/Video';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { useEffect } from 'react';

const Lessons = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    useEffect(() => {
        let animation;

        if (inView) {
            gsap.to('#lessons', { opacity: 1, duration: .3 });
            gsap.fromTo('#lessonsTitle', { y: '-150', opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'expo.inOut' });
            gsap.fromTo('#main-video', { opacity: 0 }, { opacity: 1, duration: 1 });
        } else {
            animation = gsap.timeline();
            animation.to('#lessons', { opacity: 0, duration: .3 });
            animation.to('#lessonsTitle', { y: '-150', opacity: 0, duration: 0.5 });
            animation.to('#main-video', { opacity: 0, duration: 0.5 }, '-=0.5');
        }

        return () => {
            if (animation) {
                animation.kill();
            }
        };
    }, [inView]);


    return <section id='lessons' className='min-h-[60vh] opacity-0' ref={ref}>
        <div className='wrapper'>
            <Title id='lessonsTitle'>ЗАНЯТТЯ</Title>
            <div className='w-full flex items-center justify-center py-14'>
                <div className='self-center w-full flex items-center justfiy-center'>
                    <div className='w-1/2 max-md:w-full h-full m-auto'>
                        <Video
                            id='main-video'
                            src='/main-video'
                            className='w-full'
                        />
                    </div>


                </div>
            </div>
        </div>



    </section >

}


export default Lessons;