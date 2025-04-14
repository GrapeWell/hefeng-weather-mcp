export interface Alert {
  sender?: string;
  title?: string;
  status?: string;
  severity?: string;
  typeName?: string;
  text?: string;
  pubTime?: string;
}

export interface AlertsResponse {
  warning: Alert[];
}

export interface ForecastPeriod {
  fxDate?: string;
  textDay?: string;
  textNight?: string;
  tempMax?: string;
  tempMin?: string;
  windDirDay?: string;
  windSpeedDay?: string;
  windDirNight?: string;
  windSpeedNight?: string;
}

export interface ForecastResponse {
  daily: ForecastPeriod[];
}
