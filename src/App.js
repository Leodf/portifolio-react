import './App.css';
import About from './components/about/About';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Work from './components/work/Work'

const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Work />
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
    </>
  )
}


export default App;
