import React from "react";
import {Routes, Route, BrowserRouter, Router} from "react-router-dom";
import HomePage from "./team/HomePage";
import Team from "./team/Team";
import Alan from "./alan/Alan";
import Jason from "./jason/Jason";
import Daniel from "./daniel/Daniel";
import Wasee from "./wasee/Wasee";
import William from "./william/William";

function App() {
    return (
                <Routes>
                    <Route path="/410web" element={<HomePage/>} />
                    <Route path="/410web/team" element={<Team/>} />
                    <Route path="/410web/william" element={<William/>} />
                    <Route path="/410web/daniel" element={<Daniel/>} />
                    <Route path="/410web/wasee" element={<Wasee/>} />
                    <Route path="/410web/jason" element={<Jason/>} />
                    <Route path="/410web/alan" element={<Alan/>} />
                </Routes>
    );
}

export default App;
