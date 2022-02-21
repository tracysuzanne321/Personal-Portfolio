import profileImage from '../images/profile.jpeg';
import banner from '../images/background.png';

const Header = () => {
	return (
		<header class="header">
			<img class="banner-background" src={banner} alt="" />
			<div class="banner-info">
				<img src={profileImage} alt="" />
				<div class="banner-text">
					<h1>Tracy Smith</h1>
					<h2>Software Developer</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga magni
						illum labore natus? Repudiandae minus ipsum consequuntur! Minima
						dolore corporis ratione dolorum quas cumque amet exercitationem.
						Minima cum et autem.
					</p>

					<a href="/">My Projects</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
