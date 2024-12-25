import { auth } from "./firebase-config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    // Log out the user
    signOut(auth).then(() => {
      // Redirect the user to the demologin page after logout
      window.location.href = "login.html";
    }).catch((error) => {
      // Handle errors if any
      console.error("Logout error:", error);
      alert("An error occurred while logging out. Please try again.");
    });
  });
}


document.querySelectorAll(".person-card").forEach(card => {
  card.addEventListener("click", () => {
    const personKey = card.getAttribute("data-person");
    const person = personData[personKey];
    if (person) {
      displayVideos(person);
    }
  });
});

function displayVideos(person) {
  const videoSection = document.getElementById("videos-section");
  const personName = document.getElementById("person-name");
  const videoGrid = document.querySelector(".video-grid");

  personName.textContent = `Videos by ${person.name}`;
  videoGrid.innerHTML = "";

  if (person.videos.length === 0) {
    videoGrid.innerHTML = "<p>No videos available for this person.</p>";
    return;
  }

  person.videos.forEach(video => {
    const videoFrame = document.createElement("iframe");
    videoFrame.src = video.url;
    videoFrame.title = video.title;
    videoFrame.width = "100%";
    videoFrame.height = "315";
    videoFrame.frameBorder = "0";
    videoFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    videoFrame.allowFullscreen = true;

    const videoWrapper = document.createElement("div");
    videoWrapper.classList.add("video-wrapper");
    videoWrapper.appendChild(videoFrame);
    videoGrid.appendChild(videoWrapper);
  });

  videoSection.style.display = "block";
}
