import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';

const client = new ApolloClient({
  uri: 'https://knjab06g1j.execute-api.us-east-1.amazonaws.com/prod/graphql',
  clientState: { defaults: { address: 'prospect park, brooklyn ny' } },
});

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

const initApp = async () => {
  const ReactDOM = await import('react-dom' /* webpackChunkName: 'react-dom' */);

  ReactDOM.render(<AppWithProvider />, document.getElementById('root'));
};

initApp();
