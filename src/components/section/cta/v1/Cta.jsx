import SectionTitle from "../../../../common/sectionTitle";

import twitter from "../../../../assets/images/icon/twitter.png";
import telegram from "../../../../assets/images/icon/telegram.png";
import medium from "../../../../assets/images/icon/medium.png";
import particleShape1 from "../../../../assets/images/icon/star_1.svg";
import particleShape2 from "../../../../assets/images/icon/star_2.svg";
import particleShape3 from "../../../../assets/images/icon/star_3.svg";
import particleShape4 from "../../../../assets/images/icon/star_4.svg";
import particleShape5 from "../../../../assets/images/icon/star_5.svg";
import particleShape6 from "../../../../assets/images/icon/star_6.svg";
import particleShape7 from "../../../../assets/images/icon/star_7.svg";

import CTAStyleWrapper from "./Cta.style";

const CTA = () => {
  const particleShapes = [
    particleShape6,
    particleShape3,
    particleShape1,
    particleShape7,
    particleShape4,
    particleShape2,
    particleShape5,
  ];
  return (
    <CTAStyleWrapper id="disclaimer">
      <div className="container">
        <SectionTitle
          className="bithu_title_section text-center"
          title="Disclaimer"
        ></SectionTitle>
        <center><p>All cryptocurrency asset trading involves high risks, so all users and investors must equip themselves before investing to avoid any actions that will harm themselves. We are not responsible for any losses in any form from actions that have occurred in the past or will occur in the future. This article is not an invitation to invest or engage in buying and selling activities of Lido tokens. It is created for educational and enlightening purposes to convey our vision and mission, and not a recommendation to conduct any transaction or investment advice. Any decision to conduct a transaction for investment or trading purposes is an individual decision. We are not responsible for any profits or losses that may occur as a result of such decisions. The information obtained and compiled by us does not guarantee the accuracy or completeness of the information implied or stated in this article. We are not responsible for any errors caused by this information. Investing in Lido tokens carries very high risks because past and current performance will not guarantee future performance. Investors are required to read and understand all risks beforehand. When you decide to contribute, you agree that under any circumstances, or in connection with all profits and losses, general or legal obligations, negligence, or other claims regarding contracts, patents, or legal rights, we will not be responsible for any losses that may occur from the use of Lido tokens or any information, goods, or services obtained, including direct, indirect, consequential, incidental, or compensatory damages, and others. By joining the Lido community, you agree to the policies contained therein.</p></center>
        <div className="bithu_v1_cta_content">
          <div className="join_comunity_btns">
          </div>
          <div className="cta_social_links">
          </div>
          <div className="footer_stras_sect">
            <div className="footer_stars">
              {particleShapes?.map((shape, i) => (
                <span key={i} className={`star_${i + 1}`}>
                  <img src={shape} alt="bithu nft background particle" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA;
