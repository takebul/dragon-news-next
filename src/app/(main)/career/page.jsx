export const metadata = {
  title: "Dragon News | Career",
};

const productsFetch = async () => {
  const res = await fetch(
    `https://dragon-news-server-oxd1.onrender.com/products`,
  );
  const data = await res.json();
  return data;
};

const CareerPage = async () => {
  const products = await productsFetch();
  console.log(products);

  return (
    <div className="w-4xl mx-auto my-15">
      <h2 className="font-bold text-3xl mb-7 text-center">
        Total products: {products.length}{" "}
      </h2>
      <div className="flex flex-col gap-4">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="rounded-lg shadow p-2 border-2 border-orange-500"
            >
              <h2 className="font-bold">Product name: {product.name} </h2>
              <p>Price: {product.price} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerPage;
