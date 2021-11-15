import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Order() {
  return (
    <section className="order">
      <ul className="how-to-order">
        <li className="order__step">
          <div className="step__container">
            <h3 className="order__title">
              Step 01: <span className="order__title--point">문자 주문</span>
            </h3>
            <p>
              <a href="tel:010-5024-6461">010-5024-6461</a>로 <br />
              성함, 연락처, 희망상품, 희망수량, 주소를 적어서 보내주세요.
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li className="order__step">
          <div className="step__container">
            <h3 className="order__title">
              Step 01:{" "}
              <span className="order__title--point">카카오톡 주문</span>
            </h3>
            <p>
              <a
                href="https://pf.kakao.com/_xdlHzb/chat"
                target="_blank"
                rel="noreferrer"
              >
                남송FS 카카오톡
              </a>
              으로 <br />
              성함, 연락처, 희망상품, 희망수량, 주소를 적어서 보내주세요.
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li className="order__step">
          <div className="step__container">
            <h3 className="order__title">
              Step 02:{" "}
              <span className="order__title--point">주문 대금 입금</span>
            </h3>
            <p>
              <span>신한은행 110-335-624426</span>
              으로 돈내놔
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li className="order__step">
          <div className="step__container">
            <h3 className="order__title">
              Step 03: <span className="order__title--point">입금확인</span>
            </h3>
            <p>
              <span>신한은행 110-335-624426</span>
              으로 한 번 더 보내면 2배 찬스
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li className="order__step">
          <div className="step__container">
            <h3 className="order__title">
              Step 04: <span className="order__title--point">배송</span>
            </h3>
            <p>
              주문 접수 확인 후 다음 날 택배 발송하며,
              <br />
              발송 후 송장번호 안내드리고 있습니다.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
