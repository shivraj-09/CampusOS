import { notFound } from 'next/navigation';
import DetailPage from '@/components/detail-page';
import { resources } from '@/lib/campus-data';

export function generateStaticParams(){return resources.map(item=>({resourceId:item.id}));}
export default async function ResourceDetail({params}:{params:Promise<{resourceId:string}>}){
 const {resourceId}=await params; const item=resources.find(x=>x.id===resourceId); if(!item) notFound();
 return <DetailPage detail={{id:item.id,title:item.title,eyebrow:`${item.type} · RESOURCE LIBRARY`,description:item.meta,meta:['Self-paced','CampusOS Library','Updated recently'],tags:[item.type,'Study','Career'],kind:'resource',body:[`${item.title} is designed to be useful at the moment you need it—not buried in a folder you forgot existed.`, `Save resources you want to return to. Your bookmarks are stored locally so the demo feels like a real personal library.`, `CampusOS treats resources as part of your momentum: learn something, apply it, then turn that work into your next opportunity.`]}}/>;
}
