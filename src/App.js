import React from 'react';
import Header from './components/Header/header';
import Home from './components/Home/home';
import Main from './components/Main/main';
import Features from './components/Features/features';
import Footer from './components/Footer/footer';

import FetchData from './service/FetchData';
import './style.css';


class App extends React.Component {
  fetchData = new FetchData();

  state = {
    rockets: [],
    rocket: 'Falcon 1',
    rocketFeatures: null,
    company: null
  };

  componentDidMount() {
    this.updateRocket();
    this.getCompany();
  }

  changeRocket = (rocket) => {
    this.setState({ rocket }, this.updateRocket);
  }

  updateRocket() {
    this.fetchData.getRockets()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name) });
        return data;
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({ rocketFeatures }));
  }

  getCompany() {
    this.fetchData.getCompany()
      .then(company => this.setState({ company }));
  }

  render() {
    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
        {this.state.company && <Home company={this.state.company}/>}
        {/* <Main rocket={this.state.rocket} />
        {this.state.rocketFeatures && <Features {...this.state.rocketFeatures} />} */}
        {this.state.company && <Footer {...this.state.company.links}/>}
      </>
    );
  }
}

export default App;
