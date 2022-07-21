# ch1

# 탄생 배경
![img.png](img.png)

이벤트 핸들러가 많아지게 된다면 그림과 같은 구조가 되고 복잡해지게 됩니다.
이러한 요소가 많을 수록 페이지의 실행 속도는 느려지게 되고 성능상에 좋지않는 영향을 끼치게 됩니다.

그래서 *Angular* , *vue* , 등 많은 프레임워크가 만들어졌는데 이 프레임워크들은 작동방식이 다르지만 공통된 특징이 있는데 , 특정 값이 바뀌면
DOM 속성이 바뀌도록 연결을 해줘서 업데이트 하는 작업을 간소화 해주는 방식으로 웹개발의 어려움을 해결해주었습니다.


# Virtual DOM
![img_2.png](img_2.png)
리액트는 DOM을 직접 건드리는 작업은 번거롭다 판단을 해서 규칙을 정하는 것이 아니라,
DOM을 전부 날리고 다시 새로 만들어서 보여주자는 발상으로 만들어지게 되었다.

하지만 이렇게 하다보면 매번 DOM을 새로 만들기 때문에 이슈가 발생하는데 이때 문제를 가상 DOM을 사용해서 업데이트가 필요한 부분만 가상 DOM으로 수정하고
가상 DOM이 원본 DOM의 복사본으로 업데이트 되는 방식입니다.



# Virtual DOM FLOW

1. React는 원본 DOM의 복사본인 가상 DOM을 생성합니다.
DOM의 각 노드는 요소를 나타냅니다.

2. 다음으로 요소 상태 업데이트가 있으면 복사본 DOM에서 새로운 가상 DOM이 생성됩니다.

3. `diffing 알고리즘`을 통해서 변화를 식별

4. 마지막으로 변화된 요소들을 찾으면 `Origin DOM`을 업데이트 합니다.


# 컴포넌트
- 리액트로 만들어진 앱을 이루는 최소한 단위

    => 리액트는 `여러 컴포넌트 조각`으로 되어 있음


- 레고 블럭이라고 생각하면 쉽습니다.


- 재사용성 용이

![img_3.png](img_3.png)




- 메뉴 컴포넌트 , 프로필 컴포넌트 , 검색 컴포넌트가 하나로 모여서 
하나의 `Web`이 완성이 됩니다.

![img_4.png](img_4.png)




# Class vs Functional 

## 차이점

|              Class              |           Functional            |
|:-------------------------------:|:-------------------------------:|
| React 요소를 반환하는 render()가 필요 `O` | React 요소를 반환하는 render() 필요 `X`  |
|      React 생명주기 메서드 사용 `O`      |     React 생명 주기 메서드 사용 `X`      |
|    Class 구성 요소 내에서 다른 구문이 필요    | 다른 구문이 필요하지않고 <br/>쉽게 상태 저장을 만듬 |


## Class Component


```js
class Counter extends  Component {


    constructor(props) {
        super(props);


        // 상태 state는 무조건 객체
        this.state = {
            num: 0,
        };
        // bind 처리 코드
        // this.plus = this.plus.bind(this);
    }
    
    
    render(){
        return(
            <div className="App">
                Hello
            </div>
        )
    }
}


```


## Functional Component

```js

const Counter =()=>{

    const [num,setNum]= useState(0);
    
    return(
        <div className="App">
            Hello
        </div> 
    )

}

```



# Render()

## Render (element , container , callback)

- Element : 랜더링 될 JSX 표현식
- container : 요소가 랜더링되는 컨테이너
- callback : 추가적인 콜백함수 


=> 전달한 컨테이너 노드를 제어합니다.
처음 호출 할때 기존의 DOM 요소를 교체하고 이후 호출은 React의 DOM diff 알고리즘을 사용해서 업데이트합니다.




### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


 