import React from 'react'
import OpenQ from '../../src/components/OpenQ.tsx'

describe('<OpenQ />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OpenQ />)
  })
})