import React from 'react';
import Request from './Request.jsx';
import News from './News.jsx';
import User from './User.jsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RequestCreationModal from './CreationModal'

class StudentPage extends React.Component{
  
    render(){
        
        return( 
            <div>
                <Grid container spacing={24}>
                    <Grid item md={12} justify="center" alignItems="center" >
                        <RequestCreationModal/>   
                    </Grid>
                    <Grid item md={6}>
                        <Request/>
                    </Grid>

                    <Grid item md={6}>
                        <News/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default StudentPage;