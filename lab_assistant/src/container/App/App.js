import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Top from '../Top/TopContainer';
import Users from '../Users/UsersContainer';

/**
 * ルーティングコンポーネント
 */
function Component() {
  return (
    <BrowserRouter>
      <Switch>
        {/* トップページ */}
        <Route exact path="/top" component={Top} />
        {/* ユーザ一覧ページ */}
        <Route exact path="/user" component={Users} />
        {/* TODO 2018/9/10 watanabe 404ページを作成する */}
        <Route component={() => <h1 style={{ color: '#8e8e8e' }}>404 Not found.</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Component;
