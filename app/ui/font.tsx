import {Lusitana, Poppins} from 'next/font/google'


export const poppins=Poppins({
  subsets:['latin','devanagari','latin-ext'],weight:['100','200','300','400','500','600','700','800','900']
})


export const lusitana=Lusitana({
  subsets:['latin'],weight:['400','700']
})