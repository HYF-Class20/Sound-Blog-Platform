import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Category from '../Component/Category/Category';
import './App.css'
function App(){
    return <div className="main-container">

        <NavigationBar></NavigationBar>
        <Category />
    </div>
}
export default App
