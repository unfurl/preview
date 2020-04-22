import * as React from 'react';

const Header: React.FunctionComponent<> = () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark text-white" style={{margin:0,padding:'10px'}}>
      <div className="container d-flex justify-content-between align-items-center">
        <p className="lead">Preview Component Demo Using React</p>
        <p className="font-weight-lighter">Made in ❤️ with React by Polyrithm</p>
      </div>
    </div>
  )
};

export default Header;