import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from "./components/Header";


function App() {
  return (
    <div className='app'>
      <Header />
      <CollectionCard id={0} 
      name={'Bandana Punk'} 
      traits={[{'value': 7}]} 
      image="https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=w600"
      />
    </div>
  );
}

export default App;
