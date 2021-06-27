import axios from 'axios';
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { v4 as uuidv4 } from 'uuid';

class SingleCharecter extends Component {
  state = {
    detail: [],
  };
  componentDidMount() {
    //extract the current path and use it

    const pathCurrent = window.location.pathname.split('/').pop();
    console.log(pathCurrent);
    axios
      .get(`http://localhost:5000/api/charecter/${pathCurrent}`)
      .then((res) => {
        let { data } = res;
        console.log(data);
        data = data.detail[0];
        this.setState({ detail: data });
      });
  }
  render() {
    let nickNames = this.state.detail.nickNames;
    console.log(nickNames);
    return (
      <div>
        <Image src={this.state.detail.photo} roundedCircle fluid />
        <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
          <Tab eventKey='profile' title='Profile'>
            {this.state.detail.name}
          </Tab>
          <Tab eventKey='description' title='description'>
            {this.state.detail.description}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SingleCharecter;
