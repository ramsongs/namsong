import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrap inner">
        <Link to="/" className="logo">
          남송FS
        </Link>
        <nav>
          <ul className="gnb">
            <li>
              <NavLink
                activeStyle={{ fontWeight: "600", color: "rgb(0, 195, 137)" }}
                to="/order"
              >
                주문 배송 절차
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ fontWeight: "600", color: "rgb(0, 195, 137)" }}
                to="/products"
              >
                상품 보기
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ fontWeight: "600", color: "rgb(0, 195, 137)" }}
                to="/about"
              >
                남송 이야기
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ fontWeight: "600", color: "rgb(0, 195, 137)" }}
                to="/cs"
              >
                고객센터
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
