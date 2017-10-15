import * as React from 'react';
import * as PropTypes from 'react/lib/ReactPropTypes';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import CheckableLink from '../../../components/CheckableLink/CheckableLink'
import {UNCHECKING_LINK} from '../../../actions/checkLink'

export class CheckedLink extends React.Component {

    static propTypes = {
      data: PropTypes.object
    };

    BUTTON_TEXT = "uncheck";

    constructor(...props) {
      super(...props);

      this.uncheck = this.uncheck.bind(this);
    }

    uncheck() {
      const pageid = this.props.data.pageid;
      const prevCheckedLinks = this.props.checkedLinks;
      const nextCheckedLinks = prevCheckedLinks.filter(
        (link) => link.pageid !== pageid
      );
      this.props.uncheckingLink(nextCheckedLinks);
    }

    render() {
      const {fullurl, title} = this.props.data;
      return <CheckableLink url={fullurl} textLink={title} checkingCallback={this.uncheck}
        buttonText={this.BUTTON_TEXT} />
    }


}

const mapStateToProps = state => ({
  checkedLinks: state.checkLink.checkedLinks
});

const mapDispatchToProps = dispatch => ({
  uncheckingLink: (checkedLinks) => {
    dispatch({type: UNCHECKING_LINK, payload: checkedLinks})
  }
});

export const ConnectedCheckedLink =
    connect(mapStateToProps, mapDispatchToProps)(CheckedLink);
