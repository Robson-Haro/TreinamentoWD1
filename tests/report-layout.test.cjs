const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const clientSource = read('app/relatorio-testes/ReportClient.tsx');
const css = read('app/relatorio-testes/relatorio.module.css');
const compiled = ts.transpileModule(clientSource, {
  compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText;
const output = { exports: {} };
new Function('require', 'module', 'exports', compiled)(
  (name) => name.endsWith('.module.css') ? {
    controls: 'isolated-controls', field: 'isolated-field', select: 'isolated-select', download: 'isolated-download',
  } : require(name), output, output.exports,
);
const ReportClient = output.exports.default;

test('report shell and controls do not reuse rotated training classes', () => {
  const source = read('app/relatorio-testes/page.tsx') + clientSource;
  assert.doesNotMatch(source, /experience\.css|qr-card|gold-button|lesson-logos|lesson-heading/);
  assert.match(source, /relatorio\.module\.css/);
});

test('controls have flexible desktop columns and a contained narrow-screen layout', () => {
  assert.match(css, /grid-template-columns:\s*minmax\(0, 1\.2fr\) minmax\(0, 1fr\) auto/);
  assert.match(css, /@media \(max-width: 820px\)[\s\S]*?grid-template-columns: minmax\(0, 1fr\)/);
  assert.doesNotMatch(css, /rotate\(|skew\(|perspective\(/);
  assert.match(css, /\.select[^}]*min-width:\s*0/);
});

for (const factor of ['dominancia', 'influencia', 'estabilidade', 'conformidade']) {
  test(`renders the isolated controls and report for ${factor}`, () => {
    const html = renderToStaticMarkup(React.createElement(ReportClient, {
      disc: [{ id: 'fixture', nome: 'Participante fictício com nome longo para teste de layout', top: factor }],
      leadership: [],
    }));
    assert.match(html, /class="isolated-controls" data-testid="report-controls"/);
    assert.equal((html.match(/<select /g) || []).length, 2);
    assert.match(html, /class="isolated-download" type="button"/);
    assert.match(html, /Baixar em PDF/);
    assert.match(html, /Como você se comunica/);
    assert.doesNotMatch(html, /qr-card|gold-button/);
  });
}
