import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core';

/**
 * ナビゲーションバーを生成
 * @return {Object} ナビゲーションバー
 */
export function ApplicationBar() {
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
