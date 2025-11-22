import {defineType} from 'sanity'
export default defineType({
  name:'homePage',title:'Homepage',type:'document',
  fields:[
    {name:'title',type:'localeString',title:'Title'},
    {name:'hero',type:'hero'},
    {name:'sections',type:'array',of:[{type:'section'}]}
  ]
})
