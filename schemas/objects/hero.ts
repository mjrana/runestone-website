import {defineType} from 'sanity'
export default defineType({
  name:'hero', title:'Hero section', type:'object',
  fields:[
    {name:'title',type:'localeString',title:'Title'},
    {name:'subtitle',type:'localeText',title:'Subtitle'},
    {name:'variant',type:'string',title:'Layout variant',
     options:{list:[
       {title:'Left text, right image',value:'left-text'},
       {title:'Centered',value:'centered'}],layout:'radio'},
     initialValue:'left-text'
    },
    {name:'image',type:'image',title:'Image',options:{hotspot:true}},
    {name:'primaryCtaLabel',type:'localeString',title:'Primary CTA label'},
    {name:'primaryCtaHref',type:'string',title:'Primary CTA link'},
    {name:'secondaryCtaLabel',type:'localeString',title:'Secondary CTA label'},
    {name:'secondaryCtaHref',type:'string',title:'Secondary CTA link'}
  ]
})
