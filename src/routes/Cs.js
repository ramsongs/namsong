import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Faq from "react-faq-component";
import { faqData } from "../db/faqData";
import {
  faPhoneAlt,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

export default function Cs() {
  return (
    <section className="cs">
      <article className="cs-top">
        <div className="cs-top__wrap">
          <div>
            <h2 className="cs-top__title">
              도움이 필요하신가요? 저는 안잡니다
            </h2>
            <p className="cs-top__time">
              평일 00:00 - 23:59<span className="separator">|</span>주말 00:00 -
              23:59
            </p>
          </div>
          <ul className="cs-contact">
            <li className="cs-contact__wrap">
              <div className="icon-container">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className="cs-contact__content">
                <p className="cs-contact__type">전화 상담</p>
                <p className="cs-contact__detail">010-1234-5678</p>
              </div>
            </li>
            <li className="cs-contact__wrap">
              <div className="icon-container">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="cs-contact__content">
                <p className="cs-contact__type">이메일 상담</p>
                <p className="cs-contact__detail">남성훈@gmail.com</p>
              </div>
            </li>
            <li className="cs-contact__wrap">
              <div className="icon-container">
                <FontAwesomeIcon icon={faComment} />
              </div>
              <div className="cs-contact__content">
                <p className="cs-contact__type">카카오톡 상담</p>
                <p className="cs-contact__detail">@namsongfood</p>
              </div>
            </li>
          </ul>
        </div>
      </article>
      <article className="faq">
        <Faq data={faqData} />
      </article>
    </section>
  );
}
