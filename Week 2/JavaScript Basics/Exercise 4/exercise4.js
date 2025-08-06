const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
      { id: 1, text: "Idiot has no idea" }, 
      { id: 2, text: "Fool!" }, 
      { id: 3, text: "I agree!" }
    ]
  },
  {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
  }
];


const post = posts.find(p => p.id === 2);

if (post) {
  
  const commentIndex = post.comments.findIndex(c => c.id === 3);
  
  if (commentIndex !== -1) {
    post.comments.splice(commentIndex, 1);
  }
}

console.log(posts);
