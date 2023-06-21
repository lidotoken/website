import SectionTitle from "../../../../common/sectionTitle";

import AboutInfoCardList from "../aboutInfoCardList";

import data from "../../../../assets/data/about/aboutv1";
import AboutStyleWrapper from "./About.style";

const About = () => {
  const { aboutDescription1, aboutDescription2 } = data;
  return (
    <AboutStyleWrapper id="about">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-md-6">
            <div className="v1_about_us_right_sect move-right">
              <center><SectionTitle title="INTRODUCTION"/></center>
              <div className="v1_about_us_right_text move-right">
              <center><p>{aboutDescription1}</p>
                <p>{aboutDescription2}</p></center>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="v1_about_us_left_sect sm-mt-60">
              <div className="v1_about_us_img_card v1_about_us_img_card1 move-right">
              </div>
              <div className="v1_about_us_img_card v1_about_us_img_card2 move-right">
                  </div>
                </div>
              </div>
          </div>
        {/* about card  */}
        <AboutInfoCardList />
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
