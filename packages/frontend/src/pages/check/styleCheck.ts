import styled from 'styled-components';
import color from '../../style/colors';

const Style = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .textarea {
    /* position: relative; */
    resize: none;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 15px 15px;
    transition: all 0.5s ease-in-out;
    margin-bottom: 15px;
    &:is(:hover, :focus) {
      box-shadow: ${color.btn_color} 0px 0px 0px 2px;
    }
  }

  .suggest {
    cursor: pointer;
    position: absolute;
    border: none;
    color: ${color.btn_color};
    background: none;
    padding: 5px 10px;
    /* border-radius: 50%; */
    right: 5px;
    bottom: 75px;
    font-size: 25px;
    transition: all 0.5s ease-in-out;
    &:hover {
      scale: 1.1;
    }
  }

  .suggest:is(:hover, :active) + .list-suggest {
    visibility: visible;
    opacity: 1;
  }

  .list-suggest {
    visibility: hidden;
    color: white;
    position: absolute;
    right: -15%;
    top: 15%;
    opacity: 0;
    transition: visibility 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }
`;
export default Style;
