// import daybookRouter from "../../../../../src/modules/daybook/router";
import daybookRouter from "@/modules/daybook/router";

describe("testing in the router module daybook", () => {
  it("route should be have this config ", async() => {
    expect(daybookRouter).toMatchObject({
      name: "daybook",
      component:expect.any(Function),
      children: [
        {
          path: "",
          name: "no-entry",
          component:expect.any(Function),
        },
        {
          path: ":id",
          name: "entry",
          component:expect.any(Function),
          props: expect.any(Function),
        },
      ],
    });

    const promiseRoutes=[];
    daybookRouter.children.forEach( child=> promiseRoutes.push(child.component()));
    const routes =( await Promise.all(promiseRoutes)).map(r=> r.default.name)
    expect(routes).toContain('EntryView')
    expect(routes).toContain('NoEntrySelected')

  });

  it('should be return the id of the route', () => {
    const route = {
      params:{
        id:'abc-123'
      }
    };

    const entryRoute = daybookRouter.children.find( route=> route.name==='entry');
    expect(entryRoute.props(route)).toEqual({
      id:'abc-123'
    })
    
  });
});
