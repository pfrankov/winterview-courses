module.exports = () => `<code>[1, 2]</code> - начальное значение, с которым инициализируется переменная <code>acc</code>. После первого прохода <code>acc</code> будет равно <code>[1,2]</code>, а <code>cur</code> будет <code>[0,1]</code>. После конкатенации результат будет <code>[1, 2, 0, 1]</code>.

Затем <code>acc</code> равно <code>[1, 2, 0, 1]</code>, а <code>cur</code> равно <code>[2, 3]</code>. После слияния получим <code>[1, 2, 0, 1, 2, 3]</code>.
`;