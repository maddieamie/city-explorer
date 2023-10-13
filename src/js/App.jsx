import React from 'react';
import '../css/App.css'
import Explorer from '../components/Explorer.jsx';
import Header from '../components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Explorer />
      </>
    )
  }
}

export default App;
