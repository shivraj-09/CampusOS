import { notFound } from 'next/navigation';
import DetailPage from '@/components/detail-page';
import { clubs } from '@/lib/campus-data';

export function generateStaticParams(){return clubs.map(item=>({clubId:item.id}));}
export default async function ClubDetail({params}:{params:Promise<{clubId:string}>}){
 const {clubId}=await params; const item=clubs.find(x=>x.id===clubId); if(!item) notFound();
 return <DetailPage detail={{id:item.id,title:item.name,eyebrow:`${item.category} · CAMPUS CLUB`,description:item.activity,meta:[`${item.members} active members`,'Student Activity Centre','Weekly'],tags:[item.category,'Community','Projects'],kind:'club',body:[`${item.name} is one of the campus communities worth watching if you want to meet people who are already doing the work.`, `Follow the club to make its activity part of your CampusOS context. Following is stored locally in this frontend demo and immediately influences the student experience.`, `From build nights to portfolio critiques, clubs are where opportunities become relationships.`]}}/>;
}
