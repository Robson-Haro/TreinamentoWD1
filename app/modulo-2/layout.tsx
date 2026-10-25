import type { ReactNode } from "react";
import TrainingShell from "../TrainingShell";
export default function ModuleLayout({children}:{children:ReactNode}) {
 return <TrainingShell>{children}</TrainingShell>;
}
