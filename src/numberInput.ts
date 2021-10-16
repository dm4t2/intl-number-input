import { DECIMAL_SEPARATORS, NumberFormat } from './numberFormat'
import { AutoDecimalModeNumberMask, DefaultNumberMask, NumberMask } from './numberMask'
import { NumberFormatStyle, NumberInputConstructorArgs, NumberInputOptions, NumberInputValue } from './api'
import { count } from './utils'

export class NumberInput {
  private readonly el: HTMLInputElement
  private options!: NumberInputOptions
  private onInput?(value: NumberInputValue): void
  private onChange?(value: NumberInputValue): void
  private numberValue: number | null
  private numberFormat!: NumberFormat
  private decimalSymbolInsertedAt?: number
  private numberMask!: NumberMask
  private formattedValue!: string
  private focus!: boolean
  private step!: number
  private minValue!: number
  private maxValue!: number

  constructor(args: NumberInputConstructorArgs) {
    this.el = args.el
    this.onInput = args.onInput
    this.onChange = args.onChange
    this.numberValue = null
    this.addEventListener()
    this.init(args.options)
    this.setValue(this.numberFormat.parse(this.el.value))
  }

  setOptions(options: NumberInputOptions): void {
    this.init(options)
    this.applyFixedFractionFormat(this.numberValue, true)
  }

  getValue(): NumberInputValue {
    const numberValue = this.options.exportValueAsInteger && this.numberValue != null ? this.toInteger(this.numberValue) : this.numberValue
    return { number: numberValue, formatted: this.formattedValue }
  }

  setValue(value: number | null): void {
    const newValue = this.options.exportValueAsInteger && value != null ? this.toFloat(value) : value
    if (newValue !== this.numberValue) {
      this.applyFixedFractionFormat(newValue)
    }
  }

  increment(): void {
    this.setValue((this.numberValue ?? 0) + this.step)
  }

  decrement(): void {
    this.setValue((this.numberValue ?? 0) - this.step)
  }

  private init(options: NumberInputOptions) {
    this.options = {
      autoSign: true,
      hideGroupingSeparatorOnFocus: true,
      hidePrefixOrSuffixOnFocus: true,
      hideNegligibleDecimalDigitsOnFocus: true,
      ...options
    }
    if (this.options.autoDecimalDigits) {
      this.el.setAttribute('inputmode', 'numeric')
    } else {
      this.el.setAttribute('inputmode', 'decimal')
    }
    this.numberFormat = new NumberFormat(this.options)
    this.numberMask = this.options.autoDecimalDigits ? new AutoDecimalModeNumberMask(this.numberFormat) : new DefaultNumberMask(this.numberFormat)
    this.step = options.step && options.step > 0 ? Math.max(options.step, this.toFloat(1)) : this.toFloat(1)
    this.minValue = this.getMinValue()
    this.maxValue = this.getMaxValue()
  }

  private getMinValue(): number {
    let min = this.toFloat(-Number.MAX_SAFE_INTEGER)
    if (this.options.valueRange?.min !== undefined) {
      min = Math.max(this.options.valueRange?.min, this.toFloat(-Number.MAX_SAFE_INTEGER))
    }
    if (!this.options.autoSign && min < 0) {
      min = 0
    }
    min = this.getNextStep(min)
    return min
  }

  private getMaxValue(): number {
    let max = this.toFloat(Number.MAX_SAFE_INTEGER)
    if (this.options.valueRange?.max !== undefined) {
      max = Math.min(this.options.valueRange?.max, this.toFloat(Number.MAX_SAFE_INTEGER))
    }
    if (!this.options.autoSign && max < 0) {
      max = this.toFloat(Number.MAX_SAFE_INTEGER)
    }
    return max
  }

  private validateStep(value: number): number {
    return this.toInteger(value) % this.toInteger(this.step) !== 0 ? this.getNextStep(value) : value
  }

  private getNextStep(value: number): number {
    return Math.ceil(value / this.step) * this.step
  }

  private toFloat(value: number): number {
    return value / Math.pow(10, this.numberFormat.maximumFractionDigits)
  }

  private toInteger(value: number) {
    return Number(value.toFixed(this.numberFormat.maximumFractionDigits).split('.').join(''))
  }

  private validateValueRange(value: number): number {
    return Math.min(Math.max(value, this.minValue), this.maxValue)
  }

  private applyFixedFractionFormat(number: number | null, forcedChange = false) {
    if (number != null) {
      number = this.validateStep(this.validateValueRange(number))
      if (this.options.formatStyle === NumberFormatStyle.Percent) {
        number *= 100
      }
    }
    this.format(this.numberFormat.format(number))
    if (number !== this.numberValue || forcedChange) {
      this.onChange?.(this.getValue())
    }
  }

