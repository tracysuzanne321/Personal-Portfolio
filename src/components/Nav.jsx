const Nav = () => {
	return (
		<div className="flex items-center flex-col justify-between  py-5 sm:flex-row lg:mt-5 max-w-4xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
			<a
				className="py-3 px-4 bg-pink-400 text-white rounded-full border border-pink-400 hover:bg-white hover:text-pink-400 transition duration-300"
				href="https://github.com/tracysuzanne321"
				target="_blank"
				rel="noreferrer">
				View my GitHub Profile
			</a>
			<a
				className="py-3 px-4 mt-5 sm:mt-0 text-pink-400 rounded-full border border-pink-400 hover:bg-pink-400 hover:text-white transition duration-300"
				href="#contact">
				Say Hello
			</a>
		</div>
	);
};

export default Nav;
