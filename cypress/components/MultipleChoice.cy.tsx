import React from 'react'
import MultipleChoice from '../../src/components/MultipleChoice.tsx'

describe('<MultipleChoice />', () => {
  it('renders', () => {
    cy.mount(<MultipleChoice q="1" last={true} />)
  })
})