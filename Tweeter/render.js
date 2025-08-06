const Renderer = function () {
  const renderPosts = function (posts) {
    const $container = $("#posts");
    $container.empty();

    for (let post of posts) {
      const $postEl = $(`
        <div class="post" data-id="${post.id}">
          <div class="post-text">${post.text}</div>
          <div class="delete" data-id="${post.id}">Delete Post</div>
          <div class="comments"></div>
          <input type="text" class="comment-input" placeholder="Got something to say?">
          <button class="comment-button">Comment</button>
        </div>
      `);

      const $commentsDiv = $postEl.find(".comments");

      for (let comment of post.comments) {
        const $commentEl = $(`
          <div class="comment" data-id="${comment.id}">
            ${comment.text}
            <span class="delete-comment" data-id="${comment.id}">X</span>
          </div>
        `);
        $commentsDiv.append($commentEl);
      }

      $container.append($postEl);
    }
  };

  return { renderPosts };
};
