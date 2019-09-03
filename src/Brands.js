import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

const GET_BRANDS = gql`
  {
    brands {
      name
    }
  }
`

function App() {
  const { data, error, loading } = useQuery(GET_BRANDS)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  return (
    <ul>
      {data.brands.map(brand => (
        <li key={brand.name}>{brand.name}</li>
      ))}
    </ul>
  )
}

export default App
