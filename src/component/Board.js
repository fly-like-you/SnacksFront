import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";




function Board() {
    const [dataList, setDataList] = useState(null);
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        fetch(`http://localhost:8081/api/board/${id}`)
            .then((response) => response.json())
            .then((data) => setDataList(data));
    }, []);


    return (
        <div>
            <div>Title: {dataList?.title}</div>
            <div>Game Title: {dataList?.gameTitle}</div>
            <div>Date: {dataList?.date}</div>
            <div>Notice: {dataList?.notice}</div>
            <div>Max Count: {dataList?.maxCount}</div>
            <div>Members:</div>
            {renderMembers(dataList)}

        </div>
    );

}
const renderMembers = (dataList) => {
    return dataList?.members.map((member) => (
        <div key={member.id}>
            <div>Name: {member.name}</div>
            <div>Nickname: {member.nickname}</div>
            <div>Email: {member.email}</div>
        </div>
    ));
};
export default Board;
