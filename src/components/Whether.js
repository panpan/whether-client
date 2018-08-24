import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

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
      </div>
    )}
  </Query>
);

export default Whether;
