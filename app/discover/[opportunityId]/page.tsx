import { notFound } from 'next/navigation';
import DetailPage from '@/components/detail-page';
import { opportunities } from '@/lib/campus-data';

export function generateStaticParams(){return opportunities.map(item=>({opportunityId:item.id}));}
export default async function OpportunityDetail({params}:{params:Promise<{opportunityId:string}>}){
 const {opportunityId}=await params; const item=opportunities.find(x=>x.id===opportunityId); if(!item) notFound();
 return <DetailPage detail={{id:item.id,title:item.title,eyebrow:`${item.type} · CAMPUS OPPORTUNITY`,description:item.reason,meta:[item.date,item.place,item.deadline],tags:item.tags,kind:'opportunity',body:[`${item.title} is a focused campus opportunity for students who want to turn curiosity into visible work.`, `The CampusOS view keeps the important context close: what it is, when it happens, where it happens, and why it matches your current direction.`, `Save it when you are considering it, or RSVP when you are ready to make it part of your week.`]}}/>;
}
