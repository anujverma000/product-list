import styled from 'styled-components'
import { MOBILE, TABLET, DESKTOP} from './device'

const Container = styled.div`
  margin: auto;
  font-family: "arial";

  @media ${ DESKTOP } {
    max-width: 900px;
    width: 100%;
  }

  @media ${ TABLET } {
    width: 75%;
  }

  @media ${ MOBILE } {
    width: 100%;
  }
`

export default Container