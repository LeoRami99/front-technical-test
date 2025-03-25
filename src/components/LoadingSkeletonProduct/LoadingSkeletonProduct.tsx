const LoadingSkeletonProduct = () => {
	const numberSkeleton = Array.from({ length: 10 }, (_, i) => i);
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
			{numberSkeleton.map((_item: number) => (
				<div className='flex w-full flex-col gap-4' key={_item}>
					<div className='skeleton h-32 w-full'></div>
					<div className='skeleton h-4 w-28'></div>
					<div className='skeleton h-4 w-full'></div>
					<div className='skeleton h-4 w-full'></div>
				</div>
			))}
		</div>
	);
};
export default LoadingSkeletonProduct;
