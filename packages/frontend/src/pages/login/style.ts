import styled from 'styled-components';
import color from '../../style/colors/index';
const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${color.main_bg_color};

  .container {
    border-radius: 5px;
    width: 30em;
    background-color: ${color.gray};
    padding: 1em 5em;
    .form-header {
      text-align: center;
      color: ${color.light_orange};
      font-weight: bold;
      margin: 1em 0;
    }
    .container-logo {
      display: flex;
      width: 100%;
      margin-top: 1em;
      .logo {
        height: auto;
        margin: 0 auto;
      }
    }
    .login-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .input {
        width: 20em;
      }
      .btn {
        height: auto;
        margin: -50%;
        width: 5em;
      }
    }
    .login-authentication {
      display: flex;
      justify-content: center;
      align-items: center;
      .btn {
        margin: 1em;
      }
    }
    .btn {
      background-color: ${color.btn_color};
    }
  }
`;
export default Style;
