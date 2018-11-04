import Request from './Request.jsx';
import apiUrls from './../constants/apiUrls';
import { loadRequests } from './../actions/requests.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';



class RequestList extends React.Component{

    static propTypes = {
        isLoading: PropTypes.bool,
        requestList: PropTypes.arrayOf(PropTypes.number),
    }
    componentDidMount() {
        this.props.myRequests(apiUrls.requests(this.props.user.id));
    }

    render(){
        if(this.props.isLoading) {
            return (<div>Loading...</div>);
        }
        const requests = this.props.requestList.map(
            item =>  <Request key = { item } id = { item }/>,
        );
        return( 
            <div>
               { requests } 
            </div>
        );
    }
}
const mapStateToProps = ({ requests, auth }) => {
    return {
        user: auth.user,
        requestList: requests.requestList,
        isLoading: requests.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadRequests }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(RequestList);