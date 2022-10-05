import Link from "next/link"
import { useRef } from "react";
import { AiOutlineShoppingCart, AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subtotal }) => {
    // console.log(cart, addToCart, removeFromCart, clearCart, subtotal)
    const toggalChart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
            ref.current.classList.remove('hidden')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('hidden')

            ref.current.classList.add('translate-x-full')
        }
    }
    const ref = useRef()
    return (
        <div className='sticky top-0 bg-white flex flex-col justify-center items-center md:flex-row md:justify-start shadow-lg'>
            <div className='logo my-2 mx-4 cursor-pointer'>
                <Link href={'/'}>
                    <img src='/img/logo.png' width={150} height={60} alt={'logo'} />
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
            <div ref={ref} className="h-[100vh] sideCart absolute top-7 right-0 bg-white rounded-md border py-10 pl-10 pr-2 w-80 transform transition-transform translate-x-full hidden">
                <h2 className="font-bold text-xl text-center">Shopping Chart</h2><hr className="mt-2 w-full" />
                <span onClick={toggalChart} className=" hover:text-orange-500 hover:shadow-2xl text-2xl absolute top-4 right-8  cursor-pointer text-orange-400 "><AiFillCloseCircle /></span>
                <ol className="list-decimal font-semibold">
                    {Object.keys(cart).length == 0 &&
                        <div className="m-5 text-center font-bold">No Item present In the Cart </div>
                    }
                    {Object.keys(cart).map((kee) => {
                        return <li key={kee}>
                            <div className="item flex">
                                <div className="w-2/3 font-semibold my-5"> {cart[kee].itemName}</div>
                                <div className=" flex font-semibold items-center justify-end w-2/3 text-xl">
                                    <AiFillMinusCircle onClick={() => { removeFromCart(kee, 1, cart[kee].itemPrice, cart[kee].itemName, cart[kee].itemSize, cart[kee].itemVariant) }} className="mx-4 text-orange-400 cursor-pointer hover:text-orange-600" />
                                    <span>{cart[kee].itemQty}</span>
                                    <AiFillPlusCircle onClick={() => { addToCart(kee, 1, cart[kee].itemPrice, cart[kee].itemName, cart[kee].itemSize, cart[kee].itemVariant) }} className="mx-4 text-orange-400 cursor-pointer hover:text-orange-600" />
                                </div>
                            </div>
                        </li>
                    })}

                </ol>
                <div className="flex mt-5 ">

                    <Link href={'./checkout'}><button className="flex  text-white bg-orange-500 border-0 py-2 px-3 focus:outline-none hover:bg-orange-600 rounded text-lg"><BsFillBagCheckFill className="m-1 mr-2" />Checkout</button></Link>
                    <button onClick={clearCart} className="flex mx-auto  text-white bg-orange-500 border-0 py-2 px-3 focus:outline-none hover:bg-orange-600 rounded text-lg">Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar