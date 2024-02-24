import Button from '../UI/Button';
/* eslint-disable react/prop-types */



const InfoSection = ({ experience, students, level, about, changeHandler, name }) => {



  return (
    <div className='flex flex-col items-center gap-4 shadow-lg text-center text-lg p-4 max-md:pb-12 max-sm:text-base' id="infoSection">

      <h2 className='w-full bg-[#3F7B5B] text-white text-4xl text-center p-2 max-sm:text-2xl'>{name}</h2>
      {experience && (<p> <span className='font-bold text-lg'>Досвід:</span> {experience},</p>)}
      {students && <p><span className='font-bold text-lg'>Учні:</span> {students} </p>}
      {level && <p><span className='font-bold text-lg'>Рівень англійської:</span> {level}</p>}
      {about && <p><span className='font-bold text-lg'>Про мене:</span> {about}</p>}
      <Button className='text-white w-1/3 max-md:w-1/2 max-sm:w-2/3 max-sm:text-sm' onClick={changeHandler.bind(null, true)}>ВІДГУКИ</Button>


    </div>
  );
};

export default InfoSection;
