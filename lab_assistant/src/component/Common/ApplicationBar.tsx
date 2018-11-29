import * as React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core';

/**
 * ナビゲーションバーを生成
 * @return {JSX.Element} ナビゲーションバー
 */
export function ApplicationBar(): JSX.Element {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Button color="inherit" href="/top">
            LAB Assistant
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
