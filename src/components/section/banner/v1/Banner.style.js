import styled, { keyframes } from "styled-components";
import sectionBgImage from "../../../../assets/images/bg/h1_banner_bg.jpg";
import sectionBgImageMobile from "../../../../assets/images/bg/h1_banner_bg_mobile.png";

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const BannerV1Wrapper = styled.section`
  background: url(${sectionBgImage});
  min-height: 950px;
  width: 100%;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  padding-top: 192px;

  .bithu_v1_baner_left {
    margin-top: 180px;
    width: 100%;
    min-height: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

    h2 {
      transition: transform 0.3s ease;
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 35px;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 32px;
    }

    h2:hover {
      transform: translateX(20px) scale(1.1);
    }

    h3 {
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 60px;
      text-transform: uppercase;
      color: #ffffff;
    }

    .banner_buttons {
      display: flex;
      column-gap: 30px;
      margin-left: 100px;
      margin-top: 20px;
    }

    @media (max-width: 480px) {
      .banner_buttons {
        display: flex;
        margin-left: 1px;
      }
    }

    .coin-info {
      display: flex;
      flex-direction: column;
      margin-top: 37px;
      span {
        font-family: "Bakbak One";
        font-size: 18px;
        line-height: 36px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.8);

        & .highlighted {
          color: #ffe600;
        }
      }
    }
  }

  @media (max-width: 720px) {
    background: url(${sectionBgImageMobile});
    background-size: contain;
    margin-bottom: 50px;
    background-position: center;
  }

  .adress-txt{
    color: #fff;
  }
  
  .adress-wrap {
    margin-top: 30px;
    margin-left: 95px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    border-radius: 16px;
    background-color: #18171f;

    /* Media query for smaller screens (e.g., mobile devices) */
    @media (max-width: 768px) {
      margin-left: 0px; /* Adjust the font size for smaller screens */
      max-width: 370px;
    }

    img {
      height: 28px;
      width: 25px;
    }

    button {
      border: none;
      background-color: transparent;
      /* Add any other custom styles for the button */
    }
}

  .adress-left {
    position: relative;
    overflow: hidden;
    max-width: 388px;
}

.adress--txt {
    color: #fff;
}

.adress-hider {
    position: absolute;
    left: auto;
    top: 0%;
    right: 0%;
    bottom: 0%;
    width: 50%;
    background-image: -webkit-gradient(linear, right top, left top, color-stop(22%, #18171f), to(rgba(24, 23, 31, 0)));
    background-image: linear-gradient(270deg, #18171f 22%, rgba(24, 23, 31, 0));
}

.adress-right {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }

  .address-wrapper {
    margin-top: 50px;
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 5px 10px;
    margin-left: 55px;

    /* Media query for smaller screens (e.g., mobile devices) */
    @media (max-width: 768px) {
      margin-left: 0px; /* Adjust the font size for smaller screens */
    }
  }

  .address-label {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 5px 10px;
    background-color: #f1f1f1;
    border-radius: 5px;
    display: flex;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 18px; /* Default font size */
    border: 2px solid #6c757d; /* Border color */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Shadow properties */
  
    /* Media query for smaller screens (e.g., mobile devices) */
    @media (max-width: 768px) {
      font-weight: bold;
      font-size: 12px; /* Adjust the font size for smaller screens */
    }
  }
  
  .address-label::after {
    content: '';
    display: block;
    width: 5px;
    height: 2px;
    margin-left: 1px;
  }

  .copy-notification {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    color: #333;
    font-size: 12px;
  }

  .address-label button {
    margin-left: 10px;
    border: none;
    /* Add any other custom styles for the button */
  }

  .address-label img {
    height: 25px;
    width: 25px;
    /* Add any other custom styles for the button */
  }

  .copy-notification {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f1f1f1;
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    color: #333;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  
  .copy-notification span {
    margin-right: 10px;
  }
  
  .copy-notification button {
    border: none;
    background: none;
    color: #333;
    font-size: 12px;
    cursor: pointer;
  }


  .zoom-and-button {
    transition: transform 0.3s ease;
  }

  .zoom-and-button:hover {
    transform: translateX(10px) scale(1.1);
  }

  .zoom-and-button2 {
    transition: transform 0.3s ease;
  }

  .zoom-and-button2:hover {
    transform: translateX(-10px) scale(1.1);
  }

  .bithu_v1_baner_right {
    max-width: 400px;
    width: 100%;
    margin-left: auto;
    margin-top: 66px;

    .mint_live_circle_sect {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 140px;
      width: 140px;
      border-radius: 50%;
      border: none;
      position: absolute;
      top: -65px;
      left: -65px;
      z-index: 1;

      .mint_live_circle {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        .mint_live_text {
          animation: ${rotate} 20s linear infinite;
          position: absolute;
        }
      }
    }

    .bithu_v1_baner_right_img_sect {
      position: relative;
      width: 100%;
      height: 550px;
      display: flex;
      align-items: center;
      justify-content: center;

      .bithu_v1_baner_right_img_bg {
        position: absolute;
        top: 0px;
        left: -25px;
        width: 100%;
        height: 100%;
        z-index: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .bithu_v1_baner_right_img {
        position: relative;
        z-index: 1;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .bithu_v1_baner_left {
      h2 {
        font-size: 50px;
        line-height: 65px;
      }

      h3 {
        font-size: 34px;
        line-height: 38px;
      }

      .baner_buttons {
        margin-top: 40px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .bithu_v1_baner_left {
      margin-top: 0px;
      justify-content: flex-start;
    }

    .bithu_v1_baner_right {
      margin: 70px auto;
      padding: 0px 68px;
      max-width: 568px;
      width: 100%;

      .bithu_v1_baner_right_img {
        width: 55%;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .bithu_v1_baner_left {
      h2 {
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 28px;
        line-height: 38px;
        
      }

      .banner_buttons{
        margin-top: 25px;
        margin-left: 5px;
      }
    }

    .bithu_v1_baner_right {
      padding-right: 0px;

      .bithu_v1_baner_right_img_sect {
        height: 480px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .bithu_v1_baner_left {
      h2 {
        font-size: 20px;
      }

      h3 {
        font-size: 22px;
      }

      .coin-info {
        font-size: 14px;
        line-height: 29px;
      }

      .banner_buttons{
            flex-direction: between-space;
            justify-content: flex-start;
            align-items: flex-start;
        
            .bithu-btn + .bithu-btn {
                margin-top: 20px;
            }
        }
    }

    .bithu_v1_baner_right {
      padding-left: 34px;

      .mint_live_circle_sect{
        height: 90px;
        width: 90px;
        top: -36px;
        left: -47px;
    }
    }
  }

  @media (max-width: 375px) {
    .bithu_v1_baner_left {
      h2 {
        font-size: 35px;
      }
      h3 {
        font-size: 22px;
      }
    }
  }

  @media (max-width: 360px) {
    .bithu_v1_baner_left {
      .coin-info {
        font-size: 13px;
      }
    }
  }
`;

export default BannerV1Wrapper;
