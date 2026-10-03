function Dashboard({ setIsLoggedIn }) {
  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome to your dashboard.</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;