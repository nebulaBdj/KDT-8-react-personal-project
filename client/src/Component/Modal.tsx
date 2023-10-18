import { Dispatch, SetStateAction } from 'react'
import '../css/Modal.css'

interface Title {
    id : number;
    title : string;
  }
//부모 컴포넌트에서 사용하는 Title 타입을 여기서도 사용할려면 만들어줘야한다.

interface PROPS{
    title: Title[];
    id : number; 
    setTitle:Dispatch<SetStateAction<Title[]>>;
    name : string;
    setName:Dispatch<SetStateAction<string>>
    children: React.ReactNode;
}
export default function Modal({title, id, setTitle, name, setName, children} : PROPS) {//그냥 props로 받아도 되고 구조분해할당 사용해도된다.

    const change = () => {
        let copy:Title[] = [...title];
        copy[id-1].title = "넌 바뀌었다."
        setTitle(copy);
    }   

    return (<>
    <div className='modal'>
        
        {/* props로 받아서 이용하는 법 */}
        {/* <p>{name}</p>
        <p>{props.title.map((val, valindex)=> {
            return <p key={valindex}> {val} </p>
        })}</p> */}

        {/* 구조 분해 할당 이용한 사용법 */}
        {/* <p>{name}</p>
        <p>{title.map((val, valindex)=> {
            return <p key={valindex}> {val} </p>
        })}</p>
        <p>{children}</p>
        <button onClick={cha}>이름 바꾸기</button> */}

        {/* 버튼을 클릭할때 id를 보내주기 위해서 객체를 가진 배열로 바꿔서 만듦 */}
        <h4>제목 : {title[id-1].title}</h4>
        <p>날짜 : 10월 14일 발행</p>
        <p>상세 내용</p>
        <button onClick={change}>글 수정</button>
    </div>
    </>)
}