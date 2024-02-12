import { Link } from 'react-scroll';
import planet from '../../assets/logo.png';
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-green-700/50 mt-[10%] flex items-center justify-around text-white text-xl max-md:flex-col max-sm:text-lg">
            <div className='py-20 text-center max-sm:py-10'>
                <Link className="cursor-pointer text-center"
                    to='home'
                    spy={true}
                    smooth={true}
                    duration={1200}>
                    <img src={planet} alt="planetImg" className='w-[12vw] max-md:w-[70%] m-auto max-sm:w-[40%]' />
                </Link>
               
            </div>
            <div className='flex flex-col'>
                <nav className='flex gap-6 border-b-2 border-white pb-6 mb-6 max-md:flex-col text-center'>
                    <Link className="cursor-pointer"
                        to='about'
                        spy={true}
                        smooth={true}
                        duration={1200}>
                        ПРО ШКОЛУ
                    </Link>
                    <Link className="cursor-pointer"
                        to='price'
                        spy={true}
                        smooth={true}
                        duration={1200}>
                        ЦІНИ
                    </Link>
                    <Link className="cursor-pointer"
                        to='teachers'
                        spy={true}
                        smooth={true}
                        duration={1200}>
                        ВИКЛАДАЧІ
                    </Link>
                    <Link className="cursor-pointer"
                        to='lessons'
                        spy={true}
                        smooth={true}
                        duration={1200}>
                        НАВЧАННЯ
                    </Link>
                    <Link className="cursor-pointer"
                        to='questions'
                        spy={true}
                        smooth={true}
                        duration={1200}>
                        ПИТАННЯ
                    </Link>
                </nav>
                <div className='flex text-5xl cursor-pointer gap-6 w-full items-center justify-center pb-6 max-sm:text-3xl'>
                    <a href='https://www.instagram.com/eng.space_' target='_blanc'><BsInstagram /></a>
                    <BsTelegram />
                    <FaViber />
                </div>
            </div>


        </footer>
    )
}

export default Footer;