const Header = () => {
	return (
		<header className="bg-white shadow-sm border-b">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<h1 className="text-xl font-semibold text-gray-900">
							WA Biodiversity Audit II
						</h1>
					</div>
					<nav className="hidden md:flex space-x-8">
						<a
							href="#"
							className="text-gray-600 hover:text-gray-900"
						>
							Home
						</a>
						<a
							href="#regions"
							className="text-gray-600 hover:text-gray-900"
						>
							Regions
						</a>
						<a
							href="#assets"
							className="text-gray-600 hover:text-gray-900"
						>
							Assets
						</a>
						<a
							href="#tnm"
							className="text-gray-600 hover:text-gray-900"
						>
							Trends & Metrics
						</a>
						<a
							href="#about"
							className="text-gray-600 hover:text-gray-900"
						>
							About
						</a>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
