import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const GET_TYPES = gql`
  {
    types {
      name
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(GET_TYPES);
  if (loading) {
    return <div>Loading...</div>;
  };
  if (error) {
    return <div>Error! {error.message}</div>;
  };

  return (
    <ul>
      {data.types.map(type => (
        <li key={type.name}>{type.name}</li>
      ))}
    </ul>
  );
}

export default App;
