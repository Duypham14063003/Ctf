import Content from './Content';
import styled from 'styled-components';

const Contentmain = styled.div`
  margin: 0 3%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const Contents = () => {
  return (
    <div
      style={{
        // borderTop: 'solid 1px #ccc',
        marginTop: '50px',
        minHeight: '100vh',
        marginBottom: '50px',
      }}
    >
      <h1
        data-aos="fade-up"
        style={{
          color: '#FDA41D',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          margin: '40px auto',
          fontWeight: '900',
          textTransform: 'uppercase',
        }}
      >
        Các cuộc thi lập trình
      </h1>
      <Contentmain>
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </Contentmain>
    </div>
  );
};
export default Contents;
