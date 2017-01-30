/**
 * Created by Galen on 2016/12/24.
 */

import React from 'react';
import { render } from 'react-dom';
import App from './js/components/App';

render(
  <App />,
  document.querySelector('#app')
);


import bar from './js/bar';
import './css/app.css'
import './css/app.module.css'

console.log('app');
bar();

setTimeout(() => {
  import('./js/foo')
    .then(module => {
      module.default()
    })
}, 3000);