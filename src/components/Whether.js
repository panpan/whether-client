import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Address from './Address';
import Weather from './Weather';
import '../styles/Whether.scss';

const GET_ADDRESS = gql`{ address @client }`;

const Whether = () => (
  <Query query={GET_ADDRESS}>
    {({ data }) => (
      <div styleName='whether'>
        <Address />
        <Weather address={data.address} />
        <h2 styleName='umbrella'>&#9730;</h2>
      </div>
    )}
  </Query>
);

export default Whether;
