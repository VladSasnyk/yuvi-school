import { useEffect } from 'react';
import gsap from 'gsap';
import Button from '../UI/Button';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
/* eslint-disable react/prop-types */


const ReviewSection = ({ reviews, openImage, changeHandler }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      gsap.fromTo('.reviewSectionItem', { y: 150, opacity: 0 }, { y: 0, duration: 1, stagger: .4, opacity: 1, delay: .5 })
    }

  }, [inView])

  return (
    <div className='shadow-lg p-10 flex flex-col gap-6 text-center' id="reviewSection" ref={ref}>
      <h2 className='w-full bg-[#3F7B5B] text-white text-4xl text-center p-2'>Відгуки</h2>
      <div className='grid grid-cols-2 gap-4 max-md:grid-cols-1 text-center'>
        {reviews.map((el, i) => (
          <div key={i} className='reviewSectionItem w-full' onClick={() => openImage(el)}>
            <img src={el} alt={`review-${i}`} className='object-cover hover:cursor-zoom-in' />
          </div>
        ))}
      </div>
      <Link
        to='swiperSection'
        spy={true}
        smooth={true}>
        <Button onClick={changeHandler.bind(null, false)} className='text-white self-center max-md:w-full max-sm:text-base'>ПОВЕРНУТИСЬ</Button>
      </Link>

    </div>
  );
};

export default ReviewSection;

