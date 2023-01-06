import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Profile from './Components/Profile';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Portfolio</h1>
      <Profile />
      <Footer />
    </div>
  );
}

