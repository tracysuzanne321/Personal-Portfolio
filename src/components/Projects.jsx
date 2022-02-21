import socialCard from '../images/Social Card.png';
import myMusic from '../images/My Music.png';
import Magic from '../images/Magic match.png';
import cats from '../images/catsforlyf.png';

const Projects = () => {
	return (
		<div className="container-two">
			<div className="projects-h3">
				<h3>My Projects</h3>
			</div>
			<div class="projects">
				<article>
					<h4>Social Card</h4>
					<a
						href="https://socialcard-uk.netlify.app/"
						target="_blank"
						rel="noreferrer">
						<img src={socialCard} alt="Social Card Website" />
					</a>
				</article>
				<article>
					<h4>My Music</h4>
					<a
						href="https://mymusic-uk.netlify.app/"
						target="_blank"
						rel="noreferrer">
						<img src={myMusic} alt="My Music Website" />
					</a>
				</article>
				<article>
					<h4>Memory Game</h4>
					<a
						href="https://memory-game321.netlify.app"
						target="_blank"
						rel="noreferrer">
						<img src={Magic} alt="Magic Memory Game Website" />
					</a>
				</article>
				<article>
					<h4>Cats 4 Lyf</h4>
					<a
						href="https://tracysuzanne321.github.io/cats4lyf/"
						target="_blank"
						rel="noreferrer">
						<img src={cats} alt="Cats for Life Website" />
					</a>
				</article>
			</div>
		</div>
	);
};

export default Projects;
