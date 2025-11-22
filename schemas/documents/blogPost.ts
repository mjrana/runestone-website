import {defineType} from 'sanity'
export default defineType({
  name:'blogPost',title:'Blog Post',type:'document',
  fields:[
    {name:'title',type:'localeString'},
    {name:'slug',type:'slug',options:{source:'title.en'}},
    {name:'excerpt',type:'localeText'},
    {name:'author',type:'reference',to:[{type:'teamMember'}]},
    {name:'publishedAt',type:'datetime'},
    {name:'body',type:'richText'},
    {name:'coverImage',type:'image',options:{hotspot:true}},
    {name:'tags',type:'array',of:[{type:'string'}]}
  ]
})
