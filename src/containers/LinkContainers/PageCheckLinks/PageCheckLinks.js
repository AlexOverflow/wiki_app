import * as React from 'react';
import * as PropTypes from 'react/lib/ReactPropTypes';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import {ConnectedCheckedLink} from '../CheckedLink/CheckedLink'
import {ConnectedUncheckedLink} from '../UncheckedLink/UncheckedLink'
import BlockCheckedLinks from '../BlockCheckedLinks/BlockCheckedLinks'
import BlockUncheckedLinks from '../BlockUncheckedLinks/BlockUncheckedLinks'

export class PageCheckLinks extends React.Component {



    render() {
        const checkedLinksBlock = [];
        const uncheckedLinksBlock = [];
        const {links, checkedLinks} = this.props.data;

        console.log('render page');

          _.map(links, function(link) {
              if (!(_.find(checkedLinks, (o) => o.pageid === link.pageid))) {
                uncheckedLinksBlock.push(<ConnectedUncheckedLink key={link.pageid} data={link} />)
              }
            });

          _.map(checkedLinks, function(link) {
              checkedLinksBlock.push(<ConnectedCheckedLink key={link.pageid} data={link} />)
            });


        return (
          <div>
            <BlockUncheckedLinks>
             {uncheckedLinksBlock}
            </BlockUncheckedLinks>
            <BlockCheckedLinks>
             {checkedLinksBlock}
            </BlockCheckedLinks>
          </div>
        )
    }
  }

  const mapStateToProps = state => ({
    data: {
      links: state.wikiSearch.data,
      checkedLinks: state.checkLink.checkedLinks
    }
  });

  export const ConnectedPageCheckLinks =
      connect(mapStateToProps)(PageCheckLinks);
