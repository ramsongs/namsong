import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrap inner">
        <Link to="/" className="logo">
          남송식품
        </Link>
        <nav>
          <ul className="gnb">
            <li>
              <Link to="/">주문 방법</Link>
            </li>
            <li>
              <Link to="/">상품보기</Link>
            </li>
            <li>
              <Link to="/">남송 이야기</Link>
            </li>
            <li>
              <Link to="/faq">고객센터</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
