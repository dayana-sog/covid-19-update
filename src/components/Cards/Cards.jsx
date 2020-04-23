import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CounUp from 'react-countup';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({data : { confirmed, recovered, deaths, lastUpdate }}) => {
  
  if (!confirmed) {
    return 'Loading...';
  }

  const dateFormated = format(
    new Date(lastUpdate),
    "d 'de' MMMM 'de' yyyy",
    {locale: pt}
  )

  return (
    <div className={styles.container} >
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infectados</Typography>
            <Typography variant="h5">
              <CounUp 
                start={0}
                end={confirmed.value}
                duration={2.0}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{dateFormated}</Typography>
            <Typography variant="body2">Número de casos ativos de COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
            <Typography variant="h5">
            <CounUp 
                start={0}
                end={recovered.value}
                duration={2.0}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{dateFormated}</Typography>
            <Typography variant="body2">Número de casos recuperados de COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Mortes</Typography>
            <Typography variant="h5">
            <CounUp 
                start={0}
                end={deaths.value}
                duration={2.0}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{dateFormated}</Typography>
            <Typography variant="body2">Número de mortes causados por COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
};

export default Cards;