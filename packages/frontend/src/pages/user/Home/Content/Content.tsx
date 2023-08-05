import styled from 'styled-components';
import color from '../../../../style/colors';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FiCheckSquare } from 'react-icons/fi';
import { useState } from 'react';

const Cardmain = styled.div`
  /* border: solid 1px grey; */
  max-height: 110%;
  overflow: hidden;
  border-radius: 15px;
  background-color: #0a0d13;
  transition: all 0.5s ease-in-out;
  position: relative;
  &:hover {
    box-shadow: ${color.btn_color} 0px 0px 0px 1px;
    scale: 1.05;
  }
  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, 'sans-serif' !important;
`;

const H6 = styled.h6`
  font-size: 10px;
`;

const Img = styled.img`
  background-size: cover;
  width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  margin: 5px auto;
`;
const Imgcard = styled.div`
  display: grid;
`;
const Contentmain = styled.div`
  margin: 15px 8px;
`;

const Title = styled.div`
  /* border: 1px solid red; */
  color: ${color.btn_color};
  margin: 0 12px;
`;

const Status = styled.span`
  color: grey;
`;
const Bottomcard = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  margin: 3px auto;
`;
const Btn = styled.a`
  color: white;
  font-size: 20px;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${color.btn_color};
    scale: 1.2;
    /* position: absolute; */
    /* z-index: 1; */
  }
`;
const Id = styled.div`
  color: grey;
  border-bottom: solid 1px grey;
  margin-bottom: 10px;
`;

const Span = styled.span`
  margin-left: 6px;
  margin-top: 5px;
`;

const Content = () => {
  const [status, Setstatus] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <Cardmain>
        <Contentmain>
          <Title>
            <Id>#121</Id>
            <h4
              style={{
                fontWeight: 'bold',
              }}
            >
              What is web 3 development? 3 key web3 job types
            </h4>
            <h6 style={{ fontSize: '13px', color: 'grey' }}>
              Trạng thái: <Status> đang diễn ra</Status>
            </h6>
          </Title>
          <Imgcard>
            <Img
              src="https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/342329977_562003096112045_427510582757067440_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=WfZ-ytf8SToAX-QQF6O&_nc_ht=scontent.fdad3-3.fna&oh=00_AfDroAjTRGlPlewD2vRbDqLrThoHVN-1cRyeSzOVuD3zXA&oe=645980E8"
              alt="codemely"
            />
          </Imgcard>
          <Bottomcard>
            <Btn
              href="#dangky"
              className="dangky"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <FiCheckSquare />
              <Span>{isHover ? <H6>Đăng ký</H6> : <div></div>}</Span>
            </Btn>
            <Btn
              href="#chitiet"
              className="chitiet"
              onMouseEnter={() => setIsHover2(true)}
              onMouseLeave={() => setIsHover2(false)}
            >
              <FiMoreHorizontal />
              <Span>{isHover2 ? <H6>Chi tiết</H6> : <div></div>}</Span>
            </Btn>
          </Bottomcard>
        </Contentmain>
      </Cardmain>
    </div>
  );
};

export default Content;
