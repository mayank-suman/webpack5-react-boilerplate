import React from 'react';
import { render } from 'react-dom';

export default function initReactApp() {
  const mountPoint = document.querySelector('.app');
  render(<div>Awesome! React is running</div>, mountPoint);
}
