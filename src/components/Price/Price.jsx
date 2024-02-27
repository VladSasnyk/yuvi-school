import gsap from "gsap";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Title from "../UI/Title";
import PriceItem from "./PriceItem";

import PriceInfo from "./PriceInfo";
import Li from "../UI/Li";

// import { Navigation, Pagination, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const Price = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    useEffect(() => {
        let animation;

        if (inView) {
            gsap.to('#price', { opacity: 1, duration: 0.2 });
            gsap.fromTo('#priceTitle', { y: '-150', opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'expo.inOut' });
            gsap.fromTo('.priceItem', { opacity: 0, scale: '0.1' }, { opacity: 1, duration: 1, scale: 1, stagger: 0.3 });
            gsap.fromTo('#priceInfo', { y: 120 }, { y: 0, duration: 2 });
        } else {
            animation = gsap.timeline();
            animation.to('#price', { opacity: 0, duration: 0.2 });
            animation.to('#priceTitle', { y: '-150', opacity: 0, duration: 0.5 });
            animation.to('.priceItem', { opacity: 0, scale: '0.1', duration: 0.5 }, '-=0.5');
            animation.to('#priceInfo', { y: 120, duration: 0.5 }, '-=0.5');
        }

        return () => {
            if (animation) {
                animation.kill();
            }
        };
    }, [inView]);




    return <section ref={ref} id='price' className="opacity-0">
        <div className="wrapper h-auto gap-12 max-sm:w-screen p-0">
            <Title id="priceTitle">ЦІНИ</Title>
            {/* <Swiper
                className="w-full h-full pb-10"
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoHeight

            > */}
            <div className="flex gap-8 h-max max-[1200px]:flex-col">
                {/* <SwiperSlide> */}
                <PriceItem title='ІНДИВІДУАЛЬНИЙ ФОРМАТ' price1='400 ГРН/ГОД' price2='350 ГРН/ГОД'>

                    <Li title='4/8/12 занять на тиждень'/>
                    <Li title='персоналізація'>
                        {/* вчителю доступні ваші потреби та рівень,
                            тому він може планувати заняття з
                            урахуванням вашого темпу та стилю
                            навчання. */}
                    </Li>
                    <Li title='гнучкий графік'>
                        {/* ви маєте можливість обирати зручний для
                            вас графік навчання та за потреби
                            переносити уроки.

                            це ідеальний варіант для людей з складним
                            графіком. */}
                    </Li>
                    <Li title='максимальна увага'>
                        {/* ви отримуєте повну увагу вчителя, що
                            сприяє кращому засвоєнню матеріалу. */}
                    </Li>

                </PriceItem>
                {/* </SwiperSlide> */}
                {/* <SwiperSlide> */}
                <PriceItem title='ГРУПОВИЙ ФОРМАТ' price1='230 ГРН/ГОД' price2='190 ГРН/ГОД'>
                    <Li title='маленькі групи з 3-5 учнів'></Li>
                    <Li title='8 занять на місяць'></Li>
                    <Li title='інтенсивна практика говоріння'>
                        {/* у групі є більше можливостей для вправ у
                        мовленні, так як кожен учасник має
                        можливість висловити свою думку та
                        прийняти участь в діалозі. */}
                    </Li>
                    {/* <Li title='обмін новими словами та виразами:'>
                        учасники можуть ділитися новими словами,
                        виразами та фразами, які вони вивчили, що
                        розширює лексичний запас всієї групи.
                    </Li> */}
                    <Li title='заохочення та підтримка'>
                        {/* можливість отримувати підтримку від інших
                        учасників групи, що допомагає зберігати
                        мотивацію та стимулює досягнення цілей. */}
                    </Li>
                    <Li title='доступна ціна'>
                        {/* отримуєте ту саму кількість занять, але за
                        вигіднішою ціною */}
                    </Li>
                </PriceItem>
                {/* </SwiperSlide> */}
                {/* <SwiperSlide> */}
                <PriceItem title='ПАРНИЙ ФОРМАТ' price1='330 ГРН/ГОД' price2='280 ГРН/ГОД'>
                    <Li title='8 занять на місяць'></Li>
                    <Li title='взаємне заохочення'>
                        {/* партнер може стати великим джерелом
                        підтримки та стимулювати вас до досягнення
                        більших успіхів. */}
                    </Li>
                    <Li title='мотивація'>
                        {/* наявність партнера спонукає до регулярних
                        занять та підтримує мотивацію. */}
                    </Li>
                    <Li title='вчитесь один в одного'>
                        {/* можливість обмінюватися знаннями та
                        допомагати одне одному в процесі вивчення. */}
                    </Li>
                </PriceItem>
                {/* </SwiperSlide> */}

                {/* </Swiper> */}
            </div>



            <PriceInfo id='priceInfo' />

        </div>
    </section>
}

export default Price;




