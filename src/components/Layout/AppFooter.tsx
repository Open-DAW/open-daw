import React from 'react';
import ReactTooltip from 'react-tooltip';
import './styles/AppFooter.scss';

export default class AppFooter extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <div className="app-footer">
        <ReactTooltip delayHide={1500} />
      </div>
    );
  }
}
