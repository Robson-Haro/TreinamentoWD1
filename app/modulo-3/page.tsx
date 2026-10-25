import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ModuleSelector from "../ModuleSelector";
import base from "./module.module.css";
import styles from "./capa.module.css";

export const metadata: Metadata = { title: "Líder Desenvolve Líder | Módulo 3 · TreinamentoWD1" };
export default function ModuleThree() {
 return <main className={`module-three-screen ${base.screen} ${styles.cover}`}>
  <nav className={base.topbar} aria-label="Navegação do módulo"><Link className={base.brand} href="/">WD × RC</Link><div className={base.nav}><Link href="/modulo-2/conclusao">← Conclusão do Módulo 2</Link><Link href="/">Voltar ao início</Link></div><ModuleSelector/></nav>
  <section className={styles.stage} aria-labelledby="module-three-title">
   <div className={`${base.panel} ${styles.panel}`}>
    <span className={base.eyebrow}>Jornada de aprimoramento e qualificação da liderança</span>
    <p className={styles.number}>Módulo 3</p>
    <h1 id="module-three-title">Líder Desenvolve <strong>Líder</strong></h1>
    <p className={styles.intro}>Desenvolver pessoas. Compartilhar responsabilidades.<br/>Preparar novos líderes.</p>
    <div className={styles.partnership} role="img" aria-label="Grupo WD e Ramos Consultoria unidos no desenvolvimento de novos líderes">
     <span className={styles.halo} aria-hidden="true"/>
     <div className={`${styles.logo} ${styles.left}`}><Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={160} height={160} priority/></div>
     <svg className={styles.connection} viewBox="0 0 240 160" aria-hidden="true"><path d="M10 100 Q120 -25 230 100" fill="none" stroke="#b6ffba" strokeWidth="3" strokeDasharray="8 10"/><path d="M10 115 Q120 15 230 115" fill="none" stroke="#b6ffba" strokeWidth="2" opacity=".3"/><circle cx="120" cy="68" r="36" fill="#b6ffba" opacity=".12"/><path d="M120 41v52m-20-20 20 20 20-20" stroke="#d6ffc6" strokeWidth="6" fill="none" strokeLinecap="round" transform="rotate(180 120 67)"/></svg>
     <div className={`${styles.logo} ${styles.right}`}><Image src="/grupo-wd.png" alt="Grupo WD" width={160} height={160} priority/></div>
    </div>
    <div className={styles.actions}><Link className={base.button} href="/modulo-3/desenvolvimento-humano">Iniciar Módulo 3 →</Link><Link className={styles.outline} href="/modulo-3/roteiro">Ver roteiro do módulo</Link></div>
   </div>
  </section>
 </main>;
}
