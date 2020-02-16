import React, { FC } from 'react'
import cx from 'classnames'

import {
  GetWeekDayFormatted,
  HandleOnDayClick,
  HandleOnDayEnter
} from '../../@types'

interface Props {
  blockClassName: string
  date: Date
  getWeekDayFormatted: GetWeekDayFormatted
  handleOnClick: HandleOnDayClick
  handleOnEnter: HandleOnDayEnter
  isCurrentMonth: boolean
  isDisabled: boolean
  isHighlighted: boolean
  isMonthNext: boolean
  isMonthPrev: boolean
  isNonSelectable: boolean
  ISODate: string
  isSelectable: boolean
  isSelected: boolean
  isSelectionEnd: boolean
  isSelectionStart: boolean
  isToday: boolean
  isWeekend: boolean
  isWorkDay: boolean
  key?: string
}

const WeekDay: FC<Props> = ({
  blockClassName,
  date,
  getWeekDayFormatted,
  handleOnClick,
  handleOnEnter,
  isCurrentMonth,
  isDisabled,
  isHighlighted,
  isMonthNext,
  isMonthPrev,
  isNonSelectable,
  ISODate,
  isSelectable,
  isSelected,
  isSelectionEnd,
  isSelectionStart,
  isToday,
  isWeekend,
  isWorkDay
}) => (
  <button
    data-simple-react-calendar-day={ISODate}
    className={cx(`${blockClassName}-week-day`, {
      'is-current_month': isCurrentMonth,
      'is-disabled': isDisabled,
      'is-end_selection': isSelectionEnd,
      'is-highlighted': isHighlighted,
      'is-next_month': isMonthNext,
      'is-not_selectable': isNonSelectable,
      'is-prev_month': isMonthPrev,
      'is-selectable': isSelectable,
      'is-selected': isSelected,
      'is-start_selection': isSelectionStart,
      'is-today': isToday,
      'is-weekend': isWeekend,
      'is-working_day': isWorkDay
    })}
    onClick={handleOnClick}
    onMouseEnter={handleOnEnter}
    type='button'
    value={ISODate}
  >
    {getWeekDayFormatted(date)}
  </button>
)

WeekDay.displayName = 'WeekDay'

export default WeekDay
