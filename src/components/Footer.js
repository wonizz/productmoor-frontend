import React from 'react';



class Footer extends React.Component {
  render() {
    return (
          <footer className="footer">
          <div className="inner">
              <div className="head-footer">
                  <h2 className="stit-footer">PRODUCTMOOR</h2>
                  <nav className="nav-footer">
                      <a href="#">TERMS OF USE</a>
                      <a href="#">PRIVACY POLICY</a>
                  </nav>
              </div>
              <div className="cont-footer">
                  <p className="txt-footer"><span>상호 : 라테라</span><span>대표 : 이윤영</span><span>사업자등록번호 : 603-81-18194 </span></p>
                  <p className="txt-footer">주소 : 서울특별시 서초구 명달로 22길 33-4	</p>
                  <p className="txt-footer">Productmoor는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.  </p>
                  <a href="#" className="btn-foot-sns"></a>
              </div>
              <div className="foot-footer">
                  <a href="mailto:Productmoor@productmoor.com">Productmoor@productmoor.com</a>
                  <cite>Copyright © 2020 productmoor. All rights reserved </cite>
              </div>
          </div>
      </footer>
    );
  }
}

export default Footer;
