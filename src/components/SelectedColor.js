import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"

const ColorContainer = styled.div`
  display: grid;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.color};
  width: 130px;
  height: 130px;
  margin: 4px 7px;
  border: ${props => props.selected && "7px solid #2c3e50"};
  border-radius: 8px;
  box-shadow: 2px 2px 2px grey;
  cursor: pointer;

  &:hover {
    transition: all 0.4s ease;
    border: 2px solid #2c3e50;
    opacity: 0.8;
  }

  & > p {
    color: white;
    text-shadow: 1px 1px 6px #2c3e50;
    font-size: 0.8rem;
    font-weight: bold;
  }
  @media (max-width: 959px) {
    width: 100%;
    height: 110px;
  }
`

const Color = props => {
  const dispatch = useDispatch()
  return (
    <ColorContainer {...props} onClick={() => dispatch({ type: "UNSELECT", id: props.id })}>
      <p>{props.name}</p>
    </ColorContainer>
  )
}

export default Color
