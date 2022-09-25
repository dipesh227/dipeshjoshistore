import Image from 'next/image'
import Link from 'next/link'

function Tshirts() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container  py-16 mx-auto md:flex justify-between">
                <div className="fillter py-10 px-20">
                    Fillter
                </div>
                <div className="flex flex-wrap m-4">
                    <Link href={'/product/code'} >
                        <div className="cursor-pointer shadow-2xl m-10 lg:w-1/4 md:w-1/2 p-5 w-full">
                            <a className="block rounded md:h-auto overflow-hidden">
                                <Image width={380} height={400} alt="ecommerce" className=" h-{10vh} block" src="/img/mug.webp" />
                            </a>
                            <div className="mt-4 text-center">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                <p className="mt-1">$12.00</p>
                                <p className="mt-1">S, M, XL, XXL </p>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/product/code'} >
                        <div className="cursor-pointer shadow-2xl m-10 lg:w-1/4 md:w-1/2 p-5 w-full">
                            <a className="block rounded md:h-auto overflow-hidden">
                                <Image width={380} height={400} alt="ecommerce" className=" h-{10vh} block" src="/img/mug.webp" />
                            </a>
                            <div className="mt-4 text-center">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p className="mt-1">$18.40</p>
                                <p className="mt-1">S, M, XL, XXL </p>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/product/code'} >
                        <div className="cursor-pointer shadow-2xl m-10 lg:w-1/4 md:w-1/2 p-5 w-full">
                            <a className="block rounded md:h-auto overflow-hidden">
                                <Image width={380} height={400} alt="ecommerce" className=" h-{10vh} block" src="/img/mug.webp" />
                            </a>
                            <div className="mt-4 text-center">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p className="mt-1">$16.00</p>
                                <p className="mt-1">S, M, XL, XXL </p>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/product/code'} >
                        <div className="cursor-pointer shadow-2xl m-10 lg:w-1/4 md:w-1/2 p-5 w-full">
                            <a className="block rounded md:h-auto overflow-hidden">
                                <Image width={380} height={400} alt="ecommerce" className=" h-{10vh} block" src="/img/mug.webp" />
                            </a>
                            <div className="mt-4 text-center">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                <p className="mt-1">$21.15</p>
                                <p className="mt-1">S, M, XL, XXL </p>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/product/code'} >
                        <div className="cursor-pointer shadow-2xl m-10 lg:w-1/4 md:w-1/2 p-5 w-full">
                            <a className="block rounded md:h-auto overflow-hidden">
                                <Image width={380} height={400} alt="ecommerce" className=" h-{10vh} block" src="/img/mug.webp" />
                            </a>
                            <div className="mt-4 text-center">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                <p className="mt-1">$12.00</p>
                                <p className="mt-1">S, M, XL, XXL </p>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/product/code'} >
                        <div className="cursor-pointer shadow-2xl m-10 lg:w-1/4 md:w-1/2 p-5 w-full">
                            <a className="block rounded md:h-auto overflow-hidden">
                                <Image width={380} height={400} alt="ecommerce" className=" h-{10vh} block" src="/img/mug.webp" />
                            </a>
                            <div className="mt-4 text-center">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p className="mt-1">$18.40</p>
                                <p className="mt-1">S, M, XL, XXL </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Tshirts