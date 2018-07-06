import React from 'react'
import renderer from 'react-test-renderer'

import { Hello } from '../Hello'

it('renders correctly with defaults', () => {
  const text = renderer.create(<Hello />).toJSON()
  expect(text).toMatchSnapshot()
})
