import 'typeface-roboto';
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import CommandantNewsWarning from "./CommandantNewsWarning.jsx"
import { connect } from 'react-redux';

const styles = theme => ({
    card: {
        // width: '90%',
        margin: 10,
        marginTop: 10,
        // padding:10,
    },
    devider: {
        marginTop: 15,
        // width: '90%',
    },
    content: {
        '&:last-child': {
            // padding: 5,
            paddingLeft: 15,
            margin: 5,
            paddingBottom: 0,
            paddingTop: 5,
            marginBottom: 0,
        },
    },
    delete: {
        float: 'right',
        '&:last-child': {
            padding: 5,
            paddingLeft: 15,
            margin: 5,
        },
    },
});

class CommandantNews extends React.Component {

    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
        is_deleted: PropTypes.bool,
    }
    onClick=(e)=> {
        console.log(apiUrls.newsDetail(this.props.id))
        this.props.deleteNews(apiUrls.newsDetail(this.props.id),{is_deleted:true});
    }
    render() {
        const {classes} = this.props;
        if (this.props.is_deleted) {
            return(<div></div>);
        }
        return (
            <Grid container spacing={8}>
                <Card className={classes.card}>
                    <Grid item md={12}>
                        <CardContent classes={{root: classes.content}}>
                            <Typography variant="h5" gutterBottom>
                            { this.props.title }
                            </Typography>
                            <Typography>
                            { new Date(this.props.created_at).toDateString() }
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item md={12}>
                        <CardContent classes={{root: classes.content}}>
                            <Typography component="p">
                            { this.props.text }
                            </Typography>
                            <Divider className={classes.devider}/>
                        </CardContent>
                    </Grid>
                    <Grid item md={12}>
                        <CardContent classes={{root: classes.delete}}>
                            <CommandantNewsWarning/>
                        </CardContent>
                    </Grid>
                </Card>
            </Grid>
        );
    }
}

CommandantNews.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({ news }, ownProps ) => {
    return {
        ...news.news[ownProps.id],
    }
}
export default connect(mapStateToProps, null)(withStyles(styles)(CommandantNews));