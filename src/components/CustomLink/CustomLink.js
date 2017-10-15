import * as React from 'react';
import * as PropTypes from 'react/lib/ReactPropTypes';

export default class CustomLink extends React.Component {

    static propTypes = {
      url: PropTypes.string
    }

    render() {
      const url = this.props.url;
      return <a className="link" key={url} href={url}>{this.props.children}</a>
    }
}
