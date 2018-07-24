import React from 'react';
import { ApolloConsumer } from 'react-apollo';

export default class Address extends React.Component {
  render() {
    return (
      <ApolloConsumer>
        {client => {
          const handleSubmit = e => {
            e.preventDefault();
            if (!this.input.value.trim()) {
              return;
            }
            client.writeData({ data: { address: this.input.value } });
          };

          return (
            <form onSubmit={handleSubmit} autoComplete='off'>
              <label htmlFor='address'>
                address:
                <input
                  type='text'
                  id='address'
                  ref={input => { this.input = input; }}
                />
              </label>
              <input type='submit' value='submit' />
            </form>
          );
        }}
      </ApolloConsumer>
    );
  }
}
