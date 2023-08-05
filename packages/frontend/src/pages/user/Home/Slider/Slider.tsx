import styled from 'styled-components';
import { Component } from 'react';
import color from '../../../../style/colors/index';
const ElemnetH1 = styled.h1`
  margin-bottom: 20px;
`;
const Button = styled.button`
  height: 70px;
  background-color: ${color.btn_color};
  width: 180px;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 22px;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${color.btn_color};
    background-color: ${color.text_color};
    scale: 1.05;
  }
`;
const Slider = () => {
  return (
    <div
      data-aos="fade-up"
      style={{
        padding: '60px',
        width: '500px',
        color: 'White',
        marginTop: '70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 auto',
        alignItems: 'flex-start',
        textAlign: 'left',
        // color: ${color.main_bg_color},
        // color: '#fde9c7',
      }}
    >
      <ElemnetH1>
        MeLy Để Me<span style={{ color: '#fda41d' }}>Code</span>
      </ElemnetH1>
      <ElemnetH1>
        MeCode Để <span style={{ color: '#fda41d' }}>Mely</span>
      </ElemnetH1>
      <div style={{ color: 'white' }}>
        <h5
          style={{
            width: '450px',
            fontWeight: 'lighter',
            fontSize: '20px',
          }}
        >
          Code MeLy là dự án cộng đồng với sứ mệnh chia sẻ, kết nối những thành
          viên trong cộng đồng IT lại với nhau. Tham gia để cùng học tập, phát
          triển và chia sẻ cùng MeLy nhé!
        </h5>
      </div>
      <div
        style={{
          margin: '20px auto',

          height: 'auto',
          width: '100%',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Button>Bắt đầu vào</Button>
      </div>
    </div>
  );
};

export default Slider;
