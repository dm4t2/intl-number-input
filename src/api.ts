export interface NumberInputConstructorArgs {
  el: HTMLInputElement
  options: NumberInputOptions
  onInput?(value: NumberInputValue): void

  onChange?(value: NumberInputValue): void
}

export interface NumberInputValue {
  number: number | null
  formatted: string | null
}

export interface NumberRange {
  min?: number
  max?: number
}

export enum NumberFormatStyle {
  Decimal = 'decimal',
  Currency = 'currency',
  Unit = 'unit',
  Percent = 'percent'
}

export enum CurrencyDisplay {
  Symbol = 'symbol',
  NarrowSymbol = 'narrowSymbol',
  Code = 'code',
  Name = 'name'
}

export enum UnitDisplay {
  Short = 'short',
  Narrow = 'narrow',
  Long = 'long'
}

export interface NumberInputOptions {
  locale?: string
  formatStyle: NumberFormatStyle
  currency?: string
  currencyDisplay?: CurrencyDisplay
  unit?: string
  unitDisplay?: UnitDisplay
  exportValueAsInteger?: boolean
  hidePrefixOrSuffixOnFocus?: boolean
  hideGroupingSeparatorOnFocus?: boolean
  hideNegligibleDecimalDigitsOnFocus?: boolean
  precision?: number | NumberRange
  autoDecimalDigits?: boolean
  autoSign?: boolean
  valueRange?: NumberRange
  step?: number
  useGrouping?: boolean
}
