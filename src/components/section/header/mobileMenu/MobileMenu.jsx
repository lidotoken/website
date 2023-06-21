import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import logo from "../../../../assets/images/logo.png";
import MobileMenuStyleWrapper from "./MobileMenu.style";

const MobileMenu = ({ mobileMenuhandle }) => {
  const [isSubmenu, setSubmenu] = useState(false);

  const handleSubmenu = () => {
    setSubmenu(!isSubmenu);
  };

  return (
    <MobileMenuStyleWrapper className="bithu_mobile_menu">
      <div className="bithu_mobile_menu_content">
        <div className="mobile_menu_logo">
          <img className="bithu_logo" src={logo} alt="bithu logo" />
          <button
            className="mobile_menu_close_btn"
            onClick={() => mobileMenuhandle()}
          >
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <div className="bithu_mobile_menu_list">
          <ul>
            <li className="mobile_menu_hide">
              <a href="#home">Home</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#about">About</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#roadmap">Roadmap</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#faq">FAQ</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#disclaimer">Disclaimer</a>
            </li>
          </ul>
        </div>
        <div className="mobile_menu_social_links">
        </div>
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
