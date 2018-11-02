import React from 'react';
import RequestList from './RequestList.jsx';
import NewsList from './NewsList.jsx';
import Grid from '@material-ui/core/Grid';
import NewsCreationModal from './NewsCreationModal'
import Filter from './Filter';
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";
import GetPrintAndStatistics from './GetPrintAndStatistic';

const styles = theme => ({
    root: {
        padding: 20,
    },
    headline: {
        margin: 20,
    },
});

class CommandantPage extends React.Component{
  
    render(){
        const {classes} = this.props;
        return( 
            <div>
                <Grid container spacing={8}>
                    <Grid item md={6}>
                        <Typography variant="h5" gutterBottom className={classes.headline}>
                            Запросы
                        </Typography>
                        <Filter/> 
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h5" gutterBottom className={classes.headline}>
                            Объявления общежития
                        </Typography>
                        <NewsCreationModal/>
                            
                    </Grid>
                    <Grid item md={6} >
                        <RequestList/>
                    </Grid>
                    <Grid item md={6} >
                        <NewsList/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
CommandantPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(CommandantPage);