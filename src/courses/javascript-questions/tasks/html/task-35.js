module.exports = () => `<b>Какие из этих значений являются "ложными"?</b>

- A: <code>0</code>, <code>''</code>, <code>undefined</code>
- B: <code>0</code>, <code>new Number(0)</code>, <code>''</code>, <code>new Boolean(false)</code>, <code>undefined</code>
- C: <code>0</code>, <code>''</code>, <code>new Boolean(false)</code>, <code>undefined</code>
- D: Все являются "ложными"
`;