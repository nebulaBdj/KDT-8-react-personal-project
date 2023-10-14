import React, { useState } from 'react';


function App() {

  const [title, setTitle] = useState<string[]>(["남자코트 추천", "강남 우동 맛집", "파이썬독학"]);
  const [num, setNum] = useState<number>(0);

  const like = () => {
    setNum(num + 1);
  }

  const edit = () => {
    let copyTitle = [...title];
    copyTitle[0] = '여성코트 추천'
    setTitle(copyTitle);
  }

  const order = () => {
    let titlecopy = [...title];

    titlecopy.sort((a,b)=> {
      if(a<b) return -1;
      if(a>b) return 1; // 오름차순 정렬
      return 0;
    });

    setTitle(titlecopy);

  }

  return (
    <div>
      <div>
        <h1>ReactBlog</h1>
      </div>
      <button onClick={edit}>글수정</button>
      <button onClick={order}>가나다순 정렬</button>
      <div>
        <h4>{title[0]} <span onClick={like}>👍</span> {num} </h4>
        <p>10월 14일 발행</p>
      </div>
      <div>
        <h4>{title[1]}</h4>
        <p>10월 14일 발행</p>
      </div>
      <div>
        <h4>{title[2]}</h4>
        <p>10월 14일 발행</p>
      </div>
    </div>
  );
}

export default App;
