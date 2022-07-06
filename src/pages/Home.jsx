import About from '../components/About';
// import Contact from '../components/Contact';

import Header from '../components/Header';
import Projects from '../components/Projects';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div>
			<Nav />
			<Header />
			<About />
			<Projects />
			{/* <Contact /> */}
			<Footer />
		</div>
	);
};

export default Home;
