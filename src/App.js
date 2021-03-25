import { useEffect, useState } from 'react';
import TextBox from './components/textBox';
import * as text from './config/texts';
import styled from 'styled-components';

const App = () => {
  const [lastLoginTxt, setLastLoginTxt] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isEnter, setIsEnter] = useState(false);

  useEffect((e) => {
    // 첫 진입 혹은 새로고침 후의 시간을 lastLoginTxt로 저장
    setLastLoginTxt(text.lastLoginTxt);
  }, []);

  // 입력창에서 엔터를 누를 때 실행
  const isEnterTrue = (e) => {
    e.preventDefault();
    setInputValue(inputValue.trim());
    setIsEnter(true);
  };

  // textBox에서 실행하는 함수, input 창을 초기화 시킴
  const isEnterFalse = () => {
    setIsEnter(false);
    setInputValue('');
  };

  return (
    <Main htmlFor="inputCommand">
      {lastLoginTxt}
      <TextBox
        inputValue={inputValue}
        isEnter={isEnter}
        isEnterFalse={isEnterFalse}
      />
      <FormArea onSubmit={isEnterTrue}>
        <span>molju@molju-ui-MacBookPro ~ %</span>
        <InputSpan>{inputValue}</InputSpan>
        <InputCursor />
        <HideInput
          id="inputCommand"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoComplete="off"
        ></HideInput>
      </FormArea>
    </Main>
  );
};

const Main = styled.label`
  display: block;
  width: 100vw;
  height: 100vh;
  color: white;
  font-size: 11px;
  letter-spacing: 0.5px;
  z-index: 10;
`;
const FormArea = styled.form`
  display: flex;
  align-items: center;
`;
/* 더 좋은 방법이 있는지 생각하자 -> input창 가리기 */
const HideInput = styled.input`
  opacity: 0;
  z-index: 1;
`;
/* 더 좋은 방법이 있는지 생각하자 -> 자식에게 상속하기 */
const InputSpan = styled.span`
  display: inline-block;
  margin-left: 8px;
`;

const InputCursor = styled.div`
  display: inline-block;
  width: 5px;
  height: 15px;
  background-color: white;
`;

export default App;
