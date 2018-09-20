import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core';

/**
 * ナビゲーションバーを生成
 * @param  {boolean} Home ホームアイコンを表示するか
 * @return {Object}       ナビゲーションバー
 */
export function ApplicationBar({ Home }) {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          {Home && (
            <Button color="inherit" href="/top">
              LAB Assistant
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
