import React from 'react'
import styled from 'styled-components'

const STARS = 5;

/** 
 * Assumes rating is percentage 
 * 
 * */ 
const Rating = ({ rating }) => {
  const normalizedRating = parseInt(rating, 10);
  
  const fullStarCount = Math.floor( STARS * (normalizedRating/100))
  const emptyStarCount = STARS - Math.ceil( STARS * (normalizedRating/100))

  const partialStarCount = STARS - (fullStarCount + emptyStarCount);
  const oneStarValue = 100/STARS;
  const fillWidth = (normalizedRating - (fullStarCount * oneStarValue))/oneStarValue * 100

  const getFullStars = fullStarCount => {
    let stars = []
    for(let i=0; i < fullStarCount; i++){
      stars.push(<FillStar>&#x2B51;</FillStar>)
    }
    return stars
  }

  const getEmptyStars = fullStarCount => {
    let stars = []
    for(let i=0; i < fullStarCount; i++){
      stars.push(<EmptyStar>&#x2B51;</EmptyStar>)
    }
    return stars
  }

  const getPartialStar = (fillWidth = 100) => 
  <PartialStarWrapper>
  	<EmptyStar>&#x2B51;</EmptyStar>
    <PartialStar width={fillWidth}>&#x2B51;</PartialStar>
  </PartialStarWrapper>

  
  return (
    <Wrapper>
      {getFullStars(fullStarCount)}
      {partialStarCount && getPartialStar(fillWidth)}
      {getEmptyStars(emptyStarCount)}
    </Wrapper>
  )
}

const Star = styled.div`
  display: inline-block;
  width: 13px;
  height: 26px;
`
const FillStar = styled(Star)`
  color: #262624;
`
const EmptyStar = styled(Star)`
  color: transparent;
`
const PartialStarWrapper = styled(Star)`
  position: relative;
`
const PartialStar = styled(Star)`
  position: absolute;
  overflow: hidden; 
  width: ${({width}) => `${width}%`};
  left: 0;
`

const Wrapper = styled.div`
  text-align: center;
`

export default Rating