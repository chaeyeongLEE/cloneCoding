import Button from "./layout/Button";
import {useEffect, useState} from "react";

function Hello() {
    useEffect(() => {
        console.log('hi!!!');
        return () => console.log('bye');
    }, []);
    return <h1>hello</h1>;
}

function App() {
  const [number, setNumber] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [showing, setShowing] = useState(false);

  const onClick = ()=>setNumber((prev)=>prev + 1);
  const isClick = () => {
      setShowing((prev)=> !prev);
  }
  const onChange = (event)=> {
      setKeyword(event.target.value);
      console.log('value', event.target.value);
  }
    console.log('항상 실행됨');
    useEffect(() => {
        // 실행될 함수(Api를 받아오는 등!)
        console.log('한번만 실행됨');
    }, []);

    useEffect(()=>{
        //실행될 함수
        if(keyword.length>5 && keyword !== '') {
            console.log('검색창 내 값이 변경되었습니다.');
        }
    }, [keyword]);

  function isCalculate(activate) {
    switch (activate) {
        case 'plus':
            setNumber(number+1)
            break;
        case 'minus':
            setNumber(number-1)
            break;
        default :
            console.log('덧셈 또는 뺄셈');
            break;
    }
  }

  return (
      <div>
          {showing ? <Hello />: null}
          <button onClick={isClick}>{showing ? "Hide" : "Show"}</button>
        <h3>숫자 : {number}</h3>
        <input type="text" placeholder="검색내용을 입력해주세요." value={keyword} onChange={onChange} />
        <br />
        <Button text="증가하기" isClick={()=> isCalculate('plus')}></Button>
        <Button text="감소하기" isClick={()=> isCalculate('minus')}></Button>
          <button onClick={onClick}>Click me!</button>
      </div>
  );
}

export default App;
