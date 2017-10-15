import * as React from 'react';
import * as PropTypes from 'react/lib/ReactPropTypes';
import {connect} from 'react-redux';
import * as _ from 'lodash';

import {ConnectedSearchForm} from '../../components/SearchForm/SearchForm';
import {ConnectedPageCheckLinks as PageCheckLinks} from '../../containers/LinkContainers/PageCheckLinks/PageCheckLinks';
import {searchWiki} from '../../actions/wikiSearch';

export class CustomWikiSearch extends React.Component {
    static propTypes = {
        searchResults: PropTypes.arrayOf(PropTypes.object),
        fetchData: PropTypes.func
    };

    constructor(...args) {
        super(...args);

        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    componentWillMount() {

    }

    render() {

      console.log("render CUSTOM WIKI");
      /*  const items = [];

        items.push(<ConnectedSearchForm form="wikiSearch" onSubmit={this.handleSearchSubmit}/>);

        if (this.props.searchResults) {
            const pageLinks = _.map(this.props.searchResults, pageDescription =>
                <a
                    style={{display: 'block'}}
                    key={pageDescription.fullurl}
                    href={pageDescription.fullurl}>{pageDescription.title}
                </a>);
            items.push(<div key="searchResults">{pageLinks}</div>);
        }*/

        return (
        <div>
        <ConnectedSearchForm form="wikiSearch" onSubmit={this.handleSearchSubmit} />
        <PageCheckLinks />
        </div>
      )
    }

    handleSearchSubmit(values) {
        if (values.search) {
            this.props.fetchData(values.search);
        }
    }
}

const mapStateToProps = state => ({
    searchResults: state.wikiSearch && state.wikiSearch.data
});

const mapDispatchToProps = dispatch => ({
    fetchData(text) {
        dispatch(searchWiki(text));
    }
});

export const ConnectedWikiSearch = connect(mapStateToProps, mapDispatchToProps)(CustomWikiSearch);
