import Button from '../UI/Button';
/* eslint-disable react/prop-types */



const InfoSection = ({ experience, students, level, about, free, changeHandler, name }) => {



  return (
    <div className='flex flex-col items-center gap-4 shadow-lg text-center text-lg p-4 max-md:pb-12' id="infoSection">

      <h2 className='w-full bg-[#3F7B5B] text-white text-4xl text-center p-2'>{name}</h2>
      {experience && (<p> <span className='font-bold text-xl'>Досвід:</span> {experience},</p>)}
      {students && <p><span className='font-bold text-xl'>Учні:</span> {students} </p>}
      {level && <p><span className='font-bold text-xl'>Рівень англійської:</span> {level}</p>}
      {about && <p><span className='font-bold text-xl'>Про мене:</span> {about}</p>}
      <article>
        <h3><span className='font-bold text-xl'>Вільні години:</span></h3>
        <p>{free}</p>
      </article>
      <Button className='text-white w-1/3 max-md:w-full' onClick={changeHandler.bind(null, true)}>ВІДГУКИ</Button>


    </div>
  );
};

export default InfoSection;
