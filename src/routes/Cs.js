import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Faq from "react-faq-component";
import {
  deliveryFaq,
  productFaq,
  returnAndRefundFaq,
  defaultStyles,
} from "../db/faqData";
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
            <h2 className="cs-top__title">도움이 필요하신가요?</h2>
            <p className="cs-top__time">
              평일 09:00 ~ 18:00<span className="separator">|</span>주말, 공휴일
              휴무
            </p>
          </div>
          <ul className="cs-contact">
            <li className="cs-contact__wrap">
              <a href="tel:010-5024-6461">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div className="cs-contact__content">
                  <p className="cs-contact__type">전화 상담</p>
                  <p className="cs-contact__detail">010-5024-6461</p>
                </div>
              </a>
            </li>
            <li className="cs-contact__wrap">
              <a href="mailto:namsf17@naver.com">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="cs-contact__content">
                  <p className="cs-contact__type">이메일 상담</p>
                  <p className="cs-contact__detail">namsf17@naver.com</p>
                </div>
              </a>
            </li>
            <li className="cs-contact__wrap">
              <a href="https://www.naver.com" target="_blank" rel="noreferrer">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faComment} />
                </div>
                <div className="cs-contact__content">
                  <p className="cs-contact__type">카카오톡 상담</p>
                  <p className="cs-contact__detail">@namsongfood</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </article>
      <article className="faq inner">
        <h2 className="faq__title">FAQ</h2>
        <Faq data={deliveryFaq} styles={defaultStyles} />
        <Faq data={productFaq} styles={defaultStyles} />
        <Faq data={returnAndRefundFaq} styles={defaultStyles} />
      </article>
    </section>
  );
}
