function Hello() {
  return (
    <div>
      <h1 className="text-blue-500 text-3xl">Hello React</h1>
      <p className="text-green-500 text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea
        assumenda debitis
      </p>
    </div>
  );
}

function Product({
  name,
  description,
  price,
  imageUrl,
  rating = 4.5,
  isSale = false,
}) {
  return (
    <div className="group flex flex-col justify-between w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400 text-sm">
            No image available
          </div>
        )}

        {/* Optional Sale Badge */}
        {isSale && (
          <span className="absolute top-3 left-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
            Sale
          </span>
        )}
      </div>

      {/* Product Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
            <span>★</span>
            <span className="text-gray-600">{rating}</span>
          </div>

          <h2 className="mt-1 text-xl font-bold tracking-tight text-purple-700 transition-colors group-hover:text-purple-800">
            {name}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Footer & Action */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <h3 className="text-lg font-bold text-emerald-600">
            ₹{price?.toLocaleString()}
          </h3>

          <button className="mt-3 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <h1 className="text-red-500 text-3xl">Hello React</h1>

      <Hello />

      <Product
        name="Laptop"
        description="HP Victus Gaming Laptop"
        price={65000}
      />
    </>
  );
}

export default App;
export { Hello, Product };
