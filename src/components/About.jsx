import heroImage from '../images/hero.svg';
import codingLogo from '../images/coding-icon.svg';
import lectureLogo from '../images/lecture-icon.svg';

const About = () => {
	return (
		<>
			<section id="about">
				<div>
					<img
						className=" mx-auto mt-4 md:h-80 "
						src={heroImage}
						alt=""
						srcset=""
					/>
					<div className="bg-pink-400 flex flex-col space-y-5 text-center pt-16 pb-48 ">
						<h3 className="text-2xl font-bold text-white">
							Hi, I'm Tracy. Nice to meet you.
						</h3>
						<p className="max-w-xs mx-auto text-sm text-white font-light sm:max-w-xl md:max-w-2xl lg:max-w-4xl ">
							I have been designing and developing websites as a hobby since
							2015. In July 2021, during the lockdown, I decided to make a
							change and follow my passion. I registered for a coding boot camp
							to update my knowledge and handed in my notice as a customer
							service manager.
						</p>
						<p className="max-w-xs mx-auto text-sm text-white font-light sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
							During the Bootcamp, I was introduced to React JS, which is my new
							found passion, and I have developed several full-stack React Apps
							and have utilised many third-party libraries within them. During
							my twelve-week journey I created a full-stack music application as
							an individual task, and for the final group project, our amazing
							group created a social media full-stack application.
						</p>
						<p className="max-w-xs mx-auto text-sm text-white font-light sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
							I graduated from Codenation Bootcamp and was subsequently offered
							a role as an Innovation Developer and quickly progressed to a
							Software Instructor. During my time at Codenation, besides
							teaching and updating resources, I created a front end application
							for the front end team to store and organise all of the teaching
							materials, resources and timetables. See my projects{' '}
							<span className="underline font-bold cursor-pointer">
								<a href="#projects">here</a>
							</span>
							.
						</p>
					</div>

					<div className=" main bg-white border  border-gray-300 rounded-md max-w-xs mx-auto flex flex-col md:flex-row justify-evenly py-10 text-center sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
						<div className="flex flex-col w-50%  ">
							<img
								className="w-10 h-10 mx-auto "
								src={codingLogo}
								alt=""
								srcset=""
							/>
							<div className="text-xl font-bold py-2.5">
								Junior Software Developer
							</div>
							<div className="text-md font-bold py-2.5 text-pink-500">
								Technical Stack
							</div>
							<div className="text-sm font-light ">
								JavaScript, React JS, HTMl 5, CSS 3
							</div>
							<div className="text-sm font-light ">
								TypeScript, SCSS 3, Tailwind CSS, Next JS
							</div>
							<div className="text-sm font-light ">
								Node JS, MongoDB, Mongoose, Express, TDD
							</div>
							<div className="text-md font-bold py-5 text-pink-500">
								Dev Tools
							</div>
							<div className="text-sm font-light ">
								Git, Bitbucket, VS Code Studio, Jest
							</div>
						</div>
						<hr className="my-5  border-1 border-gray-300 md:hidden "></hr>
						<div className="hidden md:block border-l border-0  border-gray-300">
							{''}
						</div>
						<div className="w-50%">
							<img
								className="w-10 h-10 mx-auto"
								src={lectureLogo}
								alt=""
								srcset=""
							/>
							<div className="text-xl font-bold py-2.5">
								Software Instructor
							</div>
							<div className="text-md font-bold py-2.5 text-pink-500">
								Technical Curriculum
							</div>
							<div className="text-sm font-light ">
								Fundamentals of JavaScript, HTML & CSS
							</div>
							<div className="text-sm font-light ">
								JavaScript DOM, Intermediate JavaScript
							</div>
							<div className="text-sm font-light ">
								Introduction to React JS, Intermediate React JS
							</div>
							<div className="text-md font-bold py-5 text-pink-500">
								Extra Curricular
							</div>
							<div className="text-sm font-light ">
								Mentored Agile Principles, Guided lightning talks
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
