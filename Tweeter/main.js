const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

$("#post").on("click", function () {
  const text = $("#input").val();
  if (text) {
    tweeter.addPost(text);
    $("#input").val("");
    renderer.renderPosts(tweeter.getPosts());
  }
});

$("#posts").on("click", ".delete", function () {
  const postID = $(this).closest(".post").data("id");
  tweeter.removePost(postID);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".comment-button", function () {
  const $post = $(this).closest(".post");
  const postID = $post.data("id");
  const commentText = $post.find(".comment-input").val();
  if (commentText) {
    tweeter.addComment(postID, commentText);
    renderer.renderPosts(tweeter.getPosts());
  }
});

$("#posts").on("click", ".delete-comment", function () {
  const commentID = $(this).data("id");
  const postID = $(this).closest(".post").data("id");
  tweeter.removeComment(postID, commentID);
  renderer.renderPosts(tweeter.getPosts());
});
