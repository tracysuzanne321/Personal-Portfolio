import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Footer = () => {
	return (
		<div>
			<div className="bg-zinc-700 text-white flex justify-evenly py-10 max-w-lg mx-auto rounded-lg -mb-12 relative sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
				<div className="text-2xl font-bold">Get in Touch</div>
				<div>
					<a
						className="border-white border py-4 px-2 rounded-lg hover:bg-pink-400 hover:border-pink-400 transition duration-300"
						href="mailto:tracysmith32@live.co.uk">
						Email Me
					</a>
				</div>
			</div>
			<footer className=" bg-pink-400 text-center py-28 text-white flex justify-center space-x-5 items-end ">
				<IconContext.Provider value={{ className: 'react-icons' }}>
					<a
						href="https://github.com/tracysuzanne321"
						target="_blank"
						rel="noreferrer">
						<BsGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/tracysuzanne32/"
						target="_blank"
						rel="noreferrer">
						<BsLinkedin />
					</a>
				</IconContext.Provider>
			</footer>
		</div>
	);
};

export default Footer;
