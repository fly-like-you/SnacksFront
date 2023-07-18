import React from 'react';

function BoardCreation() {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const gameTitle = e.target.gameTitle.value;
        const date = e.target.date.value;
        const notice = e.target.notice.value;
        fetch("http://localhost:8081/api/board/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                gameTitle,
                date,
                notice
            })
        })
    };

    return (
        <form onSubmit={onSubmitHandler}>
            방 제목<input name={'title'} type="text"/>
            게임 제목<input name={'gameTitle'} type="text"/>
            날자<input name={"date"} type="date"/>
            세부내용<input name={"notice"} type="text"/>
            <input type="submit"/>

        </form>
    );
}
export default BoardCreation;
