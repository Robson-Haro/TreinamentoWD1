"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";
export default function Videos(){
 const [index,setIndex]=useState(0),[blocked,setBlocked]=useState(false),[done,setDone]=useState(false);
 const video=useRef<HTMLVideoElement>(null);
 useEffect(()=>{setBlocked(false);setDone(false);const el=video.current;if(el){el.load();el.play().catch(()=>setBlocked(true));}},[index]);
 return <main style={{minHeight:"100dvh",background:"linear-gradient(135deg,#06372b,#17725b)",color:"white",padding:"16px",fontFamily:'Inter,"Segoe UI",Arial,sans-serif'}}>
 <nav style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap",fontSize:24}}><Link href="/modulo-3/tempo-e-prioridades">← Tela anterior</Link><span>Módulo 3 · Vídeo {index+1} de 2</span><Link href="/modulo-3/ensinar-prioridades">Próxima tela →</Link></nav>
 <section style={{marginTop:16,padding:12,border:"1px solid #ffffff55",borderRadius:24,background:"#ffffff12",backdropFilter:"blur(20px)"}}>
 <video ref={video} src={`/videos/modulo-3/tempo-${[2,1][index]}.mp4`} controls autoPlay playsInline preload="auto" onPlay={()=>setBlocked(false)} onEnded={()=>{if(index<1)setIndex(index+1);else setDone(true);}} style={{width:"100%",height:"calc(100dvh - 180px)",minHeight:280,objectFit:"contain",background:"#001b14",borderRadius:16}}/>
 {blocked&&<button onClick={()=>video.current?.play().catch(()=>setBlocked(true))} style={{fontSize:28,padding:16}}>▶ Iniciar vídeo com áudio</button>}
 <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",paddingTop:12}}>{[0,1].map(n=><button key={n} onClick={()=>setIndex(n)} aria-current={n===index?"true":undefined} style={{fontSize:24,padding:"8px 18px",borderRadius:12,border:"1px solid #ffffff66",background:n===index?"#c9ffdc":"#ffffff22",color:n===index?"#06372b":"white"}}>Vídeo {n+1}</button>)}</div>
 {done&&<p style={{textAlign:"center",fontSize:32}}>Sequência concluída! <Link href="/modulo-3/ensinar-prioridades">Continuar o treinamento →</Link></p>}
 </section></main>;
}
