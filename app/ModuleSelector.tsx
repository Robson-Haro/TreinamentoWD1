"use client";
import { usePathname, useRouter } from "next/navigation";
export default function ModuleSelector() {
 const pathname=usePathname(), router=useRouter();
 const current=pathname.startsWith("/modulo-3")?"3":pathname.startsWith("/modulo-2")?"2":"1";
 return <select aria-label="Selecionar módulo" value={current} onChange={event=>router.push(event.target.value==="1"?"/modulo-1/video":"/modulo-"+event.target.value)} style={{fontFamily:"inherit",fontSize:32,lineHeight:1.35,padding:"10px 14px",borderRadius:14,border:"1px solid #b6ffba88",background:"#124c3e",color:"#fff",maxWidth:"100%",cursor:"pointer"}}><option value="1">Módulo 1</option><option value="2">Módulo 2</option><option value="3">Módulo 3</option></select>;
}
