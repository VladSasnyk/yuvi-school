import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Price from "./components/Price/Price";
import Teachers from "./components/Teachers/Teachers";
import Lessons from "./components/Lessons/Lessons";
// import Rules from "./components/Rules/Rules";
import Footer from "./components/Footer/Footer";
import Questions from "./components/Questions/Questions";
// import bg1 from './assets/about/bg1.jpg'


function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Price />
        <Teachers />
        <Lessons />
        <Questions/>
        {/* <Rules /> */}
      </main>
      <Footer />
    </>
  )
}

export default App;