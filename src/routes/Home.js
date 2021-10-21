import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section className="main-visual">
      <article className="main-visual__img">
        <div className="main-visual__content">
          {/* <h2 className="main-visual__title">복잡한 유통과정을 <br /> 최소화합니다.</h2> */}
          <h2 className="main-visual__title">
            대충 흰 배경에 <br /> 건더기 쏟는 사진 찍어오셈 이쁘게
          </h2>
          <small className="main-visual__subscript">
            모두가 합리적인 가격에 <br /> 좋은 제품을 받아볼 수 있도록.
          </small>
        </div>
      </article>
      <article className="main-comparison"></article>
      <article className="main-products">
        <div className="main-products__content">
          <p className="main-products__title">
            가격은 낮춰도 <br /> 품질은 낮추지 않습니다.
          </p>
          <Link to="/products" className="main-products__subscript">
            제품보러가기 <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="main-products__img"></div>
      </article>
    </section>
  );
}
