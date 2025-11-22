import {defineType} from 'sanity'
export default defineType({
  name:'page',title:'Page',type:'document',
  fields:[
    {name:'internalTitle',type:'string'},
    {name:'slug',type:'slug',options:{source:'internalTitle'}},
    {name:'title',type:'localeString'},
    {name:'hero',type:'hero'},
    {name:'sections',type:'array',of:[{type:'section'}]}
  ]
})
