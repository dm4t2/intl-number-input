<template>
  <div class="grid gap-y-4 md:grid-cols-2 md:gap-x-8 items-center my-8">
    <NumberInput
      v-model="value"
      :options="options"
      class="*form-input"
    />
    <div>
      Number value:
      <code class="ml-2">{{ value != null ? value : 'null' }}</code>
    </div>
  </div>
  <div class="flex items-center justify-between mb-2">
    <span class="text-2xl font-bold">Options</span>
    <div>
      <button
        class="transition-all bg-white hover:bg-gray-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-300 rounded shadow focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
        @click="exportDialogVisible = true"
      >
        Export
      </button>
      <Dialog v-model="exportDialogVisible">
        <pre
          class="white--text m-0"
          style="margin: 0"
          >{{ stringifiedOptions }}</pre
        >
      </Dialog>
    </div>
  </div>
  <hr class="mb-8" />
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8">
    <div>
      <OptionSection
        v-model="localeEnabled"
        label="Locale"
      >
        <select
          v-model="locale"
          :disabled="!localeEnabled"
          class="*form-input *form-select"
        >
          <option
            v-for="locale in locales"
            :key="locale"
          >
            {{ locale }}
          </option>
        </select>
      </OptionSection>
      <OptionSection label="Format Style">
        <select
          v-model="formatStyle"
          class="*form-input *form-select"
        >
          <option
            v-for="formatStyle in formatStyleOptions"
            :key="formatStyle.value"
            :value="formatStyle.value"
          >
            {{ formatStyle.label }}
          </option>
        </select>
      </OptionSection>
      <OptionSection
        v-if="formatStyle === 'currency'"
        label="Currency"
      >
        <select
          v-model="currency"
          class="*form-input *form-select"
        >
          <option
            v-for="currency in currencies"
            :key="currency"
          >
            {{ currency }}
          </option>
        </select>
      </OptionSection>
      <OptionSection
        v-if="formatStyle === 'currency'"
        label="Currency Display"
        description="How to display the currency in the formatting."
      >
        <select
          v-model="currencyDisplay"
          class="*form-input *form-select"
        >
          <option
            v-for="currencyDisplay in currencyDisplays"
            :key="currencyDisplay.value"
            :value="currencyDisplay.value"
          >
            {{ currencyDisplay.label }}
          </option>
        </select>
      </OptionSection>
      <OptionSection
        v-if="formatStyle === 'unit'"
        label="Unit"
      >
        <select
          v-model="unit"
          class="*form-input *form-select"
        >
          <option
            v-for="unit in units"
            :key="unit"
          >
            {{ unit }}
          </option>
        </select>
      </OptionSection>
      <OptionSection
        v-if="formatStyle === 'unit'"
        label="Unit Display"
        description="How to display the unit in the formatting."
      >
        <select
          v-model="unitDisplay"
          class="*form-input *form-select"
        >
          <option
            v-for="unitDisplay in unitDisplays"
            :key="unitDisplay.value"
            :value="unitDisplay.value"
          >
            {{ unitDisplay.label }}
          </option>
        </select>
      </OptionSection>
      <OptionSection
        v-model="useGrouping"
        label="Use Grouping"
        description="Whether to use grouping separators such as thousands/lakh/crore separators."
      />
      <OptionSection
        label="Distraction Free Input"
        description="Hide various parts of the formatting on focus for easier input."
      >
        <Checkbox
          v-model="hidePrefixOrSuffixOnFocus"
          label="Hide prefix/suffix"
          class="mb-1"
        />
        <Checkbox
          v-model="hideGroupingSeparatorOnFocus"
          label="Hide grouping separator"
          class="mb-1"
        />
        <Checkbox
          v-model="hideNegligibleDecimalDigitsOnFocus"
          :disabled="!hideNegligibleDecimalDigitsOnFocusEnabled"
          label="Hide negligible decimal digits"
        />
      </OptionSection>
    </div>
    <div>
      <OptionSection
        v-model="valueRangeEnabled"
        label="Value Range"
        description="The validation is triggered on blur and automatically sets the respective threshold if out of range."
      >
        <div class="flex items-center space-x-4">
          <input
            v-model.number="minValue"
            :disabled="!valueRangeEnabled"
            type="number"
            placeholder="Min"
            class="*form-input min-w-0"
          />
          <span class="text-center">to</span>
          <input
            v-model.number="maxValue"
            :disabled="!valueRangeEnabled"
            type="number"
            placeholder="Max"
            class="*form-input min-w-0"
          />
        </div>
      </OptionSection>
      <OptionSection
        v-model="precisionEnabled"
        label="Precision"
        description="Override the number of displayed decimal digits."
      >
        <div>
          <Checkbox
            v-model="precisionRangeEnabled"
            label="Use range"
            :disabled="!precisionEnabled"
            class="mb-2"
          />
          <div
            v-if="precisionRangeEnabled"
            class="flex items-center space-x-4"
          >
            <select
              v-model="precisionRangeMinValue"
              :disabled="!precisionEnabled"
              class="*form-input *form-select"
            >
              <option
                v-for="value in precisionRangeMinOptions"
                :key="value"
                :value="value"
              >
                {{ value }}
              </option>
            </select>
            <span class="text-center">to</span>
            <select
              v-model="precisionRangeMaxValue"
              :disabled="!precisionEnabled"
              class="*form-input *form-select"
            >
              <option
                v-for="value in precisionRangeMaxOptions"
                :key="value"
                :value="value"
              >
                {{ value }}
              </option>
            </select>
          </div>
          <select
            v-else
            v-model="precision"
            :disabled="!precisionEnabled"
            class="*form-input *form-select"
          >
            <option
              v-for="value in precisionOptions"
              :key="value"
              :value="value"
            >
              {{ value }}
            </option>
          </select>
        </div>
      </OptionSection>
      <OptionSection
        v-model="autoDecimalDigits"
        label="Auto Decimal Digits"
        description="Whether the decimal symbol is inserted automatically, using the last inputted digits as decimal digits."
      />
      <OptionSection
        v-model="exportValueAsInteger"
        label="Export Value As Integer"
        description="Whether the number value should be exported as integer instead of a float value depending on the configured precision."
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, watch } from 'vue'
import Dialog from './Dialog.vue'
import stringifyObject from 'stringify-object'
import OptionSection from './OptionSection.vue'
import Checkbox from './Checkbox.vue'
import NumberInput from './NumberInput.vue'

