import About from '../components/About';
import Contact from '../components/Contact';
import Feature from '../components/Feature';
import Header from '../components/Header';
import Projects from '../components/Projects';

const Home = () => {
	return (
		<div>
			<Feature />
			<Header />
			<About />
			<Projects />
			<Contact />
		</div>
	);
};

export default Home;
