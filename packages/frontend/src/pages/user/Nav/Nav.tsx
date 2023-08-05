import React, { Component, useState } from 'react';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import color from '../../../style/colors';

const Topnav = styled.div`
  background-color: ${color.main_bg_color};
  overflow: hidden;
  top: 0px;
  right: 0px;
`;
const Logo = styled.img`
  float: left;
`;

const Nav = styled.a`
  float: right;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
`;
const Btnav = styled.button`
  font-size: 18px;
  color: #e1e1e1;
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;

  &:hover,
  &:focus {
    color: #fda41d;
  }

  &:focus::after,
  &:hover::after {
    width: 100%;
    left: 0%;
  }

  &::after {
    content: '';
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`;

const Header = () => {
  const [login, setLogin] = useState(true);
  return (
    <Topnav
      style={{
        padding: '0 70px',
        right: '0',
        left: '0',
        position: 'fixed',
        zIndex: '10',
      }}
    >
      <Logo
        src="https://codemely.tech/static/media/logo.a00a0a5d.svg"
        alt="logo"
      />
      <NavLink
        to={'/HOME'}
        className="active"
        //   Exact={true}
        style={{
          float: 'right',
          color: 'white',
          textAlign: 'center',
          padding: '14px 16px',
          textDecoration: 'none',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        {login === true ? (
          <Btnav className="btnheader">Đăng nhập</Btnav>
        ) : (
          <Btnav className="btnheader"></Btnav>
        )}
      </NavLink>

      <NavLink
        to={'/HOME'}
        className="active"
        //   Exact={true}
        style={{
          float: 'right',
          color: 'white',
          textAlign: 'center',
          padding: '14px 16px',
          textDecoration: 'none',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        <Btnav className="btnheader">Trang Chủ</Btnav>
      </NavLink>
      <NavLink
        to={'/ranking'}
        className="active"
        style={{
          float: 'right',
          color: 'white',
          textAlign: 'center',
          padding: '14px 16px',
          textDecoration: 'none',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        <Btnav className="btnheader">Xếp Hạng</Btnav>
      </NavLink>
    </Topnav>
  );
};

export default Header;
