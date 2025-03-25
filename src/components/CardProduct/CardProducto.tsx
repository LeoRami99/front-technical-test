import { Product } from "../../interfaces/product.interface";
import { FaShoppingCart } from "react-icons/fa";

const CardProduct = (product: Product) => {
	return (
		<div className='card w-full  bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100'>
			<figure className='relative overflow-hidden'>
				<div className='absolute top-3 right-3 z-10'>
					<span className='badge badge-primary rounded-full px-3 py-2 text-white font-medium text-sm'>
						${product.price.toLocaleString()} COP
					</span>
				</div>
				<img
					src={product.image}
					alt={product.name}
					className='w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300'
				/>
			</figure>
			<div className='card-body p-5'>
				<h2 className='card-title text-lg font-bold text-gray-800'>{product.name}</h2>
				<p className='text-gray-600 text-sm my-3 line-clamp-2'>{product.description}</p>
				<div className='flex items-center justify-between mt-4'>
					<span
						className={`px-3 py-1 rounded-full text-xs font-medium ${
							product.stock > 5 ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
						}`}>
						{product.stock > 5 ? "En stock" : `Quedan ${product.stock}`}
					</span>
					<button className='btn btn-primary btn-sm normal-case rounded-full px-4 flex items-center gap-2 hover:scale-105 transition-transform'>
						<FaShoppingCart className='text-sm' /> Comprar
					</button>
				</div>
			</div>
		</div>
	);
};

export { CardProduct };
