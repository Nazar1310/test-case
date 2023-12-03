import React, { FC } from 'react';
import logo from '../../assets/img/logo.svg';
import '../../assets/scss/App.scss';
import { useLang } from '../../hooks/lang';

const NotFound: FC = () => {
  const { lang } = useLang();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{lang.notfound}</p>
      </header>
    </div>
  );
};

export default NotFound;
