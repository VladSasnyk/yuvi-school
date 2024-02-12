import gsap from "gsap";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Title from "../UI/Title";
import PriceItem from "./PriceItem";

// import { FaUser } from "react-icons/fa";
// import { HiUsers } from "react-icons/hi2";
// import { HiUserGroup } from "react-icons/hi2";
import PriceInfo from "./PriceInfo";
import Li from "../UI/Li";


// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





const Price = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    useEffect(() => {
        if (inView) {
            gsap.to('#price', { opacity: 1, duration: 0.2 })
            gsap.fromTo('#priceTitle', { y: '-150', opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'expo.inOut' })
            gsap.fromTo('.priceItem', { opacity: 0, scale: '0.1' }, { opacity: 1, duration: 1, scale: 1, stagger: 0.3 });
            gsap.fromTo('#priceInfo', { y: 120 }, { y: 0, duration: 2 })
        }

    }, [inView])




    return <section ref={ref} id='price' className="md:opacity-0">
        <div className="wrapper h-auto gap-12 max-sm:w-screen">
            <Title id="priceTitle">ЦІНИ</Title>
            <Swiper
                className="w-full h-full pb-10"
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoHeight
               
            >
                <SwiperSlide>
                    <PriceItem title='ІНДИВІДУАЛЬНИЙ ФОРМАТ' price='350 ГРН/ГОД'>

                        <Li title='особистий підхід:'>
                            вчителю доступні ваші потреби та рівень,
                            тому він може планувати заняття з
                            урахуванням вашого темпу та стилю
                            навчання.
                        </Li>
                        <Li title='максимальна увага:'>
                            ви отримуєте повну увагу вчителя, що
                            сприяє кращому засвоєнню матеріалу.
                        </Li>
                        <Li title='гнучкий графік:'>
                            ви маєте можливість обирати зручний для
                            вас графік навчання та за потреби
                            переносити уроки.

                            це ідеальний варіант для людей з складним
                            графіком.
                        </Li>
                    </PriceItem>
                </SwiperSlide>
                <SwiperSlide><PriceItem title='ГРУПОВИЙ ФОРМАТ' price='220 ГРН/70ХВ'>
                    <Li title='маленькі групи з 3-5 учнів.'></Li>
                    <Li title='8 занять на місяць.'></Li>
                    <Li title='інтенсивна практика говоріння:'>
                        у групі є більше можливостей для вправ у
                        мовленні, так як кожен учасник має
                        можливість висловити свою думку та
                        прийняти участь в діалозі.
                    </Li>
                    <Li title='обмін новими словами та виразами:'>
                        учасники можуть ділитися новими словами,
                        виразами та фразами, які вони вивчили, що
                        розширює лексичний запас всієї групи.
                    </Li>
                    <Li title='заохочення та підтримка:'>
                        можливість отримувати підтримку від інших
                        учасників групи, що допомагає зберігати
                        мотивацію та стимулює досягнення цілей.
                    </Li>
                    <Li title='доступна ціна:'>
                        отримуєте ту саму кількість занять, але за
                        вигіднішою ціною
                    </Li>
                </PriceItem>
                </SwiperSlide>
                <SwiperSlide><PriceItem title='ПАРНИЙ ФОРМАТ' price='290 ГРН/ГОД'>
                    <Li title='8 занять на місяць'></Li>
                    <Li title='взаємне заохочення:'>
                        партнер може стати великим джерелом
                        підтримки та стимулювати вас до досягнення
                        більших успіхів.
                    </Li>
                    <Li title='мотивація:'>
                        наявність партнера спонукає до регулярних
                        занять та підтримує мотивацію.
                    </Li>
                    <Li title='вчитесь один в одного:'>
                        можливість обмінюватися знаннями та
                        допомагати одне одному в процесі вивчення.
                    </Li>
                </PriceItem></SwiperSlide>
                
            </Swiper>

            {/* <div className="flex h-auto w-full">
                <div className="w-full flex justify-center gap-6 max-[1100px]:flex-col">
                    <PriceItem title='ІНДИВІДУАЛЬНИЙ ФОРМАТ' price='350 ГРН/ГОД'>

                        <Li title='особистий підхід:'>
                            вчителю доступні ваші потреби та рівень,
                            тому він може планувати заняття з
                            урахуванням вашого темпу та стилю
                            навчання.
                        </Li>
                        <Li title='максимальна увага:'>
                            ви отримуєте повну увагу вчителя, що
                            сприяє кращому засвоєнню матеріалу.
                        </Li>
                        <Li title='гнучкий графік:'>
                            ви маєте можливість обирати зручний для
                            вас графік навчання та за потреби
                            переносити уроки.

                            це ідеальний варіант для людей з складним
                            графіком.
                        </Li>
                    </PriceItem>
                    <PriceItem title='ГРУПОВИЙ ФОРМАТ' price='220 ГРН/70ХВ'>
                        <Li title='маленькі групи з 3-5 учнів.'></Li>
                        <Li title='8 занять на місяць.'></Li>
                        <Li title='інтенсивна практика говоріння:'>
                            у групі є більше можливостей для вправ у
                            мовленні, так як кожен учасник має
                            можливість висловити свою думку та
                            прийняти участь в діалозі.
                        </Li>
                        <Li title='обмін новими словами та виразами:'>
                            учасники можуть ділитися новими словами,
                            виразами та фразами, які вони вивчили, що
                            розширює лексичний запас всієї групи.
                        </Li>
                        <Li title='заохочення та підтримка:'>
                            можливість отримувати підтримку від інших
                            учасників групи, що допомагає зберігати
                            мотивацію та стимулює досягнення цілей.
                        </Li>
                        <Li title='доступна ціна:'>
                            отримуєте ту саму кількість занять, але за
                            вигіднішою ціною
                        </Li>
                    </PriceItem>
                    <PriceItem title='ПАРНИЙ ФОРМАТ' price='290 ГРН/ГОД'>
                        <Li title='8 занять на місяць'></Li>
                        <Li title='взаємне заохочення:'>
                            партнер може стати великим джерелом
                            підтримки та стимулювати вас до досягнення
                            більших успіхів.
                        </Li>
                        <Li title='мотивація:'>
                            наявність партнера спонукає до регулярних
                            занять та підтримує мотивацію.
                        </Li>
                        <Li title='вчитесь один в одного:'>
                            можливість обмінюватися знаннями та
                            допомагати одне одному в процесі вивчення.
                        </Li>
                    </PriceItem>
                </div>
            </div> */}

            <PriceInfo id='priceInfo' />

        </div>
    </section>
}

export default Price;



// діти до 16 років
// 300 грн/год - індивід
// 220 грн/45хв парні

// 165 грн/год групові

// ціни для дорослих:
// 350 грн/год індивід
// 280 грн/ год парні
// 210 грн/ групові  (3-4 учня



