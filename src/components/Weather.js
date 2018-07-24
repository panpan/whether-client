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
        icon
        temperature
        summary
        temperatureHigh
        temperatureLow
        moonPhase
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
        temperature,
        summary,
        temperatureHigh,
        temperatureLow,
        moonPhase,
      } = forecast;

      return (
        <div>
          <p>{formattedAddress}</p>
          <p>currently: {temperature}°F</p>
          <p>forecast: {summary}</p>
          <p>low / high: {temperatureLow}°F / {temperatureHigh}°F</p>
          <p>moon phase: {moonPhase}</p>
        </div>
      );
    }}
  </Query>
);

Weather.propTypes = { address: PropTypes.string.isRequired };

export default Weather;
