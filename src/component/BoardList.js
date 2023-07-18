import React from 'react';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


function BoardList() {
    const [dataList, setDataList] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8081/api/board/')
            .then((response) => response.json())
            .then((data) => setDataList(data));
    }, []);


    return (
        <div className="App">
            <h1>Board</h1>
            <Link to={"/board/"}>게시판 생성</Link>
            <hr/>

            {
                dataList?.map((data) => (
                    <div key={data.id}>
                        <Link to={`/board/${data.id}`}>Title: {data.title}</Link>
                        <div>Game Title: {data.gameTitle}</div>
                        <div>Date: {data.date}</div>
                        <br/>
                    </div>

                ))
            }
        </div>
    );

}

export default BoardList;
