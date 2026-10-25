import Image from "next/image";
import Link from "next/link";
import ModuleSelector from "../ModuleSelector";
import type { ReactNode } from "react";
import styles from "./module.module.css";

type Destination = { href: string; label: string };
export default function Frame({title,section,intro,number,previous,next,children,blue=false}: {title:string;section:string;intro:string;number:string;previous:Destination;next:Destination;children:ReactNode;blue?:boolean}) {
 return <main className={`module-three-screen ${styles.screen} ${blue ? styles.blue : ""}`}>
  <nav className={styles.topbar} aria-label="Navegação do treinamento">
   <Link href="/" className={styles.brand}>WD × RC</Link>
   <div className={styles.nav}><Link href={previous.href}>← Tela anterior</Link><Link href={blue ? "/modulo-2" : "/modulo-3"}>Início do módulo</Link><Link href={next.href}>Próxima tela →</Link><span className={styles.badge}>{number}</span></div>
  <ModuleSelector/></nav>
  <div className={styles.content}>
   <header className={`${styles.panel} ${styles.hero}`}><div><span className={styles.eyebrow}>{section}</span><h1>{title}</h1><p>{intro}</p></div><div className={styles.logos} aria-label="Grupo WD e Ramos Consultoria"><Image src="/grupo-wd.png" alt="Grupo WD" width={64} height={64}/><Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={64} height={64}/></div></header>
   {children}
   <footer className={styles.footer}><Link className={styles.button} href={previous.href}>← {previous.label}</Link><Link className={styles.button} href={next.href}>{next.label} →</Link></footer>
  </div>
 </main>;
}
