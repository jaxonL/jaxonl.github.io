import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export class ContactComponent extends Component {
  render() {
    return (
      <Fragment>
        <Grid container>
          <Grid item sm={12}>
            <Typography>In the meantime, find me here:</Typography>
          </Grid>
          <Grid container justify="center" spacing="0">
            <Grid item xs={1}>
              <a href="https://www.linkedin.com/in/jaxonl">
                <FontAwesomeIcon icon={['fab', 'linkedin']} color="teal" size="2x"/>
              </a>
            </Grid>
            <Grid item xs={1}>
            <a href="https://github.com/jaxonl">
              <FontAwesomeIcon icon={['fab', 'github-square']} color="teal" size="2x"/>
            </a>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}
