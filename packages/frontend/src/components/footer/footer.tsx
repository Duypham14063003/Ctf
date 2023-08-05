import { SocialLink } from '../../constant';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import { RxDiscordLogo } from 'react-icons/rx';
import { useNavigate } from 'react-router';
import Style from './style';
export default function Footer() {
  const navigate = useNavigate();

  return (
    <Style id="footer">
      <div className="container d-flex flex-column justify-content-center">
        <div className="title text-center">CODE MELY</div>
        <div className="sub-title text-center">
          Kết nối cộng đồng IT trong mọi miền tổ quốc
        </div>
        <div className="social d-flex justify-content-center">
          <a
            href={SocialLink.FACEBOOK_MELY}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiFacebook />
          </a>
          <a
            href={SocialLink.DISCORD}
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <RxDiscordLogo />
          </a>
          <a
            href={SocialLink.FACEBOOK_MELY}
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <AiOutlineInstagram />
          </a>
        </div>
      </div>{' '}
      <div className="copy-right">Code Mely © 2023 - All rights reserved.</div>
    </Style>
  );
}