export default defineComponent({
  name: 'Demo',
  components: {
    NumberInput,
    Checkbox,
    OptionSection,
    Dialog
  },
  setup() {
    const range = (from: number, to: number) =>
      Array(to - from)
        .fill(from)
        .map((x, y) => x + y)
    const state = reactive({
      exportDialogVisible: false,
      value: 1234.5,
      formatStyle: 'decimal',
      formatStyleOptions: [
        { value: 'decimal', label: 'Decimal' },
        { value: 'currency', label: 'Currency' },
        { value: 'unit', label: 'Unit' },
        { value: 'percent', label: 'Percent' }
      ],
      localeEnabled: false,
      locale: 'de-DE',
      locales: ['de-DE', 'de-CH', 'en-US', 'en-IN', 'nl-NL', 'sv-SE', 'fr-FR', 'es-ES', 'pt-PT', 'pt-BR', 'zh-ZH', 'ja-JP', 'ar-SA', 'fa-IR'],
      currency: 'EUR',
      currencyDisplay: 'symbol',
      currencies: ['EUR', 'USD', 'JPY', 'GBP', 'BRL', 'INR', 'CNY', 'JPY', 'SAR', 'IRR'],
      currencyDisplays: [
        { value: 'symbol', label: 'Symbol' },
        { value: 'narrowSymbol', label: 'Narrow symbol' },
        { value: 'code', label: 'Code' },
        { value: 'name', label: 'Name' }
      ],
      unit: 'byte',
      unitDisplay: 'short',
      units: [
        'acre',
        'bit',
        'byte',
        'byte-per-second',
        'celsius',
        'centimeter',
        'day',
        'degree',
        'fahrenheit',
        'fluid-ounce',
        'foot',
        'gallon',
        'gigabit',
        'gigabyte',
        'gram',
        'hectare',
        'hour',
        'inch',
        'kilobit',
        'kilobyte',
        'kilogram',
        'kilometer',
        'liter',
        'megabit',
        'megabyte',
        'meter',
        'mile',
        'mile-scandinavian',
        'milliliter',
        'millimeter',
        'millisecond',
        'minute',
        'month',
        'ounce',
        'percent',
        'petabyte',
        'pound',
        'second',
        'stone',
        'terabit',
        'terabyte',
        'week',
        'yard',
        'year'
      ],
      unitDisplays: [
        { value: 'short', label: 'Short' },
        { value: 'narrow', label: 'Narrow' },
        { value: 'long', label: 'Long' }
      ],
      hidePrefixOrSuffixOnFocus: true,
      hideGroupingSeparatorOnFocus: true,
      hideNegligibleDecimalDigitsOnFocusEnabled: true,
      hideNegligibleDecimalDigitsOnFocus: true,
      precisionEnabled: false,
      precisionRangeEnabled: false,
      precisionRangeMinValue: 2,
      precisionRangeMaxValue: 5,
      precision: 2,
      precisionOptions: computed(() => range(1, 16)),
      precisionRangeMinOptions: computed(() => range(0, state.precisionRangeMaxValue + 1)),
      precisionRangeMaxOptions: computed(() => range(state.precisionRangeMinValue, 16)),
      valueRangeEnabled: false,
      minValue: undefined,
      maxValue: undefined,
      autoDecimalDigitsEnabled: true,
      autoDecimalDigits: false,
      exportValueAsInteger: false,
      useGrouping: true,
      options: computed(() => {
        return {
          formatStyle: state.formatStyle,
          locale: state.localeEnabled ? state.locale : undefined,
          currency: state.formatStyle === 'currency' ? state.currency : undefined,
          currencyDisplay: state.formatStyle === 'currency' ? state.currencyDisplay : undefined,
          unit: state.formatStyle === 'unit' ? state.unit : undefined,
          unitDisplay: state.formatStyle === 'unit' ? state.unitDisplay : undefined,
          valueRange: state.valueRangeEnabled ? { min: state.minValue, max: state.maxValue } : undefined,
          precision: state.precisionEnabled
            ? state.precisionRangeEnabled
              ? { min: state.precisionRangeMinValue, max: state.precisionRangeMaxValue }
              : state.precision
            : undefined,
          hidePrefixOrSuffixOnFocus: state.hidePrefixOrSuffixOnFocus,
          hideGroupingSeparatorOnFocus: state.hideGroupingSeparatorOnFocus,
          hideNegligibleDecimalDigitsOnFocus: state.hideNegligibleDecimalDigitsOnFocus,
          autoDecimalDigits: state.autoDecimalDigits,
          exportValueAsInteger: state.exportValueAsInteger,
          useGrouping: state.useGrouping
        }
      }),
      stringifiedOptions: computed(() => stringifyObject(state.options))
    })

    watch(
      () => state.autoDecimalDigits,
      (value) => {
        state.hideNegligibleDecimalDigitsOnFocusEnabled = !value
        state.hideNegligibleDecimalDigitsOnFocus = !value
      }
    )

    return toRefs(state)
  }
})
</script>
