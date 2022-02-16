import { shallowMount } from "@vue/test-utils";
import Home from "../../../src/views/Home.vue";
describe("testing in the home view", () => {
  
  it("testing the route to have been call", () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = shallowMount(Home,{
      global:{
        mocks:{
          $router:mockRouter
        }
      }
    });

    wrapper.find('button').trigger('click');
    expect(mockRouter.push).toHaveBeenCalled()
    expect(mockRouter.push).toHaveBeenCalledWith({name:'no-entry'})
    

  });
});
