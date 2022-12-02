import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './footer.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="container-social-media">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <h5>© 2022 cinema app - all rights reserved.</h5>
    </div>
  );
};
