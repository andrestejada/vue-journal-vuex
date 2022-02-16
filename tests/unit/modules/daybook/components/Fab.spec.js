import Fab from '@/modules/daybook/components/Fab.vue'
import { shallowMount } from '@vue/test-utils';

describe('Fab Component', () => {
  it('should be show the icon vy default', () => {
    const wrapper = shallowMount(Fab)
    expect(wrapper.get('i').classes()).toContain('fa-plus')
  });

  it('should be show the icon by argumnet fa-circle', () => {
    const wrapper = shallowMount(Fab,{props:{icon:'fa-save'}})
    expect(wrapper.get('i').classes()).toContain('fa-save')
  });

  it('should emit the event on:click when you make click', () => {
    const wrapper = shallowMount(Fab)
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('on:click').length).toBe(1)
    expect(wrapper.emitted('on:click')).toHaveLength(1)
  });
});