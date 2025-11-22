import {defineType} from 'sanity'
export default defineType({
  name:'localeString', title:'Localized string',
  type:'object',
  fields:[
    {name:'en',type:'string',title:'English'},
    {name:'no',type:'string',title:'Norwegian'},
    {name:'ar',type:'string',title:'Arabic'},
    {name:'bn',type:'string',title:'Bengali'}
  ]
})
