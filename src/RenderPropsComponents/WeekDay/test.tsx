import { fireEvent, render } from '@testing-library/react'
import React, { ComponentProps } from 'react'

import { getWeekDayFormatted } from '../../helper'
import WeekDay from '.'

const renderWeekDay = (props: Partial<ComponentProps<typeof WeekDay>>) => {
  const baseProps = {
    ISODate: '2020-02-09',
    blockClassName: 'example-class-name',
    date: new Date(2020, 1, 9),
    getWeekDayFormatted,
    handleOnClick: jest.fn(),
    handleOnEnter: jest.fn(),
    isCurrentMonth: true,
    isDisabled: false,
    isHighlighted: true,
    isMonthNext: false,
    isMonthPrev: false,
    isNonSelectable: true,
    isSelectable: true,
    isSelected: false,
    isSelectionEnd: false,
    isSelectionStart: true,
    isToday: true,
    isWeekend: true,
    isWorkDay: false,
    ...props
  }

  return render(<WeekDay {...baseProps} />)
}

test('default render', () => {
  const { container } = renderWeekDay({})

  expect(container.firstChild).toMatchSnapshot()
})

test('trigger callback on click', () => {
  const handleOnClick = jest.fn()
  const { getByRole } = renderWeekDay({ handleOnClick })

  const button = getByRole('button')

  fireEvent.click(button)

  expect(handleOnClick).toBeCalled()
})

test('trigger callback on mouseenter', () => {
  const handleOnEnter = jest.fn()
  const { getByRole } = renderWeekDay({ handleOnEnter })

  const button = getByRole('button')

  fireEvent.mouseEnter(button)

  expect(handleOnEnter).toBeCalled()
})

test('handle currentMonth', () => {
  const { container } = renderWeekDay({ isCurrentMonth: true })

  expect(container.firstChild).toHaveClass('is-current_month')
})

test('handle isDisabled', () => {
  const { container } = renderWeekDay({ isDisabled: true })

  expect(container.firstChild).toHaveClass('is-disabled')
})

test('handle isHighlighted', () => {
  const { container } = renderWeekDay({ isHighlighted: true })

  expect(container.firstChild).toHaveClass('is-highlighted')
})

test('handle isMonthNext', () => {
  const { container } = renderWeekDay({ isMonthNext: true })

  expect(container.firstChild).toHaveClass('is-next_month')
})

test('handle isMonthPrev', () => {
  const { container } = renderWeekDay({ isMonthPrev: true })

  expect(container.firstChild).toHaveClass('is-prev_month')
})

test('handle isNonSelectable', () => {
  const { container } = renderWeekDay({ isNonSelectable: true })

  expect(container.firstChild).toHaveClass('is-not_selectable')
})

test('handle isSelectable', () => {
  const { container } = renderWeekDay({ isSelectable: true })

  expect(container.firstChild).toHaveClass('is-selectable')
})

test('handle isSelected', () => {
  const { container } = renderWeekDay({ isSelected: true })

  expect(container.firstChild).toHaveClass('is-selected')
})

test('handle isSelectionEnd', () => {
  const { container } = renderWeekDay({ isSelectionEnd: true })

  expect(container.firstChild).toHaveClass('is-end_selection')
})

test('handle isSelectionStart', () => {
  const { container } = renderWeekDay({ isSelectionStart: true })

  expect(container.firstChild).toHaveClass('is-start_selection')
})

test('handle isToday', () => {
  const { container } = renderWeekDay({ isToday: true })

  expect(container.firstChild).toHaveClass('is-today')
})

test('handle isWeekend', () => {
  const { container } = renderWeekDay({ isWeekend: true })

  expect(container.firstChild).toHaveClass('is-weekend')
})

test('handle isWorkday', () => {
  const { container } = renderWeekDay({ isWorkDay: true })

  expect(container.firstChild).toHaveClass('is-working_day')
})
