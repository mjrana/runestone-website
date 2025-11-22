import {defineType} from 'sanity'
export default defineType({
  name:'localeText', title:'Localized text', type:'object',
  fields:[
    {name:'en',type:'text',title:'English'},
    {name:'no',type:'text',title:'Norwegian'},
    {name:'ar',type:'text',title:'Arabic'},
    {name:'bn',type:'text',title:'Bengali'}
  ]
})
