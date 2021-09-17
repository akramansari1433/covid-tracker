import React from "react";
import Cards from "./components/Cards/Cards";
import StatePicker from "./components/StatePicker/StatePicker";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Particles from "react-particles-js";
import axios from "axios";
import "./App.css";

const particlesOptions = {
   particles: {
      number: {
         value: 100,
         density: {
            enable: true,
            value_area: 2000,
         },
      },
   },
};

function App() {
   const [data, setData] = useState([]);
   const [fetchedState, setFetchedState] = useState([]);
   const [selectedState, setSelectedState] = useState("Total");

   const getCovidData = async (state) => {
      try {
         const res = await axios.get("https://api.covid19india.org/data.json");
         const { statewise } = await res.json();
         const data = statewise.filter((data) => {
            if (data.state === state) {
               return setData(data);
            }
            return data.state === "Total";
         });
         console.log(data);
      } catch (err) {
         console.log(err);
      }
   };

   const statePicker = async () => {
      try {
         const res = await axios.get("https://api.covid19india.org/data.json");
         const { statewise } = await res.json();
         setFetchedState(statewise.map((data) => data.state));
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getCovidData(selectedState);
      statePicker();
   }, [selectedState]);

   const handleStateChange = async (state) => {
      setSelectedState(state);
   };

   return (
      <div>
         <Particles className="particles" params={particlesOptions} />
         <Header />
         <StatePicker
            states={fetchedState}
            handleStateChange={handleStateChange}
         />
         <Cards data={data} />
         <Footer />
      </div>
   );
}

export default App;
