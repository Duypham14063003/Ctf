import styled from 'styled-components';
import color from '../../../../style/colors';

const Spmain = styled.div`
  height: 250px;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: ${color.btn_color};
  text-transform: uppercase;
  font-weight: bold;
`;
const Img = styled.img`
  height: 150px;
`;
const Sponsors = () => {
  return (
    <div data-aos="zoom-in">
      <Spmain>
        <Title>Nhà tài trợ</Title>
        <div className="contents">
          <Img
            src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/297860965_151881860830465_4559452935398184631_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=KLeaurO4ql0AX-9TU6u&_nc_ht=scontent.fdad3-1.fna&oh=00_AfAdd_Uy9Uw1nCqfjphNUQEbsc9WraiZ5L9kR2tC8f-Fhw&oe=6454F7F4"
            alt="codemely"
          />
        </div>
      </Spmain>
    </div>
  );
};

export default Sponsors;
