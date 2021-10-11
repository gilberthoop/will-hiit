import { mount } from '@vue/test-utils'
import Dashboard from '@/views/Dashboard.vue'

describe('Dashboard.vue', () => {
  it('renders tab 1 view', () => {
    const wrapper = mount(Dashboard)
    expect(wrapper.text()).toMatch('Dashboard page')
  })
})
