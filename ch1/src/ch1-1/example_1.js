import {Component, useState} from "react";
import {render} from "react-dom";

// const Counter =()=>{
//
//     const [num,setNum]= useState(0);
//
//     const plus=()=>{
//
//         setNum(num+1);
//     }
//
//     const minus=()=>{
//         setNum(num-1);
//     }
//
//
//     return(
//         <main>
//
//
//             <h1>{num}</h1>
//             <button onClick={plus}>+</button>
//             <button onClick={minus}>-</button>
//         </main>
//     )
//
// }


class Counter extends  Component{


    constructor(props) {
        super(props);


        // 상태 state는 무조건 객체
        this.state={
            num : 0,
        };
        // bind 처리 코드
        // this.plus = this.plus.bind(this);
    }


    // 상태를 변경하기 위한 메서드
    // => ( 화살표 함수)로 해야 이벤트로 연결할때 this가 안끊김
    // =>  안하게되면 bind처리를 해줘야함
    plus=()=>{
        this.setState({
            num : this.state.num +1,
        });
    }

    minus=()=>{
        this.setState({
            num : this.state.num -1,
        });
    }


    render(){
        return(
            <main>


                <h1>{this.state.num}</h1>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
            </main>
        )
    }

}


export default Counter;