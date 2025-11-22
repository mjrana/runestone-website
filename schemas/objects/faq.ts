import {defineType} from 'sanity'
export default defineType({
  name:'faqSection', title:'FAQ', type:'object',
  fields:[
    {name:'title',type:'localeString',title:'Title'},
    {name:'items',type:'array',title:'Items',of:[
      {type:'object',fields:[
        {name:'question',type:'localeString',title:'Question'},
        {name:'answer',type:'localeText',title:'Answer'}
      ]}
    ]}
  ]
})
