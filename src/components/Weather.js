import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_WEATHER = gql`
  query ($address: String!) {
    location(address: $address) {
      formattedAddress
      coordinates
      forecast {
        cloudCover
        humidity
        icon
        precipProbability
        summary
        temperature
        uvIndex
        nextHour
        next48Hours
        moonPhase
        sunriseTime
        sunsetTime
        temperatureHigh
        temperatureHighTime
        temperatureLow
        uvIndexTime
      }
    }
  }
`;

const Weather = ({ address }) => (
  <Query query={GET_WEATHER} variables={{ address }}>
    {({ loading, error, data }) => {
      if (loading) return <div>loading...</div>;
      if (error) return <div>no weather :(</div>;

      const { location } = data;
      const { formattedAddress, forecast } = location;
      const {
        cloudCover,
        humidity,
        // icon,
        precipProbability,
        summary,
        temperature,
        uvIndex,
        nextHour,
        // next48Hours,
        moonPhase,
        // sunriseTime,
        // sunsetTime,
        temperatureHigh,
        // temperatureHighTime,
        temperatureLow,
        // uvIndexTime,
      } = forecast;

      return (
        <div>
          <p>{formattedAddress.toLowerCase()}</p>
          <div className='current'>
            <h3>currently: {summary.toLowerCase()}</h3>
            <p>temp: {temperature}°f</p>
            <p>humidity: {humidity}</p>
            <p>cloud cover: {cloudCover}</p>
            <p>uv index: {uvIndex}</p>
            <p>precipitation probability: {precipProbability}</p>
          </div>
          <div className='forecast'>
            <p>next hour: {nextHour.toLowerCase()}</p>
          </div>
          <div className='today'>
            <h3>today</h3>
            <p>low / high: {temperatureLow}°f / {temperatureHigh}°f</p>
            <p>moon phase: {moonPhase}</p>
          </div>
        </div>
      );
    }}
  </Query>
);

Weather.propTypes = { address: PropTypes.string.isRequired };

export default Weather;
