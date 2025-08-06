
const AutoCompleteTrie = require('./AutoCompleteTrie');

let trie;

beforeEach(() => {
  trie = new AutoCompleteTrie();
});

describe('addWord', () => {
  test('should add a word and mark endOfWord', () => {
    trie.addWord('cat');
    expect(trie.findWord('cat')).toBe(true);
  });

  test('should not mark incomplete word as endOfWord', () => {
    trie.addWord('cat');
    expect(trie.findWord('ca')).toBe(false);
  });

  test('should handle multiple words with shared prefix', () => {
    trie.addWord('cat');
    trie.addWord('car');
    expect(trie.findWord('cat')).toBe(true);
    expect(trie.findWord('car')).toBe(true);
  });
});

describe('findWord', () => {
  test('should find exact word', () => {
    trie.addWord('dog');
    expect(trie.findWord('dog')).toBe(true);
  });

  test('should return false for non-existent word', () => {
    expect(trie.findWord('mouse')).toBe(false);
  });

  test('should be case-insensitive', () => {
    trie.addWord('House');
    expect(trie.findWord('house')).toBe(true);
  });
});

describe('useWord', () => {
  test('should increment usage count', () => {
    trie.addWord('cat');
    trie.useWord('cat');
    trie.useWord('cat');
    const result = trie.predictWords('ca');
    expect(result[0]).toBe('cat (2)');
  });

  test('should return false if word not in trie', () => {
    expect(trie.useWord('unknown')).toBe(false);
  });

  test('should not increment usage if not endOfWord', () => {
    trie.addWord('cat');
    expect(trie.useWord('ca')).toBe(false);
  });
});

describe('predictWords', () => {
  test('should return all completions for prefix', () => {
    trie.addWord('cat');
    trie.addWord('car');
    trie.addWord('card');
    const suggestions = trie.predictWords('ca');
    expect(suggestions).toEqual(expect.arrayContaining(['cat (0)', 'car (0)', 'card (0)']));
  });

  test('should return sorted by usage', () => {
    trie.addWord('cat');
    trie.addWord('car');
    trie.useWord('car');
    trie.useWord('car');
    trie.useWord('cat');
    const suggestions = trie.predictWords('ca');
    expect(suggestions[0]).toBe('car (2)');
    expect(suggestions[1]).toBe('cat (1)');
  });

  test('should return empty array if prefix not found', () => {
    trie.addWord('dog');
    const suggestions = trie.predictWords('x');
    expect(suggestions).toEqual([]);
  });
});
