import React from 'react';
import { useState, useEffect } from 'react';
import { notification } from 'antd';
import styled from 'styled-components';
import color from '../../style/colors/index';
// import Header from "../../components/header/Header";
import { LeftOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import Style from './styleCheck';

const Parents = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: ${color.btn_color};
  margin-bottom: 0px;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Button = styled.button`
  border: none;
  padding: 15px 30px;
  border-radius: 15px;
  background-color: ${color.btn_color};
  color: white;
  transition: all 0.5s ease-in-out;
  font-weight: bold;
  &:hover {
    background-color: ${color.text_color};
    color: ${color.btn_color};
    scale: 1.1;
  }
`;

const Input = styled.input`
  border: none;
  transition: all 0.5s ease-in-out;
  outline: none;
  border-radius: 15px;
  padding: 10px 20px;
  &:is(:hover, :focus) {
    box-shadow: ${color.btn_color} 0px 0px 0px 2px;
  }
`;

const Return = styled.a`
  color: ${color.light_orange};
  position: absolute;
  top: 5px;
  left: 12px;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${color.btn_color};
  }
`;

const Textarea = styled.textarea``;

const Content = styled.div`
  color: white;
  /* background-color: #fcf9f9f8; */
  border-radius: 10px;
  padding: 15px 15px;
`;

const List = styled.ul`
  visibility: hiddens;
  /* display: flex; */
  list-style: none;
  padding-left: 0;
`;
const ChildList = styled.li`
  background-color: ${color.btn_color};
  margin-bottom: 5px;
  padding: 5px 10px;
  margin-left: 25px;
  letter-spacing: 3px;
  border-radius: 15px;
`;

let i = 0;
const Check = () => {
  const [valueInput, SetValueInput] = useState('');
  const [status, SetStatus] = useState(false);
  const [suggest, SetSuggest] = useState(false);

  useEffect(() => {
    i++;
    // if(!localStorage.getItem('submit0')){
    //     i = 0;
    // }
    console.log(valueInput);
    localStorage.setItem('submit' + i, valueInput);
    // SetStorage(valueInput)
    SetValueInput(' ');
  }, [status]);

  const handleClick = () => {
    SetStatus(status ? false : true);
    SetValueInput('');
    notification.success({
      message: 'Gửi thành công',
    });
  };

  const oninput = () => {
    const value = document.querySelector('textarea')?.value;
    if (value) SetValueInput(value);
    console.log(valueInput);
  };
  return (
    <Style>
      <Return href="/">
        <span>
          <LeftOutlined />
        </span>{' '}
        Quay Lại
      </Return>

      <div style={{ marginTop: '35px' }}>
        <Title>Kiểm tra đáp án</Title>
        {/* <Suggest>Gợi ý</Suggest> */}
      </div>
      <Content>
        <Title style={{ color: 'white', fontSize: '15px' }}>Level 1: </Title>
      </Content>
      <Text>
        <Textarea
          className="textarea"
          rows={5}
          cols={70}
          maxLength={200}
          placeholder="Nhập kết quả"
          value={valueInput}
          onInput={() => oninput()}
        >
          {valueInput}
        </Textarea>

        <button
          className="suggest"
          onMouseEnter={() => {
            SetSuggest(true);
          }}
          onMouseLeave={() => {
            SetSuggest(false);
          }}
        >
          {' '}
          <QuestionCircleOutlined />{' '}
        </button>
        {/* {suggest ? (
          <div className="list-suggest">
            <List>
              <ChildList>A.ads</ChildList>
              <ChildList>B.asdá</ChildList>
              <ChildList>C.asád</ChildList>
            </List>
          </div>
        ) : (
          ''
        )} */}
        <div className="list-suggest">
          <List>
            <ChildList>A.aasd</ChildList>
            <ChildList>B.asda</ChildList>
            <ChildList>C.aasd</ChildList>
          </List>
        </div>

        <Button onClick={handleClick}>Submit</Button>
        {/* <div style={{
                    paddingTop:'15px'
                }}>
                    sdsd
                </div>
                <span style={{color:'white'}}></span> */}
      </Text>
    </Style>
  );
};
export default Check;
