import { shallowMount } from '@vue/test-utils'
import Header from '@/components/common/Header.vue'

describe('Header.vue', () => {
  it('render header', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('header.l-header')).toBeInstanceOf(Object)
  })
})
