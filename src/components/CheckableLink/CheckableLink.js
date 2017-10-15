import * as React from 'react';
import * as PropTypes from 'react/lib/ReactPropTypes';
import CustomLink from '../CustomLink/CustomLink'
import SubmitButton from '../SubmitButton/SubmitButton'

export default class CheckableLink extends React.Component {

    static propTypes = {
      url: PropTypes.string,
      checkingCallback: PropTypes.func,
      textLink: PropTypes.string,
      buttonText: PropTypes.string
    };

    constructor(...props) {
      super(...props);

      this.callCheckEvent = this.callCheckEvent.bind(this);
    }

    callCheckEvent() {
      this.props.checkingCallback();
    }

    render() {
      const {url, textLink, buttonText} = this.props;
      return (
        <div key={url}>
          <CustomLink url={url}>
              {textLink}
          </CustomLink>
          <SubmitButton clickHandler={this.callCheckEvent}>
              {buttonText}
          </SubmitButton>
        </div>
      )
    }
}
