import { useEffect } from 'react';
import Title from '../UI/Title'
import QuestionsItem from './QuestionsItem';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';


const Questions = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    // useEffect(() => {
    //     if (inView) {
    //         gsap.to('#questions', { opacity: 1, duration: .3 })
    //         gsap.fromTo('#questionsTitle', { y: '-150', opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'expo.inOut' })
    //         gsap.fromTo('.questionItem', { opacity: 0 }, { opacity: 1, duration: .7, stagger: .2 })
    //     }
    // }, [inView])

    useEffect(() => {
        let animation;

        if (inView) {
            gsap.to('#questions', { opacity: 1, duration: .3 });
            gsap.fromTo('#questionsTitle', { y: '-150', opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'expo.inOut' });
            gsap.fromTo('.questionItem', { opacity: 0 }, { opacity: 1, duration: .7, stagger: .2 });
        } else {
            animation = gsap.timeline();
            animation.to('#questions', { opacity: 0, duration: .3 });
            animation.to('#questionsTitle', { y: '-150', opacity: 0, duration: 0.5 });
            animation.to('.questionItem', { opacity: 0, duration: 0.3, stagger: 0.1 }, '-=0.5');
        }

        return () => {
            if (animation) {
                animation.kill(); // Kill the animation when component unmounts or re-renders
            }
        };
    }, [inView]);

    return (
        <section id='questions' className='min-h-10 opacity-0' ref={ref}>
            <div className="wrapper gap-10">
                <Title id='questionsTitle'>ПИТАННЯ</Title>
                <div className='w-full flex-col gap-12 flex'>
                    <QuestionsItem trigger="Де проходять заняття?">Заняття відбуваються через платформи Zoom та Notion.</QuestionsItem>
                    <QuestionsItem trigger='З якими рівнями ви працюєте?'>Навчаємо студентів від початкового рівня (А0) до просунутого (В2).</QuestionsItem>
                    <QuestionsItem trigger='Який графік занять?'>Якщо ви обрали індивідуальне навчання,  то заняття відбуваються в зручні для вас години, узгоджені з вчителем.  Для парного або групового навчання графік занять узгоджується з усіма учнями.</QuestionsItem>
                    <QuestionsItem trigger='За якими матеріалами ви навчаєте?'>Наші уроки базуються на сучасних підручниках, а також ми пропонуємо цікаві заняття на різноманітні теми. Також вчитель може редагувати матеріали під ваші побажання та потреби.</QuestionsItem>
                    <QuestionsItem trigger='Як проходить оплата?'>Перший урок оплачується окремо. Після цього оплата відбувається пакетами, залежно від формату навчання. Оплата індивідуального / парного навчання - 4/8 занять, а оплата групового навчання -  8 занять. </QuestionsItem>
                    <QuestionsItem trigger='Які правила скасування / перенесення уроків?'>Перенести заняття можна як мінімум за 2 години до початку, попередивши про це викладача у спільному чаті. Вчитель запропонує вам вільні дні та години для перенесення заняття.
                        Скасувати урок можна як мінімум за 6 годин до початку. Радимо уникати скасування уроків, оскільки це може вплинути на результати вашого навчання.
                        У випадку, якщо ви не повідомили викладача про відсутність на занятті, такий урок буде вважатись проведеним і списаним з вашого балансу.</QuestionsItem>
                    <QuestionsItem trigger='За скільки часу я досягну нового рівня?'>Стандартний час досягнення нового рівня становить приблизно 9 місяців, але це може змінюватися в залежності від індивідуальних факторів.</QuestionsItem>
                </div>
            </div>
        </section>
    )
}

export default Questions;