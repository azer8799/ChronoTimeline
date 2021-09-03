// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  padding: 15px;
`

export const TopHeading = styled.h1`
  font-family: 'Roboto';
  color: #171f46;
  font-size: 25px;
`

export const Heading = styled.h1`
  text-align: center;
  color: #171f46;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  line-height: 2.7;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CCBPHeading = styled.span`
  color: #2b237c;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 24px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
