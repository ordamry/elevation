//exercise 1:
async function getUserById(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('User not found');
    }

    const user = await response.json();
    console.log(`Found user: ${user.name} (${user.email})`);
    return user;
  } catch (error) {
    console.error('Error fetching user:', error.message);
    return null;
  }
}

// Test examples
getUserById(3);    // Valid user
getUserById(999);  // Invalid user

//exercise 2:
async function getUserWithPosts(userId) {
  try {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!userResponse.ok) {
      throw new Error('User not found');
    }

    const user = await userResponse.json();

    try {
      const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      if (!postsResponse.ok) {
        throw new Error('Failed to fetch posts');
      }

      const posts = await postsResponse.json();
      return { user, posts };

    } catch (postError) {
      console.error('Error fetching posts:', postError.message);
      return { user, posts: [] };
    }

  } catch (userError) {
    console.error('Error fetching user:', userError.message);
    return null;
  }
}


//exercise 3:
async function getDashboardData() {
  try {
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/comments'),
    ]);

    if (!usersRes.ok || !postsRes.ok || !commentsRes.ok) {
      throw new Error('Failed to fetch one or more resources');
    }

    const [users, posts, comments] = await Promise.all([
      usersRes.json(),
      postsRes.json(),
      commentsRes.json(),
    ]);

    const summary = {
      totalUsers: users.length,
      totalPosts: posts.length,
      totalComments: comments.length,
      avgPostsPerUser: posts.length / users.length,
      avgCommentsPerPost: comments.length / posts.length,
    };

    const userStats = users.map(user => {
      const userPosts = posts.filter(p => p.userId === user.id);
      const userPostIds = userPosts.map(p => p.id);
      const userComments = comments.filter(c => userPostIds.includes(c.postId));
      return {
        name: user.name,
        postCount: userPosts.length,
        commentCount: userComments.length,
      };
    });

    const topUsers = userStats.sort((a, b) => b.postCount - a.postCount).slice(0, 3);

    const recentPosts = posts.sort((a, b) => b.id - a.id).slice(0, 5);

    return { summary, topUsers, recentPosts };

  } catch (error) {
    console.error('Dashboard error:', error.message);
    return null;
  }
}


