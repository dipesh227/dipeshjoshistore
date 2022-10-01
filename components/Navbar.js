import Image from "next/image"
import Link from "next/link"
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Navbar() {
    return (
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-start shadow-lg sticky'>
            <div className='logo my-2 mx-4 '>
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
            <div className="cart absolute right-0 top-7 mx-7 hover:text-red-600 ">
                <AiOutlineShoppingCart className="text-2xl md:text-3xl" />
            </div>
        </div>
    )
}

export default Navbar