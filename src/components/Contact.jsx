import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

const Contact = () => {
	return (
		<section className="contact">
			<div>
				<h3>Contact Me</h3>
				<a href="https://github.com/tracysuzanne321">
					<img src={github} alt="GitHub Logo" />
				</a>
				<a href="https://www.linkedin.com/in/tracysuzanne32/">
					<img src={linkedin} alt="Linkedin Logo" />
				</a>
			</div>
		</section>
	);
};

export default Contact;
