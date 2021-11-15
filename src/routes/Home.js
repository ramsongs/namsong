import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section className="main-visual">
      {/* <article className="main-visual__img">
        <div className="main-visual__content">
          <h2 className="main-visual__title home-title">
            복잡한 유통과정을 <br /> 최소화합니다.
          </h2>
          <small className="main-visual__subscript home-subscript">
            모두가 합리적인 가격에 <br /> 좋은 제품을 받아볼 수 있도록.
          </small>
        </div>
      </article> */}
      <article className="main-comparison">
        <div className="main-comparison__img"></div>
        <div className="main-comparison__content">
          <p className="main-comparison__title home-title">
            더 이상 속지 마세요.
          </p>
          <Link
            to="/about"
            className="main-comparison__subscript home-subscript home-more"
          >
            남송 이야기 <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </article>
      <article className="main-products">
        <div className="main-products__content">
          <p className="main-products__title home-title">
            가격은 낮춰도 <br /> 품질은 낮추지 않습니다.
          </p>
          <Link
            to="/products"
            className="main-products__subscript home-subscript home-more"
          >
            제품보러가기 <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="main-products__img"></div>
      </article>
    </section>
  );
}
