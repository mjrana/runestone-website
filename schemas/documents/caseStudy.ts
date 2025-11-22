import {defineType} from 'sanity'
export default defineType({
  name:'caseStudy',title:'Case Study',type:'document',
  fields:[
    {name:'clientName',type:'string'},
    {name:'title',type:'localeString'},
    {name:'slug',type:'slug',options:{source:'title.en'}},
    {name:'sector',type:'string'},
    {name:'summary',type:'localeText'},
    {name:'challenge',type:'richText'},
    {name:'approach',type:'richText'},
    {name:'impact',type:'richText'},
    {name:'heroImage',type:'image',options:{hotspot:true}}
  ]
})
