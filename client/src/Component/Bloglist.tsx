import { useState } from 'react';


import '../css/App.css'

import Modal from './Modal';

interface Title {
    id : number;
    title : string; 
  }

  export default function Blogmain() {
   
    const [title, setTitle] = useState<Title[]>([
        { 
          id : 1,
          title : "남자코트 추천"
        },
        { 
          id: 2, 
          title : "강남 우동 맛집"
        }, 
        {
          id: 3, 
          title :"파이썬독학"
        },
      ]);
      const [num, setNum1] = useState<number>(0);
      const [name, setName] = useState<string>('내이름');
    
      const like = () => {
        setNum1(num + 1);
      }
    
      const edit = () => {
        let copyTitle:Title[] = [...title];
        copyTitle[0].title = '여성코트 추천'
        setTitle(copyTitle);
      }
    
      const order = () => {
        let titlecopy:Title[] = [...title];
    
        titlecopy.sort(); 
    
        // titlecopy.sort((a,b)=> { // 정렬 할려면 sort 함수를 이용해 정렬할 수 있다. 
        //   if(a<b) return -1;
        //   if(a>b) return 1; // 오름차순 정렬
        //   return 0;
        // });
    
        setTitle(titlecopy);
    
      }
    
      const [modal_control, setControl] = useState<boolean>(false); 
      const [modal_id, setId] = useState<number>(0); 
    
      const bloging = (id:number) => {
        if(modal_control === false) {
          setControl(true);
          setId(id);
        }else{
          setControl(false);
        }
      }

      return (<>
        <div className='Nav'>
        <div className='title'>
          <h1>ReactBlog</h1>
          
        </div>

        <h3 id='blogT' style={{margin: '45px 0 10px 0'}}>블로그 상세 내용</h3>
        {modal_control && <Modal title = {title} id = {modal_id} setTitle={setTitle} name={name} setName={setName}>조금만 더 힘내자</Modal> }
        {/* === modal_control ? <Modal /> : null 혹은 '' */}

        {/* <button onClick={edit}>글수정</button> */}
        {/* <button onClick={bloging}>블로그 작성하기</button> */}
        {/* <button onClick={order}>가나다순 정렬</button> */}

        <h3 id='blogT'>블로그 리스트</h3>



        </div>
        
        {title.map((val) => {
        return<div className='text_App'>
          <h4 key={val.id} onClick={()=>bloging(val.id)}>{val.title}<span onClick={like}>👍</span> {num} </h4>
          <p>10월 14일 발행</p>
        </div>
        })}

      </>)

  }