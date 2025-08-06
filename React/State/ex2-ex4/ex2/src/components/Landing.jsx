function Landing({ user, store }) {
  const hottestItem = store.find(item => item.hottest);

  return (
    <div>
      <h1>Welcome, {user}</h1>
      <p>🔥 Hottest item: {hottestItem.item}</p>
    </div>
  );
}

export default Landing;
