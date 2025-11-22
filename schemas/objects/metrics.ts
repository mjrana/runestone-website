import {defineType} from 'sanity'
export default defineType({
  name:'metrics', title:'Metrics grid', type:'object',
  fields:[
    {name:'title',type:'localeString',title:'Title'},
    {name:'items',type:'array',title:'Metrics',of:[
      {type:'object',fields:[
        {name:'label',type:'localeString',title:'Label'},
        {name:'value',type:'string',title:'Value'},
        {name:'description',type:'localeText',title:'Description'}
      ]}
    ]}
  ]
})
