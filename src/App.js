import BoardList from "./component/BoardList";
import {Routes, Route} from "react-router-dom";
import NotFound from "./component/NotFound";
import BoardCreation from "./component/BoardCreation";
import React from "react";
import Board from "./component/Board";

function App() {

    return (
        <Routes>
            <Route path="/" element={<BoardList/>}/>
            <Route path="/board/" element={<BoardCreation/>}></Route>
            <Route path='/board/:id' element={<Board />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );

}

export default App;


