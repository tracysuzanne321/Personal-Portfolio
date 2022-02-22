const About = () => {
	return (
		<>
			<section id="about" class="about">
				<div>
					<h3>About Me</h3>

					<p>
						My name is Tracy and I have been designing websites since 2015. I
						recently graduated from Codenation Bootcamp where I was able to
						further my knowledge and skills in both front-end and back-end
						technologies.
					</p>
					<p>
						During the Bootcamp I was introduced to React JS which is my new
						found passion and I have developed several full stack React Apps and
						have utilised many third party libraries within them.
					</p>
					<p>
						I enjoy keeping up to date with all the latest modern technologies
						and do so regularly in my spare time.
					</p>

					<a href="http://">
						<img src="./images/linkedin.png" alt="" />
					</a>
					<a href="http://">
						<img src="./images/github.png" alt="" />
					</a>
				</div>
			</section>
			<div className="lang-info">
				<h4>Front End Proficiencies</h4>
				<section className="lang-li">
					<ul>
						<li># HTML</li>
						<li># JAVASCRIPT</li>
						<li># CSS</li>
						<li># React JS</li>
						<li># Tailwind CSS</li>
					</ul>
				</section>
			</div>
		</>
	);
};

export default About;
