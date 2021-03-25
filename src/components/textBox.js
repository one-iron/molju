import React, { useEffect, useState } from 'react';
import * as Commands from '../config/commands';
import * as text from '../config/texts';
import styled from 'styled-components';

const TextBox = ({ inputValue, isEnter, isEnterFalse }) => {
  const [allContents, setAllContents] = useState([]);
  const [commandList] = useState(['help', 'search', 'detail', 'jtb', 'news']);

  // App에서 받아온 isEnter가 변경되면 실행하는 함수
  useEffect(() => {
    if (isEnter) {
      //리셋을 입력하면 allcontents 초기화
      if (inputValue === 'reset' || inputValue === 'clear') {
        setAllContents([]);
        return isEnterFalse();
      }
      // inputValue 명령이 유효한지 확인하고 해당 응답값을 allcontents에 추가
      else {
        let inputInfo = checkInputValue();
        setAllContents([...allContents, inputInfo]);
        isEnterFalse();
      }
    }
  }, [isEnter]);

  // inputVaule 명령이 유효한지 판별하는 함수
  const checkInputValue = () => {
    let inputInfo = { text: '', error: '', res: '' };

    // filter를 이용하여 명령 값 확인
    let sliceInputValue = commandList.filter((command) => {
      return command === inputValue.slice(0, command.length);
    });

    // 명령이 유효하면 해당 명령의 함수를 실행
    if (sliceInputValue[0]) {
      let val = inputValue.replace(sliceInputValue[0], '');
      let result = Commands[`${sliceInputValue[0]}`](val);
      inputInfo.text = inputValue;
      inputInfo.error = false;
      inputInfo.res = result;
    }
    // 명령이 무효하면 에러 값 반환
    else {
      inputInfo.text = inputValue;
      inputInfo.error = true;
    }
    return inputInfo;
  };

  return (
    <TextBoxDiv>
      {allContents.map((obj, idx) => {
        return (
          <TextDiv key={idx}>
            <span>{text.headLineTxt}</span>
            <InputSpan>{obj.text}</InputSpan>
            {/* 유효하지 않은 명령어 실행시 */}
            {obj.error ? (
              <div>
                {text.errorTxt}
                {obj.text}
              </div>
            ) : (
              ''
            )}
            {/* 유효한 명령어 실행시 */}
            {!obj.error && (
              <ReturnTable>
                <tbody>
                  {!obj.error
                    ? obj.res.map((info, idx) => {
                        return (
                          <tr key={idx}>
                            <TableTitle>{info.message.title}</TableTitle>
                            <td>{info.message.tbody}</td>
                          </tr>
                        );
                      })
                    : ''}
                </tbody>
              </ReturnTable>
            )}
          </TextDiv>
        );
      })}
    </TextBoxDiv>
  );
};

const TextBoxDiv = styled.div`
  color: white;
`;

const TextDiv = styled.div`
  width: 100vw;
`;

const InputSpan = styled.span`
  display: inline-block;
  margin-left: 8px;
`;

const ReturnTable = styled.table`
  border: 1px solid white;
  margin: 5px 0 5px 0;
  padding: 5px 5px 5px 0;
  td {
    border-bottom: 1px solid white;
    padding: 5px;
  }
`;

const TableTitle = styled.td`
  border-right: 1px solid white;
`;

export default TextBox;
