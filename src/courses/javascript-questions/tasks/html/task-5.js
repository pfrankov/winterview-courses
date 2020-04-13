module.exports = () => `<b>Что НЕ является валидным?</b>

- A: <code>mouse.bird.size</code>
- B: <code>mouse[bird.size]</code>
- C: <code>mouse[bird["size"]]</code>
- D: Все варианты валидны
`;