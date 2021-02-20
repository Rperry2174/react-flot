import React, { Component } from 'react';

export interface Props {
  id: string;
  data: any[];
  options: object;
  height: string;
  width: string;
}

export default class ReactFlot extends Component<Props, any> {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidUpdate(prevProps) {
  }

  draw(event, data) {
  }

  render() {
    return (<div></div>);
  }
}
