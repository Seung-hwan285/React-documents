import React from "react";
import { Component } from "react";


class PostsForm extends Component {
    constructor(props){
      super(props);
      this.state={
        title:'',
        body:''
      };

      this.onChange =this.onChange.bind(this);
      this.onSubmit =this.onSubmit.bind(this);
    }

    onChange(e){
      this.setState({
        // 사용하는 이유 => 객체 속성을 업데이트하기 위해서 name 속성을 하나의 핸들러로 관리가 가능 
        [e.target.name]:e.target.value
      });
    }
        
    onSubmit(e){
      e.preventDefault();
      const post ={
        title:this.state.title,
        body:this.state.body
      }

  /* 전송방식은 post */
      fetch('https://jsonplaceholder.typicode.com/posts',{
        method :"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(post)
      })

      .then(res=>res.json())
      .then(data=>console.log(data));
    }

    render() {
      const {title,body} = this.state;
      const {onChange,onSubmit} = this;


      return (
        <div>
        <selection>
          <h1>React Rest API</h1>
          <form onSubmit={onSubmit}>
            <div>
              <label>title:</label>
              <input type="text" name="title" value={title} onChange={onChange}/>
            </div>
            <div>
              <label>body:</label>
              <input type="text" name="body" value={body} onChange={onSubmit}/>
            </div>
            <div><button type="submit"> Post</button></div>
          </form>
          </selection>
        </div>
      );
    }
  }

export default PostsForm;