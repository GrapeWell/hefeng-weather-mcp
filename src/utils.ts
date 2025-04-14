import { Alert, ForecastPeriod } from './types.js';


export const formatAlert = (alert: Alert): string => {
  return [
    `Sender: ${alert.sender || 'Unknown'}`,
    `Title: ${alert.title || 'Unknown'}`,
    `Status: ${alert.status || 'Unknown'}`,
    `Severity: ${alert.severity || 'Unknown'}`,
    `Type: ${alert.typeName || 'Unknown'}`,
    `Text: ${alert.text || 'Unknown'}`,
    `Published Time: ${alert.pubTime || 'Unknown'}`,
    "---",
  ].join('\n');
}

export const formatForecast = (forecast: ForecastPeriod): string => {
  return [
    `Date: ${forecast.fxDate || 'Unknown'}`,
    `Day: ${forecast.textDay || 'Unknown'}`,
    `Night: ${forecast.textNight || 'Unknown'}`,
    `Max Temp: ${forecast.tempMax || 'Unknown'}`,
    `Min Temp: ${forecast.tempMin || 'Unknown'}`,
    `Day Wind Direction: ${forecast.windDirDay || 'Unknown'}`,
    `Day Wind Speed: ${forecast.windSpeedDay || 'Unknown'}`,
    `Night Wind Direction: ${forecast.windDirNight || 'Unknown'}`,
    `Night Wind Speed: ${forecast.windSpeedNight || 'Unknown'}`,
    "---",
  ].join('\n');
}
