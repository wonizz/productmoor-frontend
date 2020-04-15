import React from 'react';

const Privacy = ({pageName, onPrivacyTermsLoad}) => {
    if (pageName) {
        const privacyKeyHandler = ev => {
          ev.preventDefault();
          window.category = undefined;
          onPrivacyTermsLoad('terms-privacy', { hits: { hits: [] } });
        }
        const serviceKeyHandler = ev => {
          ev.preventDefault();
          window.category = undefined;
          onPrivacyTermsLoad('terms-service', { hits: { hits: [] } });
        }
        return (
          <div className="container">
    
            {
              pageName === "terms-privacy" ? (
                <div className="inner">
                  <nav className="tab-terms">
                    <a href="/#" className="btn-tab" onClick={serviceKeyHandler}>서비스 약관</a>
                    <a href="/#" className="btn-tab active" onClick={privacyKeyHandler}>개인정보처리방침</a>
                  </nav>
                  <div className="cont-terms">
                    <h2 className="stit-terms">1. 개인정보의 처리 목적</h2>
                    <p className="txt-terms">① (‘www.productmoor.com’이하 ‘productmoor.com’)은(는) 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
              - 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별.인증, 회원자격 유지.관리, 물품 또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의 공급.배송 등</p>
                    <h2 className="stit-terms">2. 개인정보의 처리 및 보유 기간</h2>
                    <p className="txt-terms">① (‘www.productmoor.com’이하 ‘productmoor.com’)은(는) 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유.이용기간 또는 법령에 따른 개인정보 보유.이용기간 내에서 개인정보를 처리.보유합니다.</p>
                    <p className="txt-terms">② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.
                    ☞ 아래 예시를 참고하여 개인정보 처리업무와 개인정보 처리업무에 대한 보유기간 및 관련 법령, 근거 등을 기재합니다.
                    (예시)- 고객 가입 및 관리 : 서비스 이용계약 또는 회원가입 해지시까지, 다만 채권.채무관계 잔존시에는 해당 채권.채무관계 정산시까지
              - 전자상거래에서의 계약.청약철회, 대금결제, 재화 등 공급기록 : 5년</p>
                    <h2 className="stit-terms">3. 개인정보의 제3자 제공에 관한 사항 </h2>
                    <p className="txt-terms">① ('www.productmoor.com'이하 'productmoor.com')은(는)정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
                    <h2 className="stit-terms">4. 개인정보처리 위탁</h2>
                    <p className="txt-terms"></p>
                    <h2 className="stit-terms">5. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다. </h2>
                    <p className="txt-terms">① 정보주체는 라테라(‘www.productmoor.com’이하 ‘productmoor.com) 에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                    1. 개인정보 열람요구
                    2. 오류 등이 있을 경우 정정 요구
                    3. 삭제요구
                4. 처리정지 요구</p>
                  </div>
                </div>
              ) :
                (<div className="inner">
                  <nav className="tab-terms">
                    <a href="/#" className="btn-tab active" onClick={serviceKeyHandler}>서비스 약관</a>
                    <a href="/#" className="btn-tab" onClick={privacyKeyHandler}>개인정보처리방침</a>
                  </nav>
                  <div className="cont-terms">
                    <h2 className="stit-terms">제1조(목적)</h2>
                    <p className="txt-terms">이 약관은 라테라 회사(전자상거래 사업자)가 운영하는 productmoor.com 사이버 몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리,의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                    <p className="txt-terms">※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」</p>
                    <h2 className="stit-terms">제2조(정의)</h2>
                    <p className="txt-terms">① "몰"이란 라테라 회사가 재화 또는 용역(이하 "재화 등"이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하 는 사업자의 의미로도 사용합니다.</p>
                    <p className="txt-terms">② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                  </p>
                    <p className="txt-terms">③ "회원"이라 함은 "몰"에 회원등록을 한 자로서, 계속적으로 "몰"이 제공하는 서비스를 이용할 수 있는 자를 말합니다.</p>
                    <p className="txt-terms">④ "비회원"이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.</p>
                    <h2 className="stit-terms">제3조(약관 등의 명시와 설명 및 개정) </h2>
                    <p className="txt-terms">①	 "몰"은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호, 모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 productmoor.com 사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.</p>
                    <p className="txt-terms">② "몰은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회, 배송책임, 환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을
                    구하여야 합니다.</p>
                    <p className="txt-terms">③ "몰"은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
                    <p className="txt-terms">④ "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 "몰"은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.</p>
                    <p className="txt-terms">⑤ "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 "몰"에 송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.</p>
                    <p className="txt-terms">⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.</p>
                  </div>
                </div>)
            }
    
          </div>
        )
      }else{
          return false;
      }
}

export default Privacy;