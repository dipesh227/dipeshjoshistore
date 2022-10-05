import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from "next/link";

const Checkout = ({ cart, subtotal, addToCart, removeFromCart }) => {
  return (
    <div className="container m-auto px-5">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-bold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-2   ">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full ">
        <div className=" mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            cols="30"
            rows="4"
            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mx-auto flex my-2   ">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2   ">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <h2 className="font-bold text-xl mt-10">2. Review Cart Item</h2>
      <div className="flex-row md:flex md:space-x-5">
        <div className=" sideCart bg-white rounded-md border py-10 pl-10 pr-2 md:w-2/3 mt-5  ">
          <h2 className="font-bold text-xl text-center">Shopping Chart</h2>
          <hr className="mt-2 w-full" />

          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length == 0 && (
              <div className="m-5 text-center font-bold">
                No Item present In the Cart{" "}
              </div>
            )}
            <li className="item flex justify-between mx-10 font-bold my-3 text-xl">
              <h3 className="">Name</h3>
              <h3 className="mr-2">Price</h3>
              <h3 className="mr-11">Modifiy</h3>
            </li>
            <hr />
            {Object.keys(cart).map((kee) => {
              return (
                <>
                  <li key={kee}>
                    <div className="item flex justify-between mx-10">
                      <div className=" font-semibold my-5">
                        {cart[kee].itemName}
                      </div>
                      <div className=" font-semibold my-5">
                        ₹ {cart[kee].itemPrice * cart[kee].itemQty}
                      </div>
                      <div className=" flex font-semibold items-center justify-end text-xl">
                        <AiFillMinusCircle
                          onClick={() => {
                            removeFromCart(
                              kee,
                              1,
                              cart[kee].itemPrice,
                              cart[kee].itemName,
                              cart[kee].itemSize,
                              cart[kee].itemVariant
                            );
                          }}
                          className="mx-4 text-orange-400 cursor-pointer hover:text-orange-600"
                        />
                        <span>{cart[kee].itemQty}</span>
                        <AiFillPlusCircle
                          onClick={() => {
                            addToCart(
                              kee,
                              1,
                              cart[kee].itemPrice,
                              cart[kee].itemName,
                              cart[kee].itemSize,
                              cart[kee].itemVariant
                            );
                          }}
                          className="mx-4 text-orange-400 cursor-pointer hover:text-orange-600"
                        />
                      </div>
                    </div>
                    <hr />
                  </li>
                </>
              );
            })}
          </ol>
        </div>
        <div className="ratecard bg-white rounded-md border py-10 pl-10 pr-2 md:w-1/3 mt-5">
          <h2 className="font-bold text-xl text-center">Place Order</h2>
          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length == 0 && (
              <div className="m-5 text-center font-bold">
                No Item present In the Cart{" "}
              </div>
            )}
            <li
              key={"header"}
              className="item flex justify-between mx-10 font-bold my-3 text-xl"
            >
              <h3 className="">Name</h3>
              <h3 className="">Price</h3>
            </li>

            <hr />
            {Object.keys(cart).map((ki) => {
              return (
                <>
                  <li key={ki}>
                    <div className="item flex justify-between mx-10">
                      <div className=" font-semibold my-5">
                        {cart[ki].itemName}
                      </div>
                      <div className=" font-semibold my-5">
                        ₹ {cart[ki].itemPrice * cart[ki].itemQty}
                      </div>
                    </div>
                    <hr />
                  </li>
                </>
              );
            })}
          </ol>
          <div className="mt-5 mx-10 flex justify-between">
            <span className="total font-bold ">Sub Total : </span>
            <span className="total font-bold "> ₹ {subtotal}</span>
          </div>

          <div className="mt-5 flex mr-5 justify-end">
            <Link href={`${subtotal == 0 ? "/" : "/checkout"}`}>
              <button
                type="button"
                className={`flex text-white bg-orange-500 border-0 py-2 px-3 focus:outline-none hover:bg-orange-600 rounded text-lg ${
                  subtotal == 0 ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                Pay ₹ {subtotal}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
