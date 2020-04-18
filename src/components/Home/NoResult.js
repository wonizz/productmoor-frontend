import React from 'react';
import agent from '../../agent';

const NoResult = ({pageName, category, onDetailUnLoad, onClickCategory, articleLength, searchKeyword}) => {
    if(articleLength === 0 && !pageName){
    return (
        <div className="container result-nodata">
          <div className="inner">
            <p className="txt-nodata">죄송합니다.
            “{searchKeyword}”에 대한 검색 결과를 찾지 못했습니다.
    아래 내용 중 하나를 선택해 보시겠어요?</p>
            <div className="search-recomm">
              <ul>
                {
                  category.category.map((category, index) => {
                    const handleClick = ev => {
                      ev.preventDefault();
                      onClickCategory('', '', agent.Articles.byCategory(20, category));
                      onDetailUnLoad();
                      window.category = category;
                      window.number = 1;
                    };
                    return (
                      <li key={index}>
                        <button type="button" className="btn-search" onClick={handleClick}>{category}</button>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      );
    }else{
        return false;
    }
}

export default NoResult;