import { AutoDecimalDigitsNumberMask } from '../../src/numberMask'
import { NumberFormat } from '../../src/numberFormat'
import { NumberFormatStyle } from '../../src'
import { describe, expect, it } from 'vitest'

describe('AutoDecimalDigitsNumberMask', () => {
  it('should use the maximumFractionDigits of the number format', () => {
    const numberFormat = new NumberFormat({ formatStyle: NumberFormatStyle.Decimal, locale: 'en' })
    const autoDecimalDigitsNumberMask = new AutoDecimalDigitsNumberMask(numberFormat)

    expect(autoDecimalDigitsNumberMask.conformToMask('1000')).toEqual({ fractionDigits: '000', numberValue: 1 })
  })
})
