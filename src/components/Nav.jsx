const Nav = () => {
	return (
		<div className="  py-8 lg:fixed lg:bg-white lg:w-full lg:top-0 lg:overflow-hidden lg:z-50  ">
			<div className="flex justify-end lg:justify-between items-center max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
				<div className="hidden lg:block">
					<ul className="flex space-x-16 font-bold">
						<li className="nav-list-items">
							<a href="#about">About</a>
						</li>
						<li className="nav-list-items">
							<a href="#experience">Experience</a>
						</li>
						<li className="nav-list-items">
							<a href="#projects">Projects</a>
						</li>
						<li className="nav-list-items">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
				<a
					className="py-3 px-4 mt-5 sm:mt-0 bg-pink-400 text-white rounded-full border border-pink-400 hover:bg-white hover:text-pink-400 transition duration-300"
					href="https://github.com/tracysuzanne321"
					target="_blank"
					rel="noreferrer">
					View my GitHub Profile
				</a>
			</div>
		</div>
	);
};

export default Nav;
