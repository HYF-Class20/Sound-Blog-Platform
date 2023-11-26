import Category from '../Component/Category/Category';
import axios from "axios";
import { useState, useEffect } from "react";

const App = ()=>{
     const [records, setRecords] = useState([]);
     const [tracks, setTracks] = useState([]);
     const [track, setTrack] = useState(null);
   
     const fetchRecords = async () => {
       try {
         const response = await axios.get("http://localhost:5010/audio");
         const data = response.data.result;
   
         setRecords(data);
         setTracks([...data]);
       } catch (error) {
         console.error("Error fetching records:", error);
         return;
       }
     };
   
     useEffect(() => {
       fetchRecords();
     }, []);
     return (
      <>
      <Category records={records} setTracks={setTracks} />
      
      </>
     )
}

export default App;