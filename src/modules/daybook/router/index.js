export default {
  name:'daybook',
  component:()=>import('../layouts/DaybookLayout.vue'),
  children:[
    {
      path:'',
      name:'no-entry',
      component:()=> import('../views/NoEntrySelected.vue')
    },
    {
      path:':id',
      name:'entry',
      component:()=> import('../views/EntryView.vue'),
      props:(route)=>{
        return{
          id:route.params.id
        }
      }
    },
  ]
}