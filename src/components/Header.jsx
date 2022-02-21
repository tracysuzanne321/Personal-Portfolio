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
						I am a passionate software developer, proficient in React Js and the
						latest modern technologies.
					</p>

					<a href="#projects">My Projects</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
