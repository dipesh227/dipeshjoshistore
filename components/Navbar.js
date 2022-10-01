import Image from "next/image"
import Link from "next/link"
import { useRef } from "react";
import { AiOutlineShoppingCart, AiFillCloseCircle } from 'react-icons/ai';

function Navbar() {
    const toggalChart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0 hidden')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0 hidden')
            ref.current.classList.add('translate-x-full')
        }
    }
    const ref = useRef()
    return (
        <div className='sticky top-0 bg-white flex flex-col justify-center items-center md:flex-row md:justify-start shadow-lg'>
            <div className='logo my-2 mx-4 cursor-pointer'>
                <Link href={'/'}>
                    <Image src='/img/logo.png' width={150} height={60} alt={'logo'} />
                </Link>
            </div>
            <div className='nav md:ml-10 flex'>
                <ul className="flex items-center space-x-2 font-bold md:text-2xl ">
                    <Link href={'/tshirts'}><a className="hover:bg-slate-300 rounded-2xl"><li className="m-5 mx-2 md:my-2 p-2 active:bg-slate-300 ">Tshirts</li></a></Link>
                    <Link href={'/mugs'}><a className="hover:bg-slate-300 rounded-2xl"><li className="m-5 mx-2 md:my-2 p-2 active:bg-slate-300 ">Mug</li></a></Link>
                    <Link href={'/about'}><a className="hover:bg-slate-300 rounded-2xl"><li className="m-5 mx-2 md:my-2 p-2 active:bg-slate-300 ">About</li></a></Link>
                    <Link href={'/contect'}><a className="hover:bg-slate-300 rounded-2xl"><li className="m-5 mx-2 md:my-2 p-2 active:bg-slate-300 ">Contact Us</li></a></Link>
                </ul>
            </div>
            <div onClick={toggalChart} className=" cursor-pointer cart absolute right-0 top-7 mx-7 hover:text-red-600 ">
                <AiOutlineShoppingCart className="text-2xl hover:text-3xl md:text-3xl md:hover:text-4xl" />
            </div>
            <div ref={ref} className="sideCart absolute top-16 right-0 bg-orange-100 py-10 px-2 w-80 transform transition-transform translate-x-full">
                <h2 className="font-bold text-xl items-center">Shopping Chart</h2>
                <span onClick={toggalChart} className=" hover:text-red-600 hover:text-2xl absolute top-4 right-8 text-xl cursor-pointer text-orange-400 "><AiFillCloseCircle /></span>
                <ol>
                    <li>
                        <span> cart it is</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Navbar