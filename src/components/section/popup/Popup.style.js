import styled from "styled-components";
import modalBg from "../../../assets/images/nft/popup.png";

const PopupStyledWrapper = styled.section`
  .popup-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .popup-wrapper p {
    background: transparent;
    color: white;
    border: none;
    outline: none;
    font-size: 30px;
    height: 45px;
    width: 45px;
    position: absolute;
    left: 100px;
    display: flex;
    bottom: 750px;
    overflow: hidden;
    align-items: baseline;
    border-radius: 15px;
  }

  .claim-button {
    display: flex;
    justify-content: center;
    margin-top: 440px;
    margin-right: 150px;
  }

  .popup-image {
    position: relative;
  }

  .popup-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .popup {
    background: url(${modalBg});
    width: 50.45rem;
    height: 50.45rem;
    background-repeat: no-repeat;
    background-size: 500px 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 111;
    cursor: pointer;
    margin-top: 175px;

    a {
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: inherit;
    }
  }

  @media (max-width: 768px) {
    .popup {
      width: 320px;
      height: 320px;
      max-width: none;
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
    }
  }

  @media (max-width: 768px) {
    .popup-wrapper p {
      background: transparent;
      color: white;
      border: none;
      outline: none;
      font-size: 30px;
      height: 45px;
      width: 45px;
      position: absolute;
      left: -75px;
      display: flex;
      top: -165px;
      overflow: hidden;
      align-items: baseline;
      border-radius: 15px;
    }
  }

  @media (min-width: 768px) {
    .popup {
      width: 100%;
      max-width: 600px;
    }
  }
`;

export default PopupStyledWrapper;
