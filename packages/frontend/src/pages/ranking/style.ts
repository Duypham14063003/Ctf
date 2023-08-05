import styled from 'styled-components';
import color from 'packages/frontend/src/style/colors';
import images from 'packages/frontend/src/assets/images';

export const StyledProfile = styled.div`
  height: 100%;
  background-color: ${color.black_blue_color};

  border: 1px solid gray;
  border-top: none;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  .container-img {
    width: 40%;
    height: 40%;
    div {
      position: relative;
      height: 80%;
      width: 100%;
      border: 3px solid ${color.btn_color};
      border-radius: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      .country {
        position: absolute;
        border: 3px solid rgb(253, 164, 29);
        border-radius: 50%;
        width: 40%;
        right: 0;
        bottom: -3px;
      }
    }
  }
  .name {
    width: 80%;
    overflow: hidden;
    text-align: center;
  }
  .div-left {
    border-right: 1px solid ${color.btn_color};
  }
  .div-right {
    border-left: 1px solid ${color.btn_color};
  }
  .profile-info {
    padding: 0 1em;
    .number {
      color: ${color.text_color};
      font-size: 20px;
      margin: 0;
    }
    .text {
      color: ${color.text_color};
      font-size: 14px;
    }
  }
`;
const Style = styled.div`
  background-image: linear-gradient(
    125deg,
    ${color.main_bg_color},
    /* ${color.gray}, */ /* ${color.btn_color} */
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container-profile {
    display: flex;
    align-items: self-end;
    margin: 2em 0;
    .top-1 {
      border-top: 5px solid gold;
      border-radius: 5px;
      width: 15em;
      height: 20em;
      margin: 0 1em;
    }
    .top-2 {
      border-top: 5px solid silver;
      border-radius: 5px;

      margin: 0 1em;
      width: 12em;
      height: 16em;
      margin: 0 1em;
    }
    .top-3 {
      border-top: 5px solid brown;
      border-radius: 5px;
      width: 12em;
      height: 16em;
      margin: 0 1em;
    }
  }
  .container {
    width: 80%;
    min-width: 50em;
  }
`;
export default Style;
