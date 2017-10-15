import * as React from 'react';
import * as PropTypes from 'react/lib/ReactPropTypes';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import CheckableLink from '../../../components/CheckableLink/CheckableLink'
import {CHECKING_LINK} from '../../../actions/checkLink'


export class UncheckedLink extends React.Component {

    static propTypes = {
      data: PropTypes.object
    };

    BUTTON_TEXT = "check";

    constructor(...props) {
      super(...props);

      this.check = this.check.bind(this);
    }

    check() {
      if (this.props.checkedLinks) {
        const nextCheckedLinks = this.props.checkedLinks;
        nextCheckedLinks.push(this.props.data);
        this.props.checkingLink(nextCheckedLinks);
      } else {
        this.props.checkingLink(new Array(this.props.data))
      }
    }

    render() {
      const {fullurl, title} = this.props.data;
      return <CheckableLink url={fullurl} textLink={title} checkingCallback={this.check}
        buttonText={this.BUTTON_TEXT} />
    }
}

const mapStateToProps = state => ({
  checkedLinks: state.checkLink.checkedLinks
});

const mapDispatchToProps = dispatch => ({
  checkingLink: (checkedLinks) => {
    dispatch({type: CHECKING_LINK, payload: checkedLinks})
  }
});

export const ConnectedUncheckedLink =
    connect(mapStateToProps, mapDispatchToProps)(UncheckedLink);
