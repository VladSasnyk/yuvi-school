import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Price from "./components/Price/Price";
import Teachers from "./components/Teachers/Teachers";
import Lessons from "./components/Lessons/Lessons";
import Footer from "./components/Footer/Footer";
import Questions from "./components/Questions/Questions";


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
      </main>
      <Footer />
    </>
  )
}

export default App;