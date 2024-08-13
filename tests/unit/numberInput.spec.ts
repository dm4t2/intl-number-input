// @vitest-environment jsdom
import { NumberFormatStyle } from '@/api'
import { beforeEach, describe, expect, it } from 'vitest'
import { NumberInput } from '@/numberInput'
import { fireEvent } from '@testing-library/dom'

describe('Number Input', () => {
  let el: HTMLInputElement

  beforeEach(() => {
    document.body.innerHTML = `<input type="text">`
    el = document.querySelector('input') as HTMLInputElement
  })

  describe('init', () => {
    describe('inputmode attribute', () => {
      it('should be "decimal" by default', () => {
        new NumberInput({
          el,
          options: { locale: 'en' }
        })
        expect(el.getAttribute('inputmode')).toBe('decimal')
      })

      it('should be "numeric" if autoDecimalDigits is active', () => {
        new NumberInput({
          el,
          options: { locale: 'en', autoDecimalDigits: true }
        })
        expect(el.getAttribute('inputmode')).toBe('numeric')
      })
    })
  })

  describe('setValue', () => {
    it('should update the input value', () => {
      const numberInput = new NumberInput({
        el,
        options: {
          locale: 'en',
          formatStyle: NumberFormatStyle.Currency,
          currency: 'EUR'
        }
      })
      numberInput.setValue(1)

      expect(el.value).toBe('€1')
    })

    it('should consider the value range', () => {
      const numberInput = new NumberInput({
        el,
        options: {
          locale: 'en',
          formatStyle: NumberFormatStyle.Percent,
          valueRange: { min: 0.2, max: 0.5 }
        }
      })
      numberInput.setValue(0.19)
      expect(el.value).toBe('20%')
      numberInput.setValue(0.2)
      expect(el.value).toBe('20%')
      numberInput.setValue(0.51)
      expect(el.value).toBe('50%')
    })

    it('should consider the precision', () => {
      const numberInput = new NumberInput({
        el,
        options: {
          locale: 'en',
          formatStyle: NumberFormatStyle.Percent,
          precision: { min: 0, max: 4 }
        }
      })
      numberInput.setValue(0.123456)
      expect(el.value).toBe('12.3457%')
      numberInput.setValue(0.09)
      expect(el.value).toBe('9%')
      numberInput.setValue(0.1)
      expect(el.value).toBe('10%')
    })
  })

  describe('increment', () => {
    it('should increment the current value by the smallest possible step depending on the used precision', () => {
      const numberInput = new NumberInput({
        el,
        options: { locale: 'en' }
      })
      numberInput.setValue(1)
      numberInput.increment()
      expect(el.value).toBe('1.001')
    })

    it('should consider a custom step', () => {
      const numberInput = new NumberInput({
        el,
        options: { locale: 'en', step: 2.5 }
      })
      numberInput.increment()
      expect(el.value).toBe('2.5')
    })
  })

  describe('on input', () => {
    it('should update the input value', () => {
      new NumberInput({
        el,
        options: {
          locale: 'en',
          formatStyle: NumberFormatStyle.Unit,
          unit: 'gigabit'
        }
      })
      fireEvent.input(el, { target: { value: '1234567' } })

      expect(el.value).toBe('1,234,567 Gb')
    })

    it('should consider the precision when updating input value', () => {
      new NumberInput({
        el,
        options: {
          locale: 'en',
          formatStyle: NumberFormatStyle.Percent,
          precision: { min: 0, max: 4 }
        }
      })

      fireEvent.input(el, { target: { value: '10.12345678' } })
      expect(el.value).toBe('10.1234%')

      fireEvent.input(el, { target: { value: '10.12' } })
      expect(el.value).toBe('10.12%')

      fireEvent.input(el, { target: { value: '10' } })
      expect(el.value).toBe('10%')
    })
  })

  describe('on blur', () => {
    it('should format the value, considering the precision', () => {
      new NumberInput({
        el,
        options: {
          locale: 'en',
          formatStyle: NumberFormatStyle.Percent,
          precision: { min: 0, max: 4 }
        }
      })

      fireEvent.input(el, { target: { value: '10.1234' } })
      fireEvent.blur(el)

      expect(el.value).toBe('10.1234%')
    })
  })

})
