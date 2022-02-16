import About from '../../../src/views/About.vue'
import { shallowMount } from '@vue/test-utils';
describe('testing view about', () => {

  const wrapper = shallowMount(About)
  it('should render correctly', () => {
    expect(wrapper.get('h1').text()).toBe('This is an about page')
    expect(wrapper.html()).toMatchSnapshot()   
  });
});