const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" }
];

const indexToRemove = posts.findIndex(post => post.id === 2);

if (indexToRemove !== -1) {
  posts.splice(indexToRemove, 1);
}

console.log(posts);
