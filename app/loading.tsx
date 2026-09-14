export default function Loading() {
  return (
    <main aria-label="Loading CampusOS" style={{minHeight:'60vh',display:'grid',placeItems:'center',padding:40,color:'var(--muted)'}}>
      <div style={{display:'grid',justifyItems:'center',gap:12}}>
        <div aria-hidden="true" style={{width:30,height:30,borderRadius:'50%',border:'2px solid var(--line)',borderTopColor:'var(--accent)',animation:'campus-spin .8s linear infinite'}} />
        <span style={{font:'9px "DM Mono",monospace',letterSpacing:'.14em'}}>LOADING CAMPUS</span>
      </div>
      <style>{'@keyframes campus-spin{to{transform:rotate(360deg)}}'}</style>
    </main>
  );
}
