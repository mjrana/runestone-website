import {defineType} from 'sanity'
export default defineType({
  name:'navigation',title:'Navigation',type:'document',
  fields:[
    {name:'items',type:'array',of:[
      {type:'object',fields:[
        {name:'label',type:'localeString',title:'Label'},
        {name:'href',type:'string',title:'URL'}
      ]}
    ]}
  ]
})
