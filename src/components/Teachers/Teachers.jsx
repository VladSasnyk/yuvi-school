import { useState, useEffect, useRef } from 'react';
import Title from '../UI/Title';
import axios from 'axios';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from "react-intersection-observer";
import 'swiper/css';
import 'swiper/css/bundle';
import TeacherCard from './TeacherCard';
import Button from '../UI/Button';
import ImageViewer from './ImageViewer';
import gsap from 'gsap';

const Teachers = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: .1,
    });

    const [data, setData] = useState(null);
    const [isReviews, setReviews] = useState(false);
    const swiperRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [filterTeachers, setFilterTeachers] = useState('adults');
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);


    useEffect(() => {
        let animation;

        if (inView) {
            gsap.to('#teachers', { opacity: 1, duration: 0.2 });
            gsap.fromTo('#teachersTitle', { y: '-150', opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'expo.inOut' });
            gsap.fromTo('#buttonFilterLeft', { opacity: 0, x: '-50vw' }, { opacity: 1, duration: 1.5, x: 0, ease: 'expo.inOut' });
            gsap.fromTo('#buttonFilterRight', { opacity: 0, x: '50vw' }, { opacity: 1, duration: 1.5, x: 0, ease: 'expo.inOut' });
        } else {
            animation = gsap.timeline();
            animation.to('#teachers', { opacity: 0, duration: 0.2 });
            animation.to('#teachersTitle', { y: '-150', opacity: 0, duration: 0.5 });
            animation.to('#buttonFilterLeft', { opacity: 0, x: '-50vw', duration: 0.5 }, '-=0.5');
            animation.to('#buttonFilterRight', { opacity: 0, x: '50vw', duration: 0.5 }, '-=0.5');
        }

        return () => {
            if (animation) {
                animation.kill();
            }
        };
    }, [inView]);


    useEffect(() => {
        if (inView) {
            gsap.fromTo("#teacherCard", { opacity: 0, y: 500 }, { opacity: 1, y: 0, duration: 1 });
        }

    }, [inView, filterTeachers])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/teachers.json');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const slideChangeHandler = () => {
        closeReviews();
    };

    const changeHandler = (active) => {
        active ? openReviews() : closeReviews();
        !active
            ? gsap.to('#teachersInfo', { rotateY: 0, translateZ: 0, duration: 1 })
            : gsap.fromTo('#teachersInfo', { rotateY: 0, translateZ: 0 }, { rotateY: 180, translateZ: 0, duration: 1 });
    };

    const openReviews = () => {
        setReviews(true);
    };

    const closeReviews = () => {
        setReviews(false);
        gsap.to('#teachersInfo', { rotateY: 0 });

        const currentSlideIndex = swiperRef.current.swiper.realIndex;
        setTimeout(() => {
            swiperRef.current.swiper.update();
            swiperRef.current.swiper.slideTo(currentSlideIndex);
        }, 0);

    };

    const openImage = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const filterHandler = (props) => {
        swiperRef.current.swiper.slideTo(0);
        setFilterTeachers(props);
        closeReviews();
        gsap.fromTo("#teacherCard", { opacity: 0, y: 150 }, { opacity: 1, y: 0, duration: 1 });
    };

    return (
        <section id='teachers' className='opacity-0 flex-col gap-14 h-auto pt-10' ref={ref}>
            <Title id='teachersTitle'>ВИКЛАДАЧІ</Title>
            <div className='text-center flex gap-8 max-md:flex-col' id='teachersButtons'>
                <Button
                    onClick={() => filterHandler('children')}
                    className={`text-xl max-sm:text-lg ${filterTeachers === 'adults' ? 'bg-transparent text-gray-800 border-green-700 border-2' : 'text-white'}`} id='buttonFilterLeft'>
                    Викладачі для дітей 6-12 років
                </Button>
                <Button
                    onClick={() => filterHandler('adults')}
                    className={`text-xl max-sm:text-lg ${filterTeachers === 'children' ? 'bg-transparent text-gray-800 border-green-700 border-2' : 'text-white'}`} id='buttonFilterRight'>
                    Викладачі підлітків і дорослих
                </Button>
            </div>
            {data ? (
                <Swiper
                    id='swiperSection'
                    ref={swiperRef}
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className='w-full h-auto pb-16'
                    onSlideChange={slideChangeHandler}
                    onActiveIndexChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
                    autoHeight
                >
                    {[...data].filter(el => el[filterTeachers]).map(({ id, ...teacherProps }, index) => (
                        <SwiperSlide key={id}>
                            <TeacherCard
                                {...teacherProps}
                                isReviews={isReviews}
                                openImage={openImage}
                                changeHandler={changeHandler}
                                isCurrentSlide={index === currentSlideIndex}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p>Завантаження</p>
            )}
            {selectedImage && (
                <ImageViewer imageUrl={selectedImage} onClose={closeImage} />
            )}
        </section>
    );
};

export default Teachers;