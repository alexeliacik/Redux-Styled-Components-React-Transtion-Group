import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import SelectedColor from "./SelectedColor"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 96%;
  margin: 15px auto;
  padding: 10px 0px;
  box-shadow: 2px 2px 12px grey;
  & > h3 {
    margin-left: 20px;
  }
  & > .fade-exit-active {
    transition: all 0.4s ease;
    opacity: 0;
  }
`

const SelectedColors = props => {
  const colors = useSelector(state => state.colors)

  let selectedColor = (
    <Container>
      <h3>Please select a color...</h3>
    </Container>
  )
  const checkSelected = () => colors.some(clr => clr.selected)

  if (checkSelected()) {
    selectedColor = (
      <TransitionGroup component={Container}>
        {colors.map(
          clr =>
            clr.selected && (
              <CSSTransition key={clr.id} classNames='fade' timeout={400}>
                <SelectedColor id={clr.id} color={clr.color} name={clr.name} selected={clr.selected} />
              </CSSTransition>
            )
        )}
      </TransitionGroup>
    )
  }
  return <div>{selectedColor}</div>
}

export default SelectedColors
