import Link from "next/link";
import mongoose from "mongoose";
import Product from "../models/Product";

function Tshirts({ products }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* product section start */}
          {products.map((item) => {
            return (
              <Link href={"/product/" + item._id} key={item._id}>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full text-center shadow-xl hover:shadow-2xl m-3 hover:px-1 cursor-pointer">
                  <a className="block rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className=" w-full h-60 block"
                      src={item.img}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {item.cat}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                    <p className="mt-1">₹ {item.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
          {/* product setion end */}
        </div>
      </div>
    </section>
  );
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].redyState) {
    await mongoose.connect(process.env.MONGO_URI);
    // console.log("connect");
  }
  let products = await Product.find({ cat: "tshirt" });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
    // will be passed to the page component as props
  };
}
export default Tshirts;
