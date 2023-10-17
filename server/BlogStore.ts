///////////////////////////////////툴킷 써보자////////////////////////////////////



// import { createStore } from 'redux';


// export const ADD_BLOG:string = 'ADD_BLOG';
// export const DEL_BLOG:string = 'DEL_BLOG';
// export const EDIT_BLOG:string = 'EDIT_BLOG';

// interface Title {
//     id : number;
//     title : string; 
//   }

// interface ACTION {
//     type: string;
//     data: Title;

// }
// //추후에 블로그 내용도 추가

// const reducer = (state:Title[], action:ACTION) => {
//     switch (action.type) {
//         case ADD_BLOG:
//             console.log('add에서 받은 블로그 데이터', action.data);
//             return [...state, action.data];
//         case DEL_BLOG:
//             console.log('del에서 받은 블로그 데이터', action.data);
//             return state.filter((state)=> state.id !== action.data.id);//액션에서 아이디 받아오면 수정
//         case EDIT_BLOG: 
//             console.log('edit에서 받은 블로그 데이터==data');
//             //데이터와 id값은 1차이 id-1로 원하는 객체를 찾아서 값 수정

//             const newState:Title[] = [...state];
//             newState[0].title = action.data.title;


//             return Array.prototype.push.apply(state, newState);

//         default:
//             return state;
//     }
// }

// const store = createStore(reducer);

// export default store;