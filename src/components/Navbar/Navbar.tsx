import { useCallback, useEffect, useState } from "react";
import { useSearch } from "../../stores/useSearch";

const Navbar = () => {
	const { setSearch } = useSearch();
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

	const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setDebouncedSearchTerm(e.target.value);
	}, []);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setSearch(debouncedSearchTerm);
		}, 500);

		return () => clearTimeout(timerId);
	}, [debouncedSearchTerm, setSearch]);

	return (
		<div className='navbar bg-base-100  sticky top-0 z-50 px-4 md:px-8'>
			<div className='navbar-start'>
				<h1 className='text-xl font-bold text-primary'>Products Test</h1>
			</div>
			<div className='navbar-center w-full max-w-md'>
				<div className='input-group w-full'>
					<label className='input input-bordered focus-within:border-primary w-full flex items-center gap-2'>
						<svg className='h-5 w-5 opacity-70' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
							<g strokeLinejoin='round' strokeLinecap='round' strokeWidth='2' fill='none' stroke='currentColor'>
								<circle cx='11' cy='11' r='8'></circle>
								<path d='m21 21-4.3-4.3'></path>
							</g>
						</svg>
						<input type='search' className='grow outline-none bg-transparent' placeholder='Search products...' onChange={handleSearch} />
					</label>
				</div>
			</div>
			<div className='navbar-end'>
				<div className='dropdown dropdown-end'>
					<div tabIndex={0} role='button' className='btn btn-ghost btn-circle hover:bg-base-200'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h7' />
						</svg>
					</div>
					<ul tabIndex={0} className='menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-56 p-3 shadow-lg'>
						<li>
							<a className='hover:text-primary transition-colors'>Homepage</a>
						</li>
						<li>
							<a className='hover:text-primary transition-colors'>Portfolio</a>
						</li>
						<li>
							<a className='hover:text-primary transition-colors'>About</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
