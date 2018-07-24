import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Address from './Address';
import Weather from './Weather';

const GET_ADDRESS = gql`{ address @client }`;

const Whether = () => (
  <Query query={GET_ADDRESS}>
    {({ data }) => (
      <div className='whether'>
        <Address />
        <Weather address={data.address} />
      </div>
    )}
  </Query>
);

export default Whether;
