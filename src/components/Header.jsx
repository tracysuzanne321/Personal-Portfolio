import profileImage from '../images/profile.svg';

const Header = () => {
	return (
		<header className="flex justify-between items-center flex-col text-center sm:max-w-xl lg:py-0 max-w-xs mx-auto rounded-md sm:pt-10">
			<h1 className="text-4xl font-bold  max-w-sm  md:max-w-md lg:max-w-full lg:mt-20">
				Junior Full Stack Software Developer
			</h1>
			<h2 className="text-md font-thin  py-2 lg:text-2xl">
				&#123; I don't see colours anymore, only{' '}
				<span className="text-pink-600">#hex codes </span>&#125;
			</h2>
			<img className="w-48 mt-8 sm:w-60 md:w-72" src={profileImage} alt="" />
		</header>
	);
};

export default Header;
