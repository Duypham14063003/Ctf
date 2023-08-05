import images from '../../assets/images';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Style from './style';
import { AppRoutes } from '../../routes/AppRoutes';
import clsx from 'clsx';
const OFFSET_SECTION = -100;
const DURATION_SECTION = 100;
const HEIGHT_SCROLL = 80;

interface NavLinkOptions {
  icon?: JSX.Element;
  onClick?: () => void;
}

const Header = () => {
  const navigate = useNavigate();
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > HEIGHT_SCROLL) {
        setHasScrolled(true);
      } else setHasScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const headerClassName = clsx(
    'header d-flex flex-wrap justify-content-between',
    /*eslint no-useless-computed-key: "Off"*/ {
      ['is-scrolled']: hasScrolled,
    }
  );
  return (
    <Style>
      <div className={headerClassName}>
        <div className="header__logo" onClick={() => navigate(AppRoutes.HOME)}>
          <img src={images.logo} alt="logo"></img>
        </div>
      </div>
    </Style>
  );
};

export default Header;
