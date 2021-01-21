import Header from "./components/header/index";
import Contact from "./pages/contact-us";
import Home from "./pages/Home";
import Fasilites from "./pages/Facilities";
import Rooms from "./pages/rooms";
import { Route } from "react-router-dom"
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/fasilites" component={Fasilites} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
