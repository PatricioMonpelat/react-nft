import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
// import axios from "axios";
import Punklist from "./components/Punklist";
import Main from "./components/Main";
import PunkJson from './components/PunkJson.json';


function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  
  

  useEffect(() => {  
    const getMyfNfts = async () => {

      // AXIOS CALL

      // const openseaData = await axios.get(
      //   "https://testnets-api.opensea.io/assets?asset_contract_address=0xC77612e038dB505203b282574639bDB72a028482&order_direction=asc"
      // );
      // console.log(openseaData.data.assets);

      const openseaData = PunkJson;
      
      setPunkListData(openseaData.assets);
    };
    getMyfNfts()
  }, []);


  return (
    <div className="app">
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
            <Punklist setSelectedPunk={setSelectedPunk} punkListData={punkListData}  />
          </>
        )
      }
      
      
    </div>
  );
}

export default App;
