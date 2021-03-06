import React from 'react'
import ReactDOM from 'react-dom'
import {mount} from '../setup/enzyme.setup'
import NextControlButton from '../../components/NextControlButton'
import {withCarouselTheme} from '../../styles'

const ButtonWithTheme = withCarouselTheme(NextControlButton)

describe('NextControlButton component', () => {
    let component, div, wrapper

    component = (
        <ButtonWithTheme id='test' handleClick={() => true}>
            Test
        </ButtonWithTheme>
    )

    test('returns true when clicked', () => {
        wrapper = mount(component)
        expect(wrapper.invoke('handleClick')()).toBe(true)
        wrapper.unmount(component)
    })
})
