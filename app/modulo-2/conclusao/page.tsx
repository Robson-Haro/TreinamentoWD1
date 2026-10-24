import type { Metadata } from "next";
import Frame from "../../modulo-3/Frame";
import styles from "../../modulo-3/module.module.css";
export const metadata:Metadata={title:"Uma salva de palmas para quem faz acontecer | Módulo 2"};
export default function Closing(){return <Frame blue title="Uma salva de palmas para quem faz acontecer!" section="Módulo 2 concluído · Vamos celebrar nossa evolução" intro="Por trás de um ambiente limpo, organizado, seguro e acolhedor, existe uma equipe. E uma boa liderança ajuda cada pessoa a perceber a importância do seu trabalho." number="Módulo 2 · Encerramento" previous={{href:"/modulo-2/recapitulacao-modulo-2",label:"Resumo do Módulo 2"}} next={{href:"/modulo-3",label:"Módulo 3 · Líder desenvolve líderes"}}>
 <section className={styles.panel}><h2>O aprendizado merece reconhecimento.</h2><p>Aprendemos a escutar, comunicar com clareza, conferir o entendimento e cuidar dos detalhes que sustentam a excelência.</p><p><strong>Parabéns pela participação, pelas trocas e pela disposição para aprender!</strong> Agora é hora de levar uma mudança para a prática.</p></section>
 <section className={styles.panel}><span className={styles.kicker}>Uma rodada para fechar com alegria</span><h2>Reconheça. Compartilhe. Celebre.</h2><p>Reconheça uma atitude positiva de um colega e conte qual aprendizado você vai colocar em prática.</p><p>Uma salva de palmas para a equipe — e para o próximo passo de cada um!</p></section>
 <section className={styles.panel}><h2>A jornada continua.</h2><p>No Módulo 1, olhamos para nós. No Módulo 2, cuidamos da comunicação e da excelência. Agora vamos ajudar outras pessoas a crescer.</p><p><strong>Módulo 3 · Líder desenvolve líderes.</strong></p></section>
 </Frame>}
