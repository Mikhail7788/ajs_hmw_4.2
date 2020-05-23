import findBy from '../findBy';

test('successful search', () => {
  const arrOne = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const result = arrOne.filter(findBy('name', 'урон'));

  expect(result).toEqual([{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }]);
});

test('failed search', () => {
  const arrTwo = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const result = arrTwo.filter(findBy('name', 'hhhhh'));

  expect(result).toEqual([]);
});