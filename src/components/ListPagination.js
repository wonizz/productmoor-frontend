import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import { SET_PAGE } from '../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onSetPage: (page, payload) =>
    dispatch({ type: SET_PAGE, page, payload })
});

const ListPagination = props => {
  if (props.articlesCount <= 10) {
    return null;
  }

  const range = [];
  for (let i = 0; i < Math.ceil(props.articlesCount / 10); ++i) {
    range.push(i);
  }

  const setPage = page => {
    if(props.pager) {
      props.onSetPage(page, props.pager(page));
    }else {
      props.onSetPage(page, agent.Articles.all(page))
    }
  };

  return (
    // <nav>
    //   <ul className="pagination">

    //     {
    //       range.map(v => {
    //         const isCurrent = v === props.currentPage;
    //         const onClick = ev => {
    //           ev.preventDefault();
    //           setPage(v);
    //         };
    //         return (
    //           <li
    //             className={ isCurrent ? 'page-item active' : 'page-item' }
    //             onClick={onClick}
    //             key={v.toString()}>

    //             <a className="page-link" href="">{v + 1}</a>

    //           </li>
    //         );
    //       })
    //     }

    //   </ul>
    // </nav>

        <div className="row">
        <div className="col-12">
          <nav>
            <ul className="pagination justify-content-center align-items-center">
              <li className="page-item">
                <span className="page-link">&laquo; Previous</span>
              </li>
              <li className="page-item"><a className="page-link" href="#">01</a></li>
              <li className="page-item active">
                <span className="page-link">02</span>
              </li>
              <li className="page-item"><a className="page-link" href="#">03</a></li>
              <li className="page-item"><a className="page-link" href="#">04</a></li>
              <li className="page-item"><a className="page-link" href="#">05</a></li>
              <li className="page-item"><a className="page-link" href="#">06</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next &raquo;</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

  );
};

export default connect(() => ({}), mapDispatchToProps)(ListPagination);
