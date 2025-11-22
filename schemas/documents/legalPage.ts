import {defineType} from 'sanity'
export default defineType({
  name:'legalPage',title:'Legal Page',type:'document',
  fields:[
    {name:'kind',type:'string',options:{list:[
      {title:'Privacy Policy',value:'privacy'},
      {title:'Terms of Use',value:'terms'},
      {title:'Cookies',value:'cookies'}
    ]}},
    {name:'slug',type:'slug',options:{source:'kind'}},
    {name:'title',type:'localeString'},
    {name:'body',type:'richText'}
  ]
})
