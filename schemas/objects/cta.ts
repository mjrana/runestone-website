import {defineType} from 'sanity'
export default defineType({
  name:'ctaSection', title:'Call to action', type:'object',
  fields:[
    {name:'title',type:'localeString',title:'Title'},
    {name:'body',type:'localeText',title:'Body'},
    {name:'ctaLabel',type:'localeString',title:'Button label'},
    {name:'ctaHref',type:'string',title:'URL'}
  ]
})
