import * as React from 'react';
import * as PropTypes from 'react/lib/ReactPropTypes';

export default class SubmitButton extends React.Component {

    static propTypes = {
      clickHandler: PropTypes.func
    }

    constructor(...props) {
      super(...props);

      this.clickButton = this.clickButton.bind(this);
    }

    clickButton() {
      this.props.clickHandler();
    }

    render() {
      return (
        <button name="sbmtButton" onClick={this.clickButton}>
          {this.props.children}
        </button>
      )
    }


}
