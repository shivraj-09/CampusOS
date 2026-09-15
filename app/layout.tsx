import type {Metadata} from 'next';
import './globals.css';

const siteUrl='https://raah-dev.vercel.app';
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:'CampusOS | Student Command Center',template:'%s | CampusOS'},description:'A practical student workspace for campus opportunities, clubs, resources, and community.',applicationName:'CampusOS',keywords:['students','campus','college','opportunities','clubs','community'],openGraph:{title:'CampusOS | Student Command Center',description:'A practical place to find opportunities, clubs, resources, and student conversations.',type:'website',siteName:'CampusOS',url:siteUrl},twitter:{card:'summary_large_image',title:'CampusOS | Student Command Center',description:'A practical student workspace for campus life.'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
