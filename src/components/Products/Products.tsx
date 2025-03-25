import { useEffect, useState } from "react";
import { getProducts } from "../../services/product.service";
import { Product } from "../../interfaces/product.interface";
import { CardProduct } from "../CardProduct/CardProducto";
import LoadingSkeletonProduct from "../LoadingSkeletonProduct/LoadingSkeletonProduct";
import { useSearch } from "../../stores/useSearch";
import notFound from "../../assets/notFound.svg";
const Products = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const { search } = useSearch();
	interface ProductResponse {
		products: {
			totalPages: number;
			currentPage: number;
			rows: Product[];
		};
	}

	useEffect(() => {
		setLoading(true);
		getProducts(page, limit, search).then((response) => {
			setLoading(false);
			const typedResponse = response as ProductResponse;
			setTotalPages(typedResponse.products.totalPages);
			setCurrentPage(typedResponse.products.currentPage);
			setProducts(typedResponse.products.rows);
		});
	}, [limit, page, search]);
	return (
		<div className='container mx-auto p-8'>
			<h1 className='text-3xl font-bold mb-6 text-center'>Products</h1>

			<div className='flex justify-end mb-4'>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text mr-2'>Items per page:</span>
					</label>
					<select
						name='limit'
						id='limit'
						className='select select-bordered select-sm'
						value={limit}
						onChange={(e) => setLimit(Number(e.target.value))}>
						<option value='5'>5</option>
						<option value='10'>10</option>
						<option value='15'>15</option>
						<option value='20'>20</option>
					</select>
				</div>
			</div>
			<section className='w-full px-4'>
				{loading ? (
					<LoadingSkeletonProduct />
				) : (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
						{products?.length > 0 ? (
							products.map((product: Product) => (
								<CardProduct
									key={product.id}
									id={product.id}
									name={product.name}
									price={product.price}
									description={product.description}
									image={product.image}
									category={product.category}
									stock={product.stock}
								/>
							))
						) : (
							<div className='col-span-full text-center py-10'>
								<img src={notFound} alt='not found' className='w-1/2 mx-auto' />
								<p className='text-gray-500'>No products found</p>
							</div>
						)}
					</div>
				)}
			</section>

			<div className='flex justify-center items-center mt-10'>
				<div>
					<nav className='isolate inline-flex -space-x-px rounded-md shadow-sm' aria-label='Pagination'>
						<button
							onClick={() => setPage(page - 1)}
							disabled={page === 1}
							className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold ${
								page === 1 ? "bg-gray-100 text-gray-400" : "bg-white text-gray-500 hover:bg-gray-50"
							}`}
							aria-label='Previous page'>
							<span className='sr-only'>Previous</span>
							<svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
								<path
									fillRule='evenodd'
									d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
						<div className='relative inline-flex items-center px-4 py-2 text-sm font-semibold  text-black'>
							{currentPage} / {totalPages}
						</div>
						<button
							onClick={() => setPage(page + 1)}
							disabled={page >= totalPages}
							className={`relative inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold ${
								page >= totalPages ? "bg-gray-100 text-gray-400" : "bg-white text-gray-500 hover:bg-gray-50"
							}`}
							aria-label='Next page'>
							<span className='sr-only'>Next</span>
							<svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
								<path
									fillRule='evenodd'
									d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</nav>
				</div>
			</div>
		</div>
	);
};
export default Products;
