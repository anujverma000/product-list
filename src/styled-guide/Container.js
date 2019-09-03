import styled from 'styled-components'
import { MOBILE, TABLET, DESKTOP} from './device'

const Container = styled.div`
  margin: auto;
  font-family: "arial";

  @media ${ MOBILE } {
    width: 100%;
  }

  @media ${ TABLET } {
    width: 75%;
  }

  @media ${ DESKTOP } {
    max-width: 900px;
    min-width: 900px;
  }
`

export default Container