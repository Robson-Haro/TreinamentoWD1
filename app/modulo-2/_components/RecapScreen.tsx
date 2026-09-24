import Image from "next/image";
import Link from "next/link";
import styles from "./recap.module.css";

type RecapSection = {
  label: string;
  items: { topic: string; text: string }[];
};

type RecapProps = {
  title: string;
  emphasis: string;
  subtitle: string;
  screenNumber: number;
  previous: { href: string; label: string };
  next: { href: string; label: string };
  sections: RecapSection[];
};

export default function RecapScreen({ title, emphasis, subtitle, screenNumber, previous, next, sections }: RecapProps) {
  return (
    <main className={`module-two-screen ${styles.screen}`}>
      <div className="noise" aria-hidden="true" />
      <nav className={`topbar module-topbar module-two-topbar ${styles.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={styles.navLinks}>
          <Link className="back-link" href={previous.href}>← {previous.label}</Link>
          <Link className="back-link" href={next.href}>{next.label} →</Link>
          <span className="module-two-step">Módulo 2 · Tela {screenNumber}</span>
        </div>
      </nav>

      <div className={styles.content}>
        <header className={styles.heading}>
          <span className={styles.kicker}>{subtitle}</span>
          <h1>{title} <strong>{emphasis}</strong></h1>
        </header>

        {sections.map((section, index) => (
          <section className={`module-two-glass-panel ${styles.panel}`} aria-label={section.label} key={section.label}>
            <span className={styles.sectionLabel}>{String(index + 1).padStart(2, "0")} · {section.label}</span>
            <ul className={styles.bullets}>
              {section.items.map(item => <li key={item.topic}><strong>{item.topic}:</strong> {item.text}</li>)}
            </ul>
          </section>
        ))}

        <footer className={styles.footer}>
          <Link className={`module-two-button ${styles.button}`} href={previous.href}>← {previous.label}</Link>
          <div className={styles.partnership} aria-label="Grupo WD e Ramos Consultoria">
            <Image src="/grupo-wd.png" alt="Grupo WD" width={56} height={56} />
            <span aria-hidden="true">×</span>
            <Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={56} height={56} />
          </div>
          <Link className={`module-two-button ${styles.button}`} href={next.href}>{next.label} →</Link>
        </footer>
      </div>
    </main>
  );
}
