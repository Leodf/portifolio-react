import './App.css';
import About from './components/about/About';
import Header from './components/header/Header'
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonial from './components/testimonials/Testimonial';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Testimonial />
      <Contact />
    </main>
    </>
  )
}


export default App;
