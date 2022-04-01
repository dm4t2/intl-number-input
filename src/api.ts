/**
 * The {@link NumberInput} constructor arguments.
 *
 * @public
 */
export interface NumberInputConstructorArgs {
  /**
   * The HTML input element to be used.
   */
  el: HTMLInputElement
  /**
   * The options of the number input.
   */
  options: NumberInputOptions
  /**
   * Callback function invoked on input.
   *
   * @param value - The current value.
   */
  onInput?(value: NumberInputValue): void
  /**
   * Callback function invoked each time the value is changed.
   *
   * @param value - The current value.
   */
  onChange?(value: NumberInputValue): void
}

/**
 * Value model.
 *
 * @public
 */
export interface NumberInputValue {
  /**
   * The number value.
   */
  number: number | null
  /**
   * The formatted value.
   */
  formatted: string | null
}

/**
 * Number Range.
 *
 * @public
 */
export interface NumberRange {
  /**
   * Minimum value.
   */
  min?: number
  /**
   * Maximum value.
   */
  max?: number
}

/**
 * Available format styles.
 *
 * @public
 */
export enum NumberFormatStyle {
  /**
   * Use currency formatting.
   */
  Currency = 'currency',
  /**
   * Use plain number formatting (default).
   */
  Decimal = 'decimal',
  /**
   * Use percent formatting
   */
  Percent = 'percent',
  /**
   * Use unit formatting.
   */
  Unit = 'unit'
}

/**
 * Available currency display options when using  {@link NumberFormatStyle.Currency}.
 *
 * @public
 */
export enum CurrencyDisplay {
  /**
   * Use a localized currency symbol such as "€" (default).
   */
  Symbol = 'symbol',
  /**
   * Use a narrow format symbol ("$100" rather than "US$100").
   */
  NarrowSymbol = 'narrowSymbol',
  /**
   * Use the ISO currency code.
   */
  Code = 'code',
  /**
   * Use a localized currency name such as "dollar".
   */
  Name = 'name'
}

/**
 * Available unit display options when using {@link NumberFormatStyle.Unit}.
 *
 * @public
 */
export enum UnitDisplay {
  /**
   * Use a short formatting, for example "1024B" (default).
   */
  Short = 'short',
  /**
   * Use a narrow formatting, for example "1024 byte".
   */
  Narrow = 'narrow',
  /**
   * Use a long formatting, for example "1024 bytes".
   */
  Long = 'long'
}

/**
 * The number input options.
 *
 * @public
 */
export interface NumberInputOptions {
  /**
   * A {@link https://tools.ietf.org/html/bcp47|BCP 47} language tag.
   * Default value is `undefined` (use the default locale of the Browser)
   *
   * @example `"en"` or `"de-DE"`
   */
  locale?: string
  /**
   * The format style to use.
   * Default value is `"decimal"`.
   */
  formatStyle?: NumberFormatStyle
  /**
   * A {@link https://en.wikipedia.org/wiki/ISO_4217|ISO 4217} currency code, which is required when using {@link NumberFormatStyle.Currency}.
   *
   * @example `"EUR"`
   */
  currency?: string
  /**
   * How to display the currency when using {@link NumberFormatStyle.Currency}.
   */
  currencyDisplay?: CurrencyDisplay
  /**
   * A {@link https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier|unit identifier}, which is required when using {@link NumberFormatStyle.Unit}.
   * Pairs of simple units can be concatenated with "-per-" to make a compound unit.
   *
   * @example `"byte"` (simple unit) or `"byte-per-second"` (compound unit).
   */
  unit?: string
  /**
   * How to display the unit when using {@link NumberFormatStyle.Currency}.
   */
  unitDisplay?: UnitDisplay
  /**
   * Whether the number value should be exported as integer instead of float value.
   * Default value is `false`.
   */
  exportValueAsInteger?: boolean
  /**
   * Whether to hide the prefix or suffix on focus.
   * Default value is `true`.
   */
  hidePrefixOrSuffixOnFocus?: boolean
  /**
   * Whether to hide the grouping separator on focus.
   * Default value is `true`.
   */
  hideGroupingSeparatorOnFocus?: boolean
  /**
   * Whether to hide negligible decimal digits on focus.
   * Default value is `true`.
   */
  hideNegligibleDecimalDigitsOnFocus?: boolean
  /**
   * The number of displayed decimal digits.
   * Default value is `undefined` (use the default of the {@link NumberFormatStyle}, decimal digits will be hidden for integer numbers).
   * Must be between 0 and 15.
   */
  precision?: number | NumberRange
  /**
   * Whether the decimal symbol is inserted automatically, using the last inputted digits as decimal digits.
   * Default is `false` (the decimal symbol needs to be inserted manually).
   */
  autoDecimalDigits?: boolean
  /**
   * Whether the minus symbol is automatically inserted or prevented to be inputted depending on the configured `valueRange`.
   * Default is `true`.
   */
  autoSign?: boolean
  /**
   * The range of accepted values.
   * Default is `undefined` (no value range).
   * The validation is triggered on blur and automatically sets the respective threshold if out of range.
   */
  valueRange?: NumberRange
  /**
   * Step size which is used to {@link NumberInput.increment|increment} or {@link NumberInput.decrement|decrement} the value.
   * Default is `1`.
   */
  step?: number
  /**
   * Whether to use grouping separators such as thousands/lakh/crore separators.
   * Default is `true`.
   */
  useGrouping?: boolean
}
