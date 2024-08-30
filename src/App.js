import Header from './Components/Header/Header';
import Main_Restaurant from './Components/Main_Restaurant/Main_Restaurant';
import './App.css';
import Main_Invitation from './Components/Main_Invitation/Main_Invitation';
import Mini_Footer from './Components/Mini_Footer/Mini_Footer';
import Footer from './Components/Footer/Footer';

function App() {
   return (
      <div className="App">
         <Header />
         <Main_Invitation />
         <Main_Restaurant />
         <Footer />
         <Mini_Footer />
      </div>
   );
}

export default App;
