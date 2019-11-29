import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const topPage = () => <div><h1>Top Page</h1>ここがトップページです</div>
const page1 = () => <div><h1>page1</h1>1枚目のページです</div>
const page2 = () => <div><h1>page2</h1>2枚目のページです</div>
const page3 = () => <div><h1>page3</h1>3枚目のページです</div>
const page404 = () => <div><h1>404</h1>存在しないページです</div>  //<= ヒットしなかった時用のページを追加

const Menu = () => {
    const liStyle = {
        display: 'inline',
        width: '100px'
    }

    return (
      <Router>
        <div style={{ width: "500px", textAlign: "left" }}>
          <ul style={{ display: "flex" }}>
            <li style={liStyle}>
              <Link to="/">top</Link>
            </li>
            <li style={liStyle}>
              <Link to="/page1">page1</Link>
            </li>
            <li style={liStyle}>
              <Link to="/reiraworld/page2">page2</Link>
            </li>
            <li style={liStyle}>
              <Link to="/page3">page3</Link>
            </li>
          </ul>

          <div style={{ marginLeft: "50px" }}>
            <Switch>
            {/* <BrowserRouter> */}
              <Route path="/" exact component={topPage} />
              <Route path="/reiraworld/page1" exact component={page1} />
              <Route path="/page2" exact component={page2} />
              <Route path="/page3" exact component={page3} />
              {/* <Route exact component={page404} /> */}
              {/* //<= 一番末尾に追加 pathの指定も、対応するLinkの追加も必要ない */}

              <Route exact component={topPage} />
            {/* </BrowserRouter> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
}

export default Menu