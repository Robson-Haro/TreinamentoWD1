"""Monta o filme a partir de ponte.mp4, facilities.mp4 e narracao.mp3.
Uso: python scripts/render-normalizacao.py DIRETORIO_DOS_ORIGINAIS
Requer ffmpeg. Os originais são as gerações descritas no roteiro público.
"""
from pathlib import Path
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(sys.argv[1]).resolve()
OUT = ROOT / 'public/videos/modulo-2/normalizacao-do-desvio'
WORK = SOURCE / 'montagem'
WORK.mkdir(exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
BOLD = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

def run(args):
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', *args], check=True)

def text_filter(name, text, y, size=40, color='white', bold=False):
    target = WORK / (name + '.txt')
    target.write_text(text)
    return f"drawtext=fontfile='{BOLD if bold else FONT}':textfile='{target}':fontcolor={color}:fontsize={size}:x=(w-tw)/2:y={y}:line_spacing=18"

def encode(index, duration, filters, source=None, trim=None):
    target = WORK / f'{index:02}.mp4'
    if source:
        args = ['-i', str(SOURCE / source)]
        start, end = trim
        filters = [f'trim=start={start}:end={end}', f'setpts=(PTS-STARTPTS)*{duration/(end-start)}', 'scale=1920:1080:force_original_aspect_ratio=decrease', 'pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=0x03142c', 'setsar=1', 'fps=24', *filters]
    else:
        args = ['-f','lavfi','-i',f'color=c=0x052b59:s=1920x1080:r=24:d={duration}']
        filters = ['drawbox=x=96:y=230:w=1728:h=620:color=0x031a39:t=fill', 'drawbox=x=96:y=230:w=8:h=620:color=0xffd43b:t=fill', *filters]
    run([*args, '-vf', ','.join(filters), '-t', str(duration), '-an', '-c:v','libx264','-preset','medium','-crf','23','-pix_fmt','yuv420p',str(target)])

brand = text_filter('marca', 'GRUPO WD  ×  RAMOS CONSULTORIA', 965, 26, '0xa6e8ff')
encode(0, 4.7, [text_filter('abertura','“Está bom assim.”',390,60,'0xffd43b',True),text_filter('subabertura','Quando a exceção vira rotina.',490),text_filter('ficcao','Dramatização educativa • Imagens geradas por IA',770,28),brand])
encode(1, 8.65, ['drawbox=x=0:y=0:w=iw:h=150:color=0x03142ce8:t=fill',text_filter('ponte','Sinais ignorados',28,60,'0xffd43b',True),text_filter('metafora','Ponte em miniatura • Metáfora didática',102,28)],'ponte.mp4',(0,15))
encode(2, 7.79, ['drawbox=x=0:y=0:w=iw:h=150:color=0x03142ce8:t=fill',text_filter('portaria','Portaria: a conferência foi dispensada.',35,60,'0xffd43b',True)],'facilities.mp4',(0,9))
encode(3, 6.31, ['drawbox=x=0:y=0:w=iw:h=150:color=0x03142ce8:t=fill',text_filter('limpeza','Piso molhado. Proteção retirada cedo demais.',35,60,'0xffd43b',True)],'facilities.mp4',(9,15))
encode(4, 4.07, [text_filter('ausencia1','A ausência de acidente',385,60,'white',True),text_filter('ausencia2','não comprova ausência de risco.',480,60,'0xffd43b',True),brand])
encode(5, 10.48, [text_filter('acao','Interrompa o ciclo.',355,60,'0xffd43b',True),text_filter('verbos','PROTEJA · COMUNIQUE · CORRIJA · CONFIRA',480,40,'white',True),text_filter('lideranca','A liderança garante condições para trabalhar certo.',590),brand])
encode(6, 6, [text_filter('rotina','Excelência é rotina.',390,60,'0xffd43b',True),text_filter('fim','Não normalize o erro.',495,60,'white',True),brand])
concat = WORK / 'sequencia.txt'
concat.write_text('\n'.join(f"file '{WORK / f'{i:02}.mp4'}'" for i in range(7)))
run(['-f','concat','-safe','0','-i',str(concat),'-i',str(SOURCE/'narracao.mp3'),'-map','0:v:0','-map','1:a:0','-c:v','copy','-c:a','aac','-b:a','128k','-af','apad','-t','48','-movflags','+faststart',str(OUT/'filme.mp4')])
run(['-i',str(OUT/'filme.mp4'),'-frames:v','1','-quality','85',str(OUT/'capa.webp')])
print(OUT/'filme.mp4')
