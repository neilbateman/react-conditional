import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from './Tabs';
import {Link} from 'react-router-dom';
import Posts from '../containers/Posts';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Tabs/>
          <Posts/>
        </Grid>
        <Grid item xs={6}>
          <Link to="/">Home</Link><br/>
          <Link to="/about">About</Link><br/>
        </Grid>
        <Grid item xs={6}>

        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={3}>

        </Grid>
      </Grid>
    </div>
  );
}
