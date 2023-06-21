import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";
import copy from 'copy-to-clipboard';

import mintLiveDownArrow from "../../../../assets/images/nft/mint_live_down_arrow.svg";
import mintLiveText from "../../../../assets/images/nft/mint_live_text.png";
import copyImg from "../../../../assets/images/icon/copy.png";
import green from "../../../../assets/images/icon/green.png";
import homeImageBG from "../../../../assets/images/nft/home_img_bg.png";
import { useEffect, useState } from "react";

const Banner = () => {

  const [showNotification, setShowNotification] = useState(false);
  const [copied, setCopied] = useState(false);
  const [address] = useState('0x165CbA89C40AD62BA1a1A55901FDa176Faeb0ef8');


  const handleCopyClick = () => {
    copy(address);
    setCopied(true);
    setShowNotification(true);
  };
  
  useEffect(() => {
    let timer;
    if (showNotification) {
      timer = setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showNotification]);
  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="bithu_v1_baner_left">
            <center>
  <h2>decentralized AI technology, featuring an adorable and charming Little Dog theme</h2>
</center>
              <div className="banner_buttons">
              {
              <a href="https://pancakeswap.finance/swap?outputCurrency=0x165CbA89C40AD62BA1a1A55901FDa176Faeb0ef8&inputCurrency=0x55d398326f99059fF775485246999027B3197955" target="_blank" rel="noreferrer"><Button className="zoom-and-button" lg variant="mint">Buy LidoToken</Button></a>
                }
                  <a href="Litepaper.pdf" target="_blank" rel="noreferrer"><Button className="zoom-and-button2" lg variant="mint">Litepaper</Button></a>
              </div>
              <div className="adress-wrap">
                <div className="adress-left">
                  <div
                    id="link-to-copy"
                    value={address}
                    className="adress-txt"
                  >
                    {address}
                  </div>
                  <div className="adress-hider"></div>
                </div>
                <div className="adress-right">
                <button lg variant="mint" onClick={handleCopyClick}>
      {copied ? (
        <img src={green} aria-label="Copied" />
      ) : (
        <img src={copyImg} alt="" />
      )}
    </button>
    {showNotification && (
      <div className="copy-notification">
        <span>Copied!</span>
        <button onClick={() => setShowNotification(false)}>Close</button>
      </div>
    )}
            </div>
          </div>
          </div>
          </div>
          <div className="col-lg-6">
            <div className="bithu_v1_baner_right">
              <div className="bithu_v1_baner_right_img_sect">
                <div className="mint_live_circle_sect">
                  <div className="mint_live_circle zoom-and-move">
                    <span>
                      <img src={mintLiveDownArrow} alt="" />
                    </span>
                    <span className="mint_live_text rotated-style">
                      <img src={mintLiveText} alt="" />
                    </span>
                  </div>
                </div>
                <div className="bithu_v1_baner_right_img_bg zoom-and-move">
                <a href="https://forms.gle/SnUQeZ6bjY4y8in48" target="_blank" rel="noreferrer">
                  <img src={homeImageBG} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
