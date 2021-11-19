import MediaQuery from "react-responsive";

export default function Footer() {
  return (
    <footer className="footer">
      <MediaQuery minWidth={768}>
        <div className="footer__wrap inner">
          <div>
            <h5 className="footer__title">남송FS</h5>
            <address>
              경기도 수원시 권선구 서호서로33번길 27, 1층 102호(서둔동)
            </address>
            <p>
              사업자등록번호: 651-47-00744<span className="separator">|</span>
              <strong>대표자: 남조아</strong>
            </p>
            <p>
              namsf17@naver.com<span className="separator">|</span>
              <span>010-5024-6461</span>
            </p>
            <small>Copyright &copy;2021 NAMSONGFS. All rights reserved.</small>
          </div>
          <div className="footer__logos">
            <p className="footer__logo logo__haccp">해썹</p>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <div>1</div>
      </MediaQuery>
    </footer>
  );
}
