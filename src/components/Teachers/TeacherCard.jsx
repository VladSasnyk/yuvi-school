/* eslint-disable react/prop-types */
import ReviewSection from "./ReviewSection";
import InfoSection from "./InfoSection";
// import gsap from "gsap";
// import { useEffect } from "react";


const TeacherCard = ({ photo, name, experience, level, students, about, free, reviews, isReviews, openImage, changeHandler, isCurrentSlide }) => {

    return (
        <div className={`flex items-center justify-center gap-8 max-md:flex-col max-md:w-full h-auto`} id="teacherCard">

            <div className='w-[30vw] h-25vw max-[1400px]:h-[40vw] max-[1400px]:w-[40vw] max-md:w-full max-md:h-2/3 relative'>
                <img
                    src={photo}
                    className='w-full h-full object-cover'
                    alt={name}
                />
            </div>

            <div className='w-1/2 max-md:w-full h-full filter-none' id="teachersInfo">
                {isCurrentSlide ? (
                    isReviews ? (
                        <ReviewSection reviews={reviews} openImage={openImage} changeHandler={changeHandler} name={name} />
                    ) : (
                        <InfoSection
                            name={name}
                            experience={experience}
                            students={students}
                            level={level}
                            about={about}
                            free={free}
                            changeHandler={changeHandler}
                        />
                    )
                ) : null}
            </div>

        </div>
    );
};

export default TeacherCard;


