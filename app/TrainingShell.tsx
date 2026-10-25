import type { ReactNode } from "react";
import ModuleSelector from "./ModuleSelector";
import Link from "next/link";
export default function TrainingShell({children}:{children:ReactNode}) {
 return <div className="training-module">
  <nav className="training-module-menu" aria-label="Módulos do treinamento">
   <ModuleSelector/>
   <Link href="/universidade/jornada-lideranca">Universidade Corporativa</Link>
  </nav>
  {children}
 </div>;
}
