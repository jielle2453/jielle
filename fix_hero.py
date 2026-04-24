with open('index.astro', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('<h1 class="font-sans font-black tracking-[-0.055em] leading-[0.88] text-white">')
end = content.find('</h1>', start) + len('</h1>')

bt = '`'
new_block = (
    '<h1 class="font-sans font-black tracking-[-0.055em] text-white">\n'
    '        <!-- eyebrow -->\n'
    '        <span class="block leading-[2] text-[clamp(14px,1.8vw,22px)]">\n'
    "          {heroChunks.map((chunk) => (\n"
    "            <span class:list={[\n"
    "              chunk.variant === 'italic' ? 'font-light italic text-[#C04A1E]' : (chunk.muted ? 'text-white/50' : ''),\n"
    "              'tracking-[-0.01em]',\n"
    "            ]}\n"
    '            style={chunk.variant === \'italic\'\n'
    "              ? \"font-family:'Fraunces',serif;font-variation-settings:'SOFT' 100,'WONK' 1,'opsz' 144;\"\n"
    "              : undefined}\n"
    "            >\n"
    "              {chunk.text.split('').map((ch, i) => (\n"
    '                <span class="letter" style={' + bt + 'animation-delay: ${chunk.startDelay + i * chunk.step}ms' + bt + '}>{ch === \' \' ? \'\xa0\' : ch}</span>\n'
    "              ))}\n"
    "            </span>\n"
    "          ))}\n"
    "        </span>\n"
    "        <!-- big name -->\n"
    '        <span class="block leading-[0.86] text-[clamp(80px,14vw,210px)]">\n'
    "          {nameLetters.split('').map((ch, i) => (\n"
    '            <span class="letter" style={' + bt + 'animation-delay: ${nameStart + i * nameStep}ms' + bt + '}>{ch === \' \' ? \'\xa0\' : ch}</span>\n'
    "          ))}\n"
    "        </span>\n"
    "      </h1>"
)

content = content[:start] + new_block + content[end:]
with open('index.astro', 'w', encoding='utf-8') as f:
    f.write(content)
print('done')