  private format(value: string | null, hideNegligibleDecimalDigits = false) {
    if (value != null) {
      if (this.decimalSymbolInsertedAt !== undefined) {
        value = this.numberFormat.normalizeDecimalSeparator(value, this.decimalSymbolInsertedAt)
        this.decimalSymbolInsertedAt = undefined
      }
      const conformedValue = this.numberMask.conformToMask(value, this.formattedValue)
      let formattedValue
      if (typeof conformedValue === 'object') {
        const { numberValue, fractionDigits } = conformedValue
        let { maximumFractionDigits, minimumFractionDigits } = this.numberFormat
        if (this.focus) {
          minimumFractionDigits = hideNegligibleDecimalDigits
            ? fractionDigits.replace(/0+$/, '').length
            : Math.min(maximumFractionDigits, fractionDigits.length)
        } else if (Number.isInteger(numberValue) && !this.options.autoDecimalDigits && (this.options.precision === undefined || minimumFractionDigits === 0)) {
          minimumFractionDigits = maximumFractionDigits = 0
        }
        formattedValue =
          numberValue > this.toInteger(Math.abs(numberValue))
            ? this.formattedValue
            : this.numberFormat.format(numberValue, {
                useGrouping: this.options.useGrouping && !(this.focus && this.options.hideGroupingSeparatorOnFocus),
                minimumFractionDigits,
                maximumFractionDigits
              })
      } else {
        formattedValue = conformedValue
      }
      if (this.options.autoSign) {
        if (this.maxValue <= 0 && !this.numberFormat.isNegative(formattedValue) && this.numberFormat.parse(formattedValue) !== 0) {
          formattedValue = formattedValue.replace(this.numberFormat.prefix, this.numberFormat.negativePrefix)
        }
        if (this.minValue >= 0) {
          formattedValue = formattedValue.replace(this.numberFormat.negativePrefix, this.numberFormat.prefix)
        }
      }
      if (this.focus && this.options.hidePrefixOrSuffixOnFocus) {
        formattedValue = formattedValue
          .replace(this.numberFormat.negativePrefix, this.numberFormat.minusSymbol)
          .replace(this.numberFormat.prefix, '')
          .replace(this.numberFormat.suffix, '')
      }

      this.el.value = formattedValue
      this.numberValue = this.numberFormat.parse(formattedValue)
    } else {
      this.el.value = ''
      this.numberValue = null
    }
    this.formattedValue = this.el.value
    this.onInput?.(this.getValue())
  }

  private addEventListener(): void {
    this.el.addEventListener(
      'input',
      (e) => {
        const { value, selectionStart } = this.el
        const inputEvent = e as InputEvent
        if (selectionStart && inputEvent.data && DECIMAL_SEPARATORS.includes(inputEvent.data)) {
          this.decimalSymbolInsertedAt = selectionStart - 1
        }
        this.format(value)
        if (this.focus && selectionStart != null) {
          const getCaretPositionAfterFormat = () => {
            const { prefix, suffix, decimalSymbol, maximumFractionDigits, groupingSymbol } = this.numberFormat

            let caretPositionFromLeft = value.length - selectionStart
            const newValueLength = this.formattedValue.length
            if (
              this.formattedValue.substr(selectionStart, 1) === groupingSymbol &&
              count(this.formattedValue, groupingSymbol) === count(value, groupingSymbol) + 1
            ) {
              return newValueLength - caretPositionFromLeft - 1
            }

            if (decimalSymbol !== undefined && value.indexOf(decimalSymbol) !== -1) {
              const decimalSymbolPosition = value.indexOf(decimalSymbol) + 1
              if (Math.abs(newValueLength - value.length) > 1 && selectionStart <= decimalSymbolPosition) {
                return this.formattedValue.indexOf(decimalSymbol) + 1
              } else {
                if (!this.options.autoDecimalDigits && selectionStart > decimalSymbolPosition) {
                  if (this.numberFormat.onlyDigits(value.substr(decimalSymbolPosition)).length - 1 === maximumFractionDigits) {
                    caretPositionFromLeft -= 1
                  }
                }
              }
            }
            return this.options.hidePrefixOrSuffixOnFocus
              ? newValueLength - caretPositionFromLeft
              : Math.max(newValueLength - Math.max(caretPositionFromLeft, suffix.length), prefix.length)
          }
          this.setCaretPosition(getCaretPositionAfterFormat())
        }
      },
      { capture: true }
    )

    this.el.addEventListener('focus', () => {
      this.focus = true
      setTimeout(() => {
        const { value, selectionStart, selectionEnd } = this.el
        if (this.options.hideNegligibleDecimalDigitsOnFocus && value) {
          this.format(value, true)
        }
        if (selectionStart != null && selectionEnd != null && Math.abs(selectionStart - selectionEnd) > 0) {
          this.setCaretPosition(0, this.el.value.length)
        } else if (selectionStart != null) {
          const getCaretPositionOnFocus = () => {
            const { prefix, suffix, groupingSymbol } = this.numberFormat
            if (!this.options.hidePrefixOrSuffixOnFocus) {
              if (selectionStart >= value.length - suffix.length) {
                return this.formattedValue.length - suffix.length
              } else if (selectionStart < prefix.length) {
                return prefix.length
              }
            }
            let result = selectionStart
            if (this.options.hidePrefixOrSuffixOnFocus) {
              result -= prefix.length
            }
            if (this.options.hideGroupingSeparatorOnFocus) {
              result -= count(value.substring(0, selectionStart), groupingSymbol)
            }
            return result
          }
          this.setCaretPosition(getCaretPositionOnFocus())
        }
      })
    })

    this.el.addEventListener('blur', () => {
      this.focus = false
      this.applyFixedFractionFormat(this.numberValue)
    })

    this.el.addEventListener(
      'change',
      () => {
        this.onChange?.(this.getValue())
      },
      { capture: true }
    )
  }

  private setCaretPosition(start: number, end = start) {
    this.el.setSelectionRange(start, end)
  }
}
