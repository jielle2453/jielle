import os

target_dir = r"c:\Users\j2453\Downloads\portfolio\site\src"
for root, dirs, files in os.walk(target_dir):
    for f in files:
        if f.endswith('.astro') or f.endswith('.svelte'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()
            
            if '§ ' in content or '§' in content:
                new_content = content.replace('§ ', '').replace('§', '')
                with open(filepath, 'w', encoding='utf-8') as file:
                    file.write(new_content)

print("Done removing section marks.")
