import '../src/asset/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "./App.css";
import '../src/asset/js/main.js'
import Header from "./components/Header/Header";
import Copyright from './components/Footer/Copyright';
import Footer from './components/Footer/Footer';
import AboutUs from './components/About/AboutUs';
import OurServices from './components/OurServices/OurServices';
import OurFeatures from './components/OurFeatures/OurFeatures';
import FAQs from './components/FAQs/FAQs';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AboutUs /> */}
      {/* <OurServices /> */}
      {/* <OurFeatures /> */}
      {/* <FAQs /> */}
      {/* <Footer /> */}
      {/* <Copyright /> */}
    </div>
  );
}

export default App;
