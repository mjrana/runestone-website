import {defineType} from 'sanity'
export default defineType({
  name:'service',title:'Service',type:'document',
  fields:[
    {name:'name',type:'localeString'},
    {name:'slug',type:'slug',options:{source:'name.en'}},
    {name:'shortDescription',type:'localeText'},
    {name:'hero',type:'hero'},
    {name:'body',type:'richText'},
    {name:'category',type:'string',options:{list:[
      {title:'AI Strategy & Roadmapping',value:'ai-strategy'},
      {title:'AI Governance & DPO',value:'ai-governance'},
      {title:'Data Platforms & MLOps',value:'data-platforms'},
      {title:'Nearshore Pods',value:'nearshore'}
    ]}}
  ]
})
