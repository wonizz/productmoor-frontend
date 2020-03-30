import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED, APP_UNLOAD, APP_REDIRECT } from '../../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.common.redirecturl
});

const mapDispatchToProps = dispatch => ({
  onLoad: redirect_url =>
    dispatch({ type: APP_REDIRECT, redirect_url }),
  onUnload: () =>
    dispatch({ type: APP_UNLOAD })
});

class Redirect extends React.Component {
  componentWillMount() {
    this.props.onUnload();
    this.props.onLoad(this.props.params.id)
  }

  componentWillUnmount() {
    //this.props.onUnload();
  }

  componentDidMount() {
    setTimeout(
        function() {
            //window.location.href = "https://www.samsung.com/sg"
        }
        .bind(this),
        3000
    );
    console.log('didmount')
  }
  render() {
    // if (!this.props.article) {
    //   return null;
    // }
    return (
            <div className="forwarding">
                <div className="contForward">
                    <h1 className="tit-forward">해당 쇼핑몰로 이동중입니다.</h1>
                    <dl className="txt-forward">
                        <dt>PRODUCTMOOR에서 알려드립니다.</dt>
                        <dd>PRODUCTMOOR에서 제공하는 <strong>상품정보와 가격은 일치하지 않을 수 있습니다. </strong></dd>
                        <dd>상품정보와 가격은 쇼핑몰과 다를 수 있으므로 
                        주문 시 반드시 확인해 주시기 바랍니다.</dd>
                        <dd>PRODUCTMOOR는 <strong>상품 판매에 직접 관여하지 않으며</strong> 상품의 주문, 배송, 환불 등
                        상품판매에 관련한 의무와 책임은 해당 쇼핑몰에 있습니다.</dd>
                    </dl>
                </div>
                <cite className="copyright">Copyright © 2020 productmoor . All rights reserved </cite>
            </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Redirect);
