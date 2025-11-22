import {defineType} from 'sanity'
export default defineType({
  name:'section', title:'Page section', type:'object',
  fields:[
    {name:'kind',type:'string',title:'Type',
     options:{list:[
       {title:'Rich text',value:'richText'},
       {title:'Metrics',value:'metrics'},
       {title:'Logo cloud',value:'logoCloud'},
       {title:'FAQ',value:'faq'},
       {title:'Hero override',value:'hero'}
     ],layout:'radio'}
    },
    {name:'richText',type:'richText',hidden:({parent})=>parent?.kind!=='richText'},
    {name:'metricsBlock',type:'metrics',hidden:({parent})=>parent?.kind!=='metrics'},
    {name:'logoCloudBlock',type:'logoCloud',hidden:({parent})=>parent?.kind!=='logoCloud'},
    {name:'faqBlock',type:'faqSection',hidden:({parent})=>parent?.kind!=='faq'},
    {name:'heroBlock',type:'hero',hidden:({parent})=>parent?.kind!=='hero'}
  ]
})
