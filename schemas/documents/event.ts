import {defineType} from 'sanity'
export default defineType({
  name:'event',title:'Event',type:'document',
  fields:[
    {name:'title',type:'localeString'},
    {name:'slug',type:'slug',options:{source:'title.en'}},
    {name:'description',type:'localeText'},
    {name:'location',type:'string'},
    {name:'startDate',type:'datetime'},
    {name:'endDate',type:'datetime'},
    {name:'registrationUrl',type:'url'}
  ]
})
