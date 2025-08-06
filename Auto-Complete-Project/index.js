const readline = require('readline');
const AutoCompleteTrie = require('./AutoCompleteTrie');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const trie = new AutoCompleteTrie();

console.log('=== AutoComplete Trie Console ===');
console.log("Type 'help' for commands");
rl.prompt();

rl.on('line', (input) => {
  const [command, ...args] = input.trim().split(' ');
  const word = args.join(' ');

  switch (command) {
    case 'add':
      if (word) {
        trie.addWord(word);
        console.log(`✓ Added '${word}' to dictionary`);
      } else {
        console.log('✗ Please specify a word to add');
      }
      break;

    case 'find':
      if (word) {
        const exists = trie.findWord(word);
        console.log(exists ? `✓ '${word}' exists in dictionary` : `✗ '${word}' not found in dictionary`);
      } else {
        console.log('✗ Please specify a word to find');
      }
      break;

    case 'complete':
      if (word) {
        const suggestions = trie.predictWords(word);
        console.log(suggestions.length > 0
          ? `Suggestions for '${word}': ${suggestions.join(', ')}`
          : `✗ No suggestions found for '${word}'`);
      } else {
        console.log('✗ Please specify a prefix to complete');
      }
      break;

    case 'use':
      if (word) {
        const used = trie.useWord(word);
        console.log(used
          ? `✓ Incremented usage for '${word}'`
          : `✗ '${word}' not found in dictionary`);
      } else {
        console.log('✗ Please specify a word to use');
      }
      break;

    case 'help':
      console.log(`Commands:
  add <word>        - Add word to dictionary
  find <word>       - Check if word exists
  complete <prefix> - Get completions
  use <word>        - Increment usage count
  help              - Show this message
  exit              - Quit program`);
      break;

    case 'exit':
      console.log('Goodbye!');
      rl.close();
      return;

    default:
      console.log(`✗ Unknown command '${command}'. Type 'help' for list of commands.`);
  }

  rl.prompt();
});
