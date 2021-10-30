# Config Reference

The following options can be passed as an object literal to the `NumberInput` constructor.

### locale

A [BCP 47](https://tools.ietf.org/html/bcp47) language tag (for example `"en"` or `"de-DE"`). Default is `undefined` (use the default locale of the Browser).

### formatStyle

The formatting style to use. Possible values are:

- `"decimal"` for plain number formatting (**default**)
- `"currency"` for currency formatting
- `"percent"` for percent formatting
- `"unit"` for unit formatting

### currency

A [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, for example `"USD"` or `"EUR"`, which is required when using `"currency"` as `formatStyle`.

### currencyDisplay

How to display the currency when using `"currency"` as `formatStyle`. Possible values are:

- `"symbol"` to use a localized currency symbol such as "€" (**default**)
- `"narrowSymbol"` to use a narrow format symbol ("$100" rather than "US$100")
- `"code"` to use the ISO currency code
- `"name"` to use a localized currency name such as "dollar"

### unit

A [unit identifier](https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier), which is required when using `"unit"` as `formatStyle`. Pairs of simple units can be concatenated with "-per-" to make a compound unit.

### unitDisplay

How to display the unit when using `"unit"` as `formatStyle`. Possible values are:

- `"short"` (**default**, for example "1024B")
- `"narrow"` (for example "1024 byte")
- `"long"` (for example "1024 bytes")

### precision

The number of displayed decimal digits. Default is `undefined` (use the default of the `formatStyle`, decimal digits will be hidden for integer numbers). Must be between 0 and 15.

### autoDecimalDigits

Whether the decimal symbol is inserted automatically, using the last inputted digits as decimal digits. Default is `false` (the decimal symbol needs to be inserted manually).

### hidePrefixOrSuffixOnFocus

Whether to hide the prefix or suffix on focus. Default is `true`.

### hideGroupingSeparatorOnFocus

Whether to hide the grouping separator on focus. Default is `true`.

### hideNegligibleDecimalDigitsOnFocus

Whether to hide negligible decimal digits on focus. Default is `true`.

### exportValueAsInteger

Whether the number value should be exported as integer instead of float value. Default is `false`.

### valueRange

The range of accepted values as object `{min, max}`. Default is `undefined` (no value range). The validation is triggered on blur and automatically sets the respective threshold if out of range.

### autoSign

Whether the minus symbol is automatically inserted or prevented to be inputted depending on the configured `valueRange`. Default is `true`.

### useGrouping

Whether to use grouping separators such as thousands/lakh/crore separators.
