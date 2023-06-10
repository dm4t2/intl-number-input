# Changelog

## [1.4.0](https://github.com/dm4t2/intl-number-input/compare/v1.3.1...v1.4.0) (2023-06-10)


### Features

* add `destroy` function for removing event listeners (closes [#18](https://github.com/dm4t2/intl-number-input/issues/18)) ([d604433](https://github.com/dm4t2/intl-number-input/commit/d60443317f193d9bfeef714ecd49b3698f15687e))

## [1.3.1](https://github.com/dm4t2/intl-number-input/compare/v1.3.0...v1.3.1) (2022-10-24)


### Bug Fixes

* update bundle file extensions (closes [#15](https://github.com/dm4t2/intl-number-input/issues/15)) ([8eb38a3](https://github.com/dm4t2/intl-number-input/commit/8eb38a3c977150217954621eda2d5f00c2dc1a2c))

## [1.3.0](https://www.github.com/dm4t2/intl-number-input/compare/v1.2.1...v1.3.0) (2022-04-01)


### Features

* add API docs ([108f843](https://www.github.com/dm4t2/intl-number-input/commit/108f8435dd9ddcb8fcf87362d9cea329d6037bdb))

### [1.2.1](https://www.github.com/dm4t2/intl-number-input/compare/v1.2.0...v1.2.1) (2022-03-16)


### Bug Fixes

* fix pluralization when using full currency/unit names ([fab0e93](https://www.github.com/dm4t2/intl-number-input/commit/fab0e93495ab741f37396f5d4aae6bb709d02b07))
* improve detection of decimal/grouping separator ([291d841](https://www.github.com/dm4t2/intl-number-input/commit/291d841a09394924368e160b39cca167db2c1182))

## [1.2.0](https://www.github.com/dm4t2/intl-number-input/compare/v1.1.1...v1.2.0) (2021-11-08)


### Features

* **formatStyle:** use decimal as default ([b87cd94](https://www.github.com/dm4t2/intl-number-input/commit/b87cd947f18edd5d08105e3dcbaaae918de285c4))
* support precision range ([#5](https://www.github.com/dm4t2/intl-number-input/issues/5)) ([3bdc5c4](https://www.github.com/dm4t2/intl-number-input/commit/3bdc5c41fd6d610c859019c8a75f62bbbd729720))

### [1.1.1](https://www.github.com/dm4t2/intl-number-input/compare/v1.1.0...v1.1.1) (2021-11-04)


### Bug Fixes

* **autoDecimalDigits:** use the maximumFractionDigits of the number format ([18cfb28](https://www.github.com/dm4t2/intl-number-input/commit/18cfb28da6152b815c8c6b2a4820c5175c1042c8))
* **percent formatStyle:** parsing causes accuracy issues with higher precisions ([2b2f8c3](https://www.github.com/dm4t2/intl-number-input/commit/2b2f8c3bde1316d2b20d9a287bd0c1d7b9465af6))

## [1.1.0](https://www.github.com/dm4t2/intl-number-input/compare/v1.0.0...v1.1.0) (2021-10-30)


### Features

* add new options `currencyDisplay` and `unitDisplay` ([ce38d4e](https://www.github.com/dm4t2/intl-number-input/commit/ce38d4ec12a302258c6347f143d85e43477f62bf))


### Bug Fixes

* decimal/grouping separator not detected in percent format style ([bb81ba0](https://www.github.com/dm4t2/intl-number-input/commit/bb81ba03130a1ed4fee733cd181483ac110bdf7e))
* prevent caret position from jumping to the end ([73904c2](https://www.github.com/dm4t2/intl-number-input/commit/73904c208db8e1ca982a209e29d5d175cb4aeeed))
* prevent input of too large numbers ([9283033](https://www.github.com/dm4t2/intl-number-input/commit/928303320af0b670a731b6fd753e48904c1aac69))
* set correct caret position on focus when using `autoDecimalDigits` ([549fa48](https://www.github.com/dm4t2/intl-number-input/commit/549fa484d59866429573e9cca0f757c3745b41b8))

## 1.0.0 (2021-10-16)


### Features

* add percent format style ([#1](https://www.github.com/dm4t2/intl-number-input/issues/1)) ([3035d1e](https://www.github.com/dm4t2/intl-number-input/commit/3035d1ea8b6f0ee303dd843b098c7b661a37052b))
