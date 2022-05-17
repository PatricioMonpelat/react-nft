import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Punklist from "./components/Punklist";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyfNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xC77612e038dB505203b282574639bDB72a028482&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    getMyfNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {/* <CollectionCard id={0} 
      name={'Bandana Punk'} 
      traits={[{'value': 7}]} 
      image="https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=w600"
      /> */}
      <Main/>
      <Punklist punkListData={punkListData} />
    </div>
  );
}

export default App;
