import socialCard from '../images/social-card.svg';
import myMusic from '../images/my-music.svg';
import Cats from '../images/cats4lyf.svg';
import Codenation from '../images/codenation.svg';

const Projects = () => {
	return (
		<div id="projects" className="container-two">
			<div className="flex flex-col py-5 text-center">
				<div className="text-xl font-bold py-4">My Recent Work</div>
				<div className="text-sm font-light py-4">
					Here are a few projects that I have worked on recently. Want to see
					more?{' '}
					<span>
						<a
							href="mailto:tracysmith32@live.co.uk"
							className="text-pink-500 underline">
							Email me
						</a>
					</span>
				</div>
			</div>

			<div class="flex flex-col  space-y-5 sm:flex-row sm:flex-wrap">
				<div className="image flex w-10/12 mx-auto sm:w-2/5  text-center justify-center items-start">
					<div className="project-btn absolute text-white z-50 mt-20 px-4">
						A full MERN stack social media application. Users can create a
						virtual business card and share a unique URL.
					</div>
					<a
						className="project-btn absolute text-white z-50 py-2 px-4 border-pink-400 border rounded-full self-end mb-20 hover:bg-pink-400 transition duration-300 "
						href="https://socialcard-uk.netlify.app/"
						target="_blank"
						rel="noreferrer">
						Visit Website {'>'}
					</a>
					<img
						className="rounded-lg"
						src={socialCard}
						alt="Social Card Website"
					/>
				</div>
				<div className="image flex w-10/12 sm:w-2/5  mx-auto  text-center justify-center items-start">
					<div className="project-btn absolute text-white z-50 mt-20 px-4">
						A full MERN stack application that utilises a music API to demo
						music and save music to favourites.
					</div>
					<a
						className="project-btn absolute text-white z-50 py-2 px-4 border-pink-400 border rounded-full self-end mb-20 hover:bg-pink-400 transition duration-300 "
						href="https://mymusic-uk.netlify.app/"
						target="_blank"
						rel="noreferrer">
						Visit Website {'>'}
					</a>
					<img className="rounded-lg" src={myMusic} alt="My Music Website" />
				</div>

				<div className="image flex w-10/12 sm:w-2/5  mx-auto  text-center justify-center items-start">
					<div className="project-btn absolute text-white z-50 mt-20 px-4">
						An ecommerce front end React JS application for selling cats.
					</div>
					<a
						className="project-btn absolute text-white z-50 py-2 px-4 border-pink-400 border rounded-full self-end mb-20 hover:bg-pink-400 transition duration-300"
						href="https://cats4lyf20.netlify.app/"
						target="_blank"
						rel="noreferrer">
						Visit Website {'>'}
					</a>
					<img className="rounded-lg" src={Cats} alt="Cats 4 Lyf Website" />
				</div>

				<div className="image flex w-10/12 sm:w-2/5  mx-auto  text-center justify-center items-start">
					<div className="project-btn absolute text-white z-50 mt-20 px-4">
						A front-end application for storing master bootcamp resources,
						reference apps and timetables.
					</div>
					<a
						className="project-btn absolute text-white z-50 py-2 px-4 border-pink-400 border rounded-full self-end hover:bg-pink-400 transition duration-300 mb-20 "
						href="https://cn-instructor.netlify.app/"
						target="_blank"
						rel="noreferrer">
						Visit Website {'>'}
					</a>
					<img
						className="rounded-lg"
						src={Codenation}
						alt="Codenation resources"
					/>
				</div>
			</div>
			<div className="flex justify-center my-10 ">
				<a
					className="py-2 px-10  text-pink-400 rounded-full border border-pink-400 	 hover:text-white hover:bg-pink-400 transition ease-in-out duration-300"
					href="https://github.com/tracysuzanne321"
					target="_blank"
					rel="noreferrer">
					See more on GitHub
				</a>
			</div>
		</div>
	);
};

export default Projects;
