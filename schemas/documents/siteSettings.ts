import {defineType} from 'sanity'
export default defineType({
  name:'siteSettings',title:'Site Settings',type:'document',
  fields:[
    {name:'siteTitle',type:'string'},
    {name:'tagline',type:'string'},
    {name:'logo',type:'image',options:{hotspot:true}},
    {name:'favicon',type:'image'},
    {name:'defaultSeoTitle',type:'string'},
    {name:'defaultSeoDescription',type:'text'},
    {name:'contactEmail',type:'string'},
    {name:'contactPhone',type:'string'},
    {name:'officeLocations',type:'array',of:[
      {type:'object',fields:[
        {name:'label',type:'string'},
        {name:'address',type:'text'},
        {name:'country',type:'string'}
      ]}
    ]},
    {name:'footerText',type:'localeText'}
  ]
})
