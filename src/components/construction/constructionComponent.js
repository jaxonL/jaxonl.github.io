import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './constructionComponent.css';

import { ContactComponent } from '../contact/contactComponent';

export class ConstructionComponent extends Component {
  render() {
    return (
      <Fragment>
        <Grid container spacing={16}>
          <Grid item sm={12}>
            <center>
            <Typography component="h2" variant="h1"> jaxon lin</Typography>
              <FontAwesomeIcon icon="wrench" className="Spin-wrench" color="teal" size="lg"/>
              <Typography>Page under construction. Please come back later.</Typography>
              <FontAwesomeIcon icon="cog" className="Spin-cog" color="teal" size="lg"/>
            </center>
          </Grid>
          <Grid item sm={12}>
            <center><ContactComponent></ContactComponent></center>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
