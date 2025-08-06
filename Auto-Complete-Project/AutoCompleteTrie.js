class AutoCompleteTrie {
  constructor(value = '') {
    this.value = value;
    this.children = {};
    this.endOfWord = false;
    this.usage = 0;
  }

  addWord(word) {
    word = word.toLowerCase();
    let node = this;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new AutoCompleteTrie(char);
      }
      node = node.children[char];
    }
    node.endOfWord = true;
  }

  findWord(word) {
    word = word.toLowerCase();
    let node = this;
    for (const char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.endOfWord;
  }

  useWord(word) {
    word = word.toLowerCase();
    let node = this;
    for (const char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    if (node.endOfWord) {
      node.usage++;
      return true;
    }
    return false;
  }

  predictWords(prefix) {
    prefix = prefix.toLowerCase();
    const node = this._getRemainingTree(prefix);
    const words = [];
    if (node) this._allWordsHelper(prefix, node, words);
    return words.sort((a, b) => b.usage - a.usage).map(w => `${w.word} (${w.usage})`);
  }

  _getRemainingTree(prefix) {
    let node = this;
    for (const char of prefix) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    return node;
  }

  _allWordsHelper(current, node, words) {
    if (node.endOfWord) {
      words.push({ word: current, usage: node.usage });
    }
    for (const char in node.children) {
      this._allWordsHelper(current + char, node.children[char], words);
    }
  }
}

module.exports = AutoCompleteTrie;
