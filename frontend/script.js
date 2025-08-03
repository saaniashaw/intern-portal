// frontend/script.js

// Fetch intern data and display
fetch('http://localhost:5000/api/intern')
  .then(response => response.json())
  .then(data => {
    document.getElementById('intern-name').textContent = data.name;
    document.getElementById('referral-code').textContent = data.referralCode;
    document.getElementById('donation-amount').textContent = data.totalDonations;

    const rewardsList = document.getElementById('rewards-list');
    rewardsList.innerHTML = "";
    data.rewards.forEach(reward => {
      const li = document.createElement('li');
      li.textContent = reward;
      rewardsList.appendChild(li);
    });
  })
  .catch(error => {
    console.error("Error fetching intern data:", error);
  });

// Redirect to leaderboard page
function goToLeaderboard() {
  window.location.href = 'leaderboard.html';
}
