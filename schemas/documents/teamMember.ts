import {defineType} from 'sanity'
export default defineType({
  name:'teamMember',title:'Team Member',type:'document',
  fields:[
    {name:'name',type:'string'},
    {name:'role',type:'localeString'},
    {name:'bio',type:'localeText'},
    {name:'photo',type:'image',options:{hotspot:true}},
    {name:'linkedin',type:'url'},
    {name:'email',type:'string'},
    {name:'order',type:'number'}
  ]
})
