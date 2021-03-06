import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import apiUrls from './../constants/apiUrls.js';
import { bindActionCreators } from 'redux';
import { deleteRequest } from '../actions/requests';
import { loadRequests } from '../actions/requests';
import store from './../index.jsx';

class StudentRequestWarning extends React.Component {
  state = {
    open: false,
  };
  onClick=(e)=> {
    console.log(apiUrls.requestDetail(this.props.id))
    this.props.deleteRequest(apiUrls.requestDetail(this.props.id),{is_deleted:true},store.getState().auth.token);
    this.setState({ open: false });
    // this.props.loadRequests(apiUrls.requests,store.getState().auth.token);
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  

  render() {
    return (
      <div>
        <Button variant="contained"
                color="secondary"
                onClick={this.handleClickOpen}>
            ОТМЕНИТЬ
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Вы уверены, что хотите отменить запрос?"}</DialogTitle>
          <DialogActions>
            <Button onClick={this.onClick} color="primary">
              Подтвердить
            </Button>
            {/* <Button  color="secondary" onClick={this.onСlick}>
              Подтвердить
            </Button> */}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = ({ requests }, ownProps ) => {
    return {
        ...requests.requests[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteRequest, loadRequests }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentRequestWarning);
