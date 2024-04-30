import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, Typography, Grid, Divider, makeStyles } from '@material-ui/core';
import {
  WbSunny as WbSunnyIcon,
  Whatshot as WhatshotIcon,
  Opacity as OpacityIcon,
  Waves as WavesIcon,
  Grain as GrainIcon,
  Cloud as CloudIcon,
  Brightness5 as Brightness5Icon,
  Brightness6 as Brightness6Icon,
  BeachAccess as BeachAccessIcon,
  CalendarToday as CalendarTodayIcon,
  EmojiObjects as EmojiObjectsIcon,
} from '@material-ui/icons';
import { fetchWeatherData } from '../redux/actions/recordAction';
import LanguageSelector from './LangaugeSelector';


const weatherIcons = {
  temperature: <WbSunnyIcon />,
  feelslike: <WhatshotIcon />,
  humidity: <OpacityIcon />,
  precipitation: <GrainIcon />,
  windspeed: <WavesIcon />,
  cloudcover: <CloudIcon />,
  sunrise: <Brightness5Icon />,
  sunset: <Brightness6Icon />,
  uvindex: <BeachAccessIcon />,
  date: <CalendarTodayIcon />,
  prediction: <EmojiObjectsIcon />,
};

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#454545', 
    color: 'white', 
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[3],
    minWidth: 320,
    maxWidth: 900,
    margin: 'auto',
    marginTop: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: theme.palette.primary.light,
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: 20,
    color: theme.palette.primary.main,
  },
}));

const WeatherCard = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { weather } = useSelector((state) => state.record, shallowEqual);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  return (
    <Card className={classes.card}>
      <LanguageSelector/>
      <CardContent>
        {weather ? (
          <>
            <Typography variant="h5" align="center">{weather.resolvedAddress}</Typography>
            {weather?.days?.map((day, index) => (
              <div key={index}>
                {index % 2 === 0 ? (
                  <Divider className={classes.divider} />
                ) : (
                  <Divider className={classes.divider} />
                )}
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography style={{ color: 'white' }}>
                      <span className={classes.icon}>{weatherIcons.date}</span>
                      {t('Date')}: {day.datetime}
                    </Typography>
                    <Typography style={{ color: 'white' }}>
                      <span className={classes.icon}>{weatherIcons.temperature}</span>
                      {t('Temperature')}: {day.temp}°C
                    </Typography>
                    <Typography style={{ color: 'white' }}>
                      <span className={classes.icon}>{weatherIcons.feelslike}</span>
                      {t('Feels Like')}: {day.feelslike}°C
                    </Typography>
                    <Typography style={{ color: 'white' }}>
                      <span className={classes.icon}>{weatherIcons.humidity}</span>
                      {t('Humidity')}: {day.humidity}%
                    </Typography>
                    <Typography style={{ color: 'white' }}>
                      <span className={classes.icon}>{weatherIcons.precipitation}</span>
                      {t('Precipitation')}: {day.precip} mm
                    </Typography>
                    <Typography style={{ color: 'white' }}>
                      <span className={classes.icon}>{weatherIcons.windspeed}</span>
                      {t('Wind Speed')}: {day.windspeed} km/h
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography style={{ color: 'white' }}>
                      <span className={classes.icon}>{weatherIcons.cloudcover}</span>
                      {t('Cloud Cover')}: {day.cloudcover}%
                    </Typography>
                    <Typography style={{ color: 'white' }}>
                      <span className={classes.icon}>{weatherIcons.sunrise}</span>
                      {t('Sunrise')}: {day.sunrise}
                    </Typography>
                    <Typography style={{ color: 'white' }}>
                      <span className={classes.icon}>{weatherIcons.sunset}</span>
                      {t('Sunset')}: {day.sunset}
                    </Typography>
                    <Typography style={{ color: 'white' }}>
                      <span className={classes.icon}>{weatherIcons.uvindex}</span>
                      {t('UV Index')}: {day.uvindex}
                    </Typography>
                    <Typography style={{ color: 'white' }}>
                      <span className={classes.icon}>{weatherIcons.prediction}</span>
                      {t('Prediction')}: {day.preciptype}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            ))}
          </>
        ) : (
          <Typography align="center">{t('loadingWeather')}</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
