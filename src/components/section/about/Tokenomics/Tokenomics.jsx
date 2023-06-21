import SectionTitle from "../../../../common/sectionTitle";

import data from "../../../../assets/data/about/tokenomics";
import aboutThumb1 from "../../../../assets/images/nft/Tokenomics.png";
import TokenomicsStyleWrapper from "./Tokenomics.style";

const Tokenomics = () => {
  const { aboutDescription1, aboutDescription2, aboutDescription3, aboutDescription4, aboutDescription5 } = data;
  return (
    <TokenomicsStyleWrapper id="about">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-md-6">
            <div className="v1_about_us_right_sect move-right">
            <center><SectionTitle title="Tokenomic"/></center>
              <div className="v1_about_us_right_text move-right">
              <center><p>{aboutDescription1}</p>
                <p>{aboutDescription2}</p>
                <p>{aboutDescription3}</p>
                <p>{aboutDescription4}</p>
                <p>{aboutDescription5}</p></center>
              </div>
            </div>
          </div>
          <div className="col-md-6">
                <div className="v1_about_us_img v1_about_us_img1 zoom-and-move">
                  <img src={aboutThumb1} alt="img" />
                </div>
              </div>
            </div>
        </div>
    </TokenomicsStyleWrapper>
  );
};

export default Tokenomics;
