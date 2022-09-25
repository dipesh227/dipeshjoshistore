import Image from "next/image"
import Link from "next/link"
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/Ai';

function Header() {
    return (
        <div className='flex bg-black text-white flex-col justify-center items-center md:flex-row md:justify-end '>
            <div className='nav md:ml-10 flex'>
                <ul className="flex items-center space-x-2 font-bold text-xl  m-2 ">
                    <Link href={'/login'}><a className="hover:text-orange-500 text-bold hover:bg-slate-300 rounded-2xl"><li className="m-3 my-2  active:bg-slate-300 "><AiOutlineLogin /></li></a></Link>
                    <Link href={'/signup'}><a className="hover:text-orange-500 text-bold hover:bg-slate-300 rounded-2xl"><li className="m-3 my-2  active:bg-slate-300 "><AiOutlineUserAdd /></li></a></Link>

                </ul>


            </div>

        </div>
    )
}

export default Header