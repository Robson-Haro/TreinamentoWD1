import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import styles from "./celebracao.module.css";

export const metadata: Metadata = { title: "Parabéns! Vocês concluíram o Módulo 3 | TreinamentoWD1" };
const colors = ["#ffd43b","#fff1a6","#49d9ff","#f675c8","#8ff0b4","#b3a0ff"];
export default function Closing() {
 return <main className={`module-three-screen ${styles.screen}`}>
  <nav className={styles.topbar} aria-label="Navegação do treinamento"><Link href="/">WD × RC</Link><Link href="/modulo-3/referencias">← Referências</Link><span>Módulo 3 · Encerramento</span></nav>
  <input className={styles.pause} type="checkbox" id="pause-party" />
  <label className={styles.pauseLabel} htmlFor="pause-party">Pausar animações</label>
  <div className={styles.party} aria-hidden="true">
   {Array.from({length:120},(_,i)=><i key={`c${i}`} className={styles.confetti} style={{left:`${(i*37)%100}%`,backgroundColor:colors[i%colors.length],"--delay":`-${(i*0.31)%9}s`,"--duration":`${6+(i%6)}s`,width:`${7+i%7}px`,height:`${12+i%13}px`} as CSSProperties}/>)}
   {Array.from({length:26},(_,i)=><i key={`b${i}`} className={styles.balloon} style={{left:`${(i*19)%96}%`,color:colors[(i+2)%colors.length],"--delay":`-${(i*1.7)%22}s`,"--duration":`${15+i%8}s`,"--sway":`${i%2?45:-45}px`} as CSSProperties}/>)}
  </div>
  <section className={styles.stage} aria-labelledby="celebration-title">
   <div className={styles.panel}>
    <span className={styles.kicker}>Uma conquista de todos nós</span>
    <h1 id="celebration-title">Parabéns!<br/><strong>Vocês concluíram o Módulo 3</strong></h1>
    <svg className={styles.scene} viewBox="0 0 760 360" role="img" aria-labelledby="trophy-title">
     <title id="trophy-title">Os logos do Grupo WD e da Ramos Consultoria levantam juntos uma taça dourada</title>
     <defs><linearGradient id="cup-gold" x1="0" x2="1"><stop stopColor="#b97808"/><stop offset=".33" stopColor="#fff2a6"/><stop offset=".65" stopColor="#f6c638"/><stop offset="1" stopColor="#b97808"/></linearGradient><radialGradient id="cup-glow"><stop stopColor="#ffdf66" stopOpacity=".38"/><stop offset="1" stopColor="#ffdf66" stopOpacity="0"/></radialGradient></defs>
     <ellipse cx="380" cy="190" rx="270" ry="170" fill="url(#cup-glow)"/>
     <ellipse cx="380" cy="325" rx="280" ry="15" fill="#000" opacity=".22"/>
     <g className={styles.champions}>
      <path d="M180 245 L164 302 M214 245 L230 302 M546 245 L530 302 M580 245 L596 302" stroke="#d9eaff" strokeWidth="15" strokeLinecap="round"/>
      <path d="M242 192 Q270 178 285 112 M518 192 Q490 178 475 112" fill="none" stroke="#e1edff" strokeWidth="17" strokeLinecap="round"/>
      <path d="M145 190 Q105 154 113 113 M615 190 Q655 154 647 113" fill="none" stroke="#e1edff" strokeWidth="15" strokeLinecap="round"/>
      <rect x="118" y="135" width="142" height="132" rx="25" fill="#12513e" stroke="#8ff0b4" strokeWidth="2"/>
      <image href="/grupo-wd.png" x="136" y="149" width="106" height="104" preserveAspectRatio="xMidYMid meet"/>
      <rect x="500" y="135" width="142" height="132" rx="25" fill="#12513e" stroke="#8ff0b4" strokeWidth="2"/>
      <image href="/ramos-consultoria.png" x="518" y="149" width="106" height="104" preserveAspectRatio="xMidYMid meet"/>
      <path d="M320 70 H280 V104 Q280 151 335 151 M440 70 H480 V104 Q480 151 425 151" fill="none" stroke="url(#cup-gold)" strokeWidth="16"/>
      <path d="M315 56 H445 L434 133 Q428 170 380 181 Q332 170 326 133 Z" fill="url(#cup-gold)" stroke="#ffec95" strokeWidth="3"/>
      <path d="M380 179 V218 M351 220 H409" stroke="url(#cup-gold)" strokeWidth="18" strokeLinecap="round"/>
      <rect x="338" y="226" width="84" height="21" rx="6" fill="url(#cup-gold)"/>
      <path d="M380 83 L389 104 L412 106 L395 122 L400 145 L380 133 L360 145 L365 122 L348 106 L371 104Z" fill="#fff6c4"/>
      <circle cx="285" cy="112" r="11" fill="#f3f8ff"/><circle cx="475" cy="112" r="11" fill="#f3f8ff"/>
     </g>
    </svg>
    <p>Líder Desenvolve Líder</p>
    <Link className={styles.next} href="https://universidade-corporativa-grupo-wd.vercel.app/jornada-lideranca" target="_top">Voltar à Universidade Corporativa →</Link>
   </div>
  </section>
 </main>;
}
