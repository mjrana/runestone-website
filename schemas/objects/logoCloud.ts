import {defineType} from 'sanity'
export default defineType({
  name:'logoCloud', title:'Client logos', type:'object',
  fields:[
    {name:'title',type:'localeString',title:'Title'},
    {name:'logos',type:'array',of:[
      {type:'object',fields:[
        {name:'name',type:'string',title:'Client name'},
        {name:'logo',type:'image',options:{hotspot:true}}
      ]}
    ]}
  ]
})
