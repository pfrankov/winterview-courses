module.exports = () => `<code>String.raw</code> возвращает строку, в которой экранированные символы (<code>\\n</code>, <code>\\v</code>, <code>\\t</code> и т.д.) игнорируются! Обратная косая черта может быть проблемой, так как вы можете получить что-то вроде:

<code>const path = \`C:\\Documents\\Projects\'table.html\`</code>

Что приведет к:

<code>"C:DocumentsProjects able.html"</code>

С <code>String.raw</code> он просто проигнорирует управляющий знак и напечатает:

<code>C:\\Documents\\Projects\\table.html</code>

В этом случае строка <code>Hello\\nworld</code>, которая и выводится.
`;