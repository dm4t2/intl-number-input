import { NumberFormat } from '../../src/numberFormat'
import { CurrencyDisplay, NumberFormatStyle } from '../../src'
import { describe, expect, it } from 'vitest'

describe('NumberFormat', () => {
  describe('constructing number formats', () => {
    describe('currency', () => {
      it('should work for the respective locale and currency', () => {
        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'de-DE',
            currency: 'EUR'
          })
        ).toMatchSnapshot('de-DE_EUR')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'de-CH',
            currency: 'EUR'
          })
        ).toMatchSnapshot('de-CH_EUR')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'es-ES',
            currency: 'EUR'
          })
        ).toMatchSnapshot('es-ES_EUR')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'es-ES',
            currency: 'EUR'
          })
        ).toMatchSnapshot('es-ES_EUR')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'nl-NL',
            currency: 'EUR'
          })
        ).toMatchSnapshot('nl-NL_EUR')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'en-US',
            currency: 'USD'
          })
        ).toMatchSnapshot('en-US_USD')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'fr-CH',
            currency: 'CHF'
          })
        ).toMatchSnapshot('fr-CH_CHF')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'zh',
            currency: 'CNY'
          })
        ).toMatchSnapshot('zh_CNY')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'en-GB',
            currency: 'GBP'
          })
        ).toMatchSnapshot('en-GB_GBP')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'en-GB',
            currency: 'INR'
          })
        ).toMatchSnapshot('en-IN_INR')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'pt',
            currency: 'BRL'
          })
        ).toMatchSnapshot('pt_BRL')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'ja',
            currency: 'JPY'
          })
        ).toMatchSnapshot('ja_JPY')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'ar-SA',
            currency: 'SAR'
          })
        ).toMatchSnapshot('ar-SA_SAR')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'fa-IR',
            currency: 'IRR'
          })
        ).toMatchSnapshot('fa-IR_IRR')

        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'bg-BG',
            currency: 'BGN'
          })
        ).toMatchSnapshot('bg-BG_BGN')
      })

      it('should work with pluralization', () => {
        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Currency,
            locale: 'en-US',
            currency: 'EUR',
            currencyDisplay: CurrencyDisplay.Name
          })
        ).toMatchSnapshot()
      })

      describe('custom precision', () => {
        it('should work with a custom precision', () => {
          expect(new NumberFormat({ formatStyle: NumberFormatStyle.Currency, currency: 'EUR', precision: 0 })).toEqual(
            expect.objectContaining({ minimumFractionDigits: 0, maximumFractionDigits: 0 })
          )

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              currency: 'EUR',
              precision: { min: 2, max: 5 }
            })
          ).toEqual(expect.objectContaining({ minimumFractionDigits: 2, maximumFractionDigits: 5 }))
        })

        it('should ignore the custom precision if the locale does not support decimal digits', () => {
          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'ja',
              currency: 'JPY',
              precision: 2
            })
          ).toEqual(expect.objectContaining({ minimumFractionDigits: 0, maximumFractionDigits: 0 }))
        })
      })

      describe('parse', () => {
        it('should return null if the value is empty', () => {
          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).parse(null)
          ).toBeNull()

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).parse('')
          ).toBeNull()

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).parse(' ')
          ).toBeNull()
        })

        it('should return null if the value is invalid', () => {
          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              currency: 'EUR',
              locale: 'en'
            }).parse('-')
          ).toBeNull()

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              currency: 'EUR',
              locale: 'en'
            }).parse('123e-1')
          ).toBeNull()

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              currency: 'EUR',
              locale: 'en'
            }).parse('0x11')
          ).toBeNull()

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              currency: 'EUR',
              locale: 'en'
            }).parse('0b11')
          ).toBeNull()

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              currency: 'EUR',
              locale: 'en'
            }).parse('0o11')
          ).toBeNull()

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              currency: 'EUR',
              locale: 'en'
            }).parse('1.2e1')
          ).toBeNull()

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              currency: 'EUR',
              locale: 'en'
            }).parse('1.23.4')
          ).toBeNull()
        })

        it('should return the parsed number if the value conforms to the currency format', () => {
          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).parse('1234')
          ).toBe(1234)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).parse('1,234,567')
          ).toBe(1234567)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).parse('-1,234,567')
          ).toBe(-1234567)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'de',
              currency: 'EUR'
            }).parse('-1234567,89')
          ).toBe(-1234567.89)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'USD'
            }).parse('$1,234,567')
          ).toBe(1234567)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'de',
              currency: 'EUR'
            }).parse('1234 €')
          ).toBe(1234)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).parse('-1234')
          ).toBe(-1234)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'USD'
            }).parse('-$1234')
          ).toBe(-1234)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'de',
              currency: 'EUR'
            }).parse('-1234 €')
          ).toBe(-1234)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'ja',
              currency: 'JPY'
            }).parse('￥123,456')
          ).toBe(123456)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).parse('0.5')
          ).toBe(0.5)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).parse('1234.50')
          ).toBe(1234.5)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).parse('1234.00')
          ).toBe(1234)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'USD'
            }).parse('$1,234.50')
          ).toBe(1234.5)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'de',
              currency: 'EUR'
            }).parse('1.234,50 €')
          ).toBe(1234.5)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'ar',
              currency: 'SAR'
            }).parse('١٢٣٤')
          ).toBe(1234)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'ar',
              currency: 'SAR'
            }).parse('١٬٢٣٤')
          ).toBe(1234)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'ar',
              currency: 'SAR'
            }).parse('٠٫٩')
          ).toBe(0.9)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'ar',
              currency: 'SAR'
            }).parse('؜-٠٫٥٠ ر.س.‏')
          ).toBe(-0.5)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en-IN',
              currency: 'INR'
            }).parse('₹1,23,334.00')
          ).toBe(123334)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en-IN',
              currency: 'INR'
            }).parse('₹123334.00')
          ).toBe(123334)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'de-AT',
              currency: 'EUR'
            }).parse('€ 66.668')
          ).toBe(66668)
        })

        it('should return null if the value does not conform to the currency format', () => {
          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).parse('1234,5')
          ).toBeNull()

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'de',
              currency: 'EUR'
            }).parse('1,234,567.89')
          ).toBeNull()

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'de',
              currency: 'EUR'
            }).parse('$1234')
          ).toBeNull()

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'USD'
            }).parse('1234 €')
          ).toBeNull()

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'ja',
              currency: 'JPY'
            }).parse('1234.56')
          ).toBeNull()
        })
      })

      describe('isFractionIncomplete', () => {
        it('should return true if the fraction is incomplete', () => {
          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).isFractionIncomplete('1234.')
          ).toBe(true)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).isFractionIncomplete('1234')
          ).toBe(false)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).isFractionIncomplete('1234.3')
          ).toBe(false)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).isFractionIncomplete('1234.3.')
          ).toBe(false)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'de',
              currency: 'EUR'
            }).isFractionIncomplete('1,3,')
          ).toBe(false)
        })
      })

      describe('normalizeDecimalSymbol', () => {
        it('should replace the first decimal symbol with the one of the current locale', () => {
          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).normalizeDecimalSeparator('1,23,4,567', 2)
          ).toBe('1,23.4,567')
        })
      })

      describe('format', () => {
        it('should return the formatted value for the respective options', () => {
          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).format(null)
          ).toBe('')

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).format(1234.5789)
          ).toBe('€1,234.58')

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR'
            }).format(1234.5789, { minimumFractionDigits: 4 })
          ).toBe('€1,234.5789')

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR',
              precision: 3
            }).format(1234.5789)
          ).toBe('€1,234.579')

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR',
              precision: { min: 2, max: 5 }
            }).format(1234.56789)
          ).toBe('€1,234.56789')

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Currency,
              locale: 'en',
              currency: 'EUR',
              precision: { min: 2, max: 5 }
            }).format(1234.5)
          ).toBe('€1,234.50')
        })
      })
    })

    describe('decimal', () => {
      it('de-DE', () => {
        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Decimal,
            locale: 'de-DE'
          })
        ).toMatchSnapshot()
      })
    })

    describe('unit', () => {
      it('de-DE', () => {
        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Unit,
            locale: 'de-DE',
            unit: 'byte'
          })
        ).toMatchSnapshot()
      })
    })

    describe('percent', () => {
      it('de-DE', () => {
        expect(
          new NumberFormat({
            formatStyle: NumberFormatStyle.Percent,
            locale: 'de-DE'
          })
        ).toMatchSnapshot()
      })

      describe('parse', () => {
        it('should parse a formatted number', () => {
          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Percent,
              locale: 'en'
            }).parse('1234')
          ).toBe(12.34)

          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Percent,
              locale: 'en'
            }).parse('123,400%')
          ).toBe(1234)
        })

        it('should return the parsed value with a fixed precision', () => {
          expect(
            new NumberFormat({
              formatStyle: NumberFormatStyle.Percent,
              locale: 'en',
              precision: 5
            }).parse('0.9%')
          ).toBe(0.009)
        })
      })
    })
  })
})
