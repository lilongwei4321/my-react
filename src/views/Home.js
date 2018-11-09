import React, { Component } from 'react';

class Home extends Component {
  render (){
    return (
      <div className="home">
        <ul>
          <li><a href="#/">兑换</a></li>
          <li><a href="#/">绑定账号</a></li>
          <li><a href="#/">安全中心</a></li>
        </ul>
      </div>
    )
  }
}

export default Home;