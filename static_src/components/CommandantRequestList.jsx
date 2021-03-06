import CommandantRequest from './CommandantRequest.jsx';
import apiUrls from './../constants/apiUrls';
import { loadRequests } from './../actions/requests.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import store from './../index.jsx';


class CommandantRequestList extends React.Component{

    static propTypes = {
        isLoading: PropTypes.bool,
        requestList: PropTypes.arrayOf(PropTypes.number),
    }
    componentDidMount() {
        this.props.loadRequests(apiUrls.requests, store.getState().auth.token);
        this.interval = setInterval(() => {
            this.props.loadRequests(apiUrls.requests, store.getState().auth.token);
          }, 30000);
        
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        if(this.props.isLoading) {
            return (<div>Loading...</div>);
        }
        const requests = this.props.requestList.map(
            item =>  <CommandantRequest key = { item } id = { item }/>,
        );
        return( 
            <div>
               { requests } 
            </div>
        );
    }
}
const mapStateToProps = ({ requests }) => {
    return {
        requestList: requests.requestList,
        isLoading: requests.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadRequests }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CommandantRequestList);
