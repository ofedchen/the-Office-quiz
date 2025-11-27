import React from 'react'
import MultipleChoice from '../../src/components/MultipleChoice.tsx'

describe('<MultipleChoice />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MultipleChoice />)
  })
})