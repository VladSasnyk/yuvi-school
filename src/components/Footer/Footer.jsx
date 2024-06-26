import { Link } from 'react-scroll';
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-[#c14649]/50 mt-[10%] flex items-center text-white justify-around text-xl max-md:flex-col max-sm:text-lg">
            <div className='text-center'>
                <Link className="cursor-pointer text-center"
                    to='home'
                    href='#home'
                    spy={true}
                    smooth={true}
                    duration={1200}>
                    <img src='/logo.png' alt="planetImg" className='w-[12vw] max-md:w-[70%] m-auto max-sm:w-[40%]' />
                </Link>
               
            </div>
            <div className='flex flex-col'>
                <nav className='flex gap-6 border-b-2 border-white pb-6 mb-6 max-md:flex-col text-center'>
                    <Link className="cursor-pointer"
                        to='about'
                        href='#about'
                        spy={true}
                        smooth={true}
                        duration={1200}>
                        ПРО ШКОЛУ
                    </Link>
                    <Link className="cursor-pointer"
                        to='price'
                        href="#price"
                        spy={true}
                        smooth={true}
                        duration={1200}>
                        ЦІНИ
                    </Link>
                    <Link className="cursor-pointer"
                        to='teachers'
                        href="teachers"
                        spy={true}
                        smooth={true}
                        duration={1200}>
                        ВИКЛАДАЧІ
                    </Link>
                    <Link className="cursor-pointer"
                        to='lessons'
                        href="#lessons"
                        spy={true}
                        smooth={true}
                        duration={1200}>
                        НАВЧАННЯ
                    </Link>
                    <Link className="cursor-pointer"
                        to='questions'
                        href="#questions"
                        spy={true}
                        smooth={true}
                        duration={1200}>
                        ПИТАННЯ
                    </Link>
                </nav>
                <div className='flex text-5xl cursor-pointer gap-6 w-full items-center justify-center pb-6 max-sm:text-3xl'>
                    <a href='https://www.instagram.com/eng.space_' target='_blanc' aria-label='Instagram'><BsInstagram/></a>
                    <a href="https://t.me/+34642381653" target='_blanc' aria-label='Telegram'><BsTelegram /></a>
                    <FaViber />
                </div>
            </div>


        </footer>
    )
}

export default Footer;