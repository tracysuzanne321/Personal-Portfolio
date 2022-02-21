import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<div>
				<h3>Contact</h3>
				<a className="contact-button" href="mailto:tracysmith32@live.co.uk">
					Email Me
				</a>
				<a
					href="https://github.com/tracysuzanne321"
					target="_blank"
					rel="noreferrer">
					<img src={github} alt="GitHub Logo" />
				</a>
				<a
					href="https://www.linkedin.com/in/tracysuzanne32/"
					target="_blank"
					rel="noreferrer">
					<img src={linkedin} alt="Linkedin Logo" />
				</a>
			</div>
		</section>
	);
};

export default Contact;
