import CTA from "../../cta/v1";

import { footerLinksV1 } from "../../../../assets/data/insiteLinks";
import footerLogo from "../../../../assets/images/logo.png";
import backToTopIcon from "../../../../assets/images/icon/back_to_top.svg";
import twitter from "../../../../assets/images/icon/twitter.png";
import telegram from "../../../../assets/images/icon/telegram.png";
import github from "../../../../assets/images/icon/github.png";

import characterShapePC from "../../../../assets/images/nft/3_chr_img.png";
import characterShapeMobile from "../../../../assets/images/nft/3_chr_img.png";

import FooterStyleWrapper from "./Footer.style";
const Footer = () => {
  return (
    <FooterStyleWrapper>
      <CTA />

      <div className="bithu_v1_main_footer">
        <div className="bithu_v1_main_footer_overlay">
        <div className="three_charectre_img">
            <img
              src={characterShapePC}
              alt="bithu nft character"
              className="character_shape_pc"
            />
            <img
              src={characterShapeMobile}
              alt="bithu nft character"
              className="character_shape_mobile"
            />
            <div className="social-menu">
            <a href="https://twitter.com/Lido_Token">
            <img src={twitter} alt="icon" />
          </a>
          <a href="https://t.me/lido_token">
            <img src={telegram} alt="icon" />
          </a>
          <a href="https://github.com/lidotoken" target="_blank" rel="noreferrer">
            <img src={github} alt="icon" />
          </a>
          </div>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="footer_bottom_content">
            <div className="container">
              <div className="footer_menu">
                <div className="bottom_footer_left">
                  <div className="footer_logo">
                    <a href="/">
                      <img src={footerLogo} alt="bithu nft logo" />
                    </a>
                  </div>
                  <div className="copiright_text">
                    <p>Little Doge © 2023</p>
                  </div>
                </div>
                <a href="# " className="bact_to_top_btn">
                  <img src={backToTopIcon} alt="bithu nft back to top" />
                </a>
                <div className="bottom_footer_right">
                  <ul>
                    {footerLinksV1?.map((item, i) => (
                      <li key={i}>
                        <a href={item.url}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default Footer;
