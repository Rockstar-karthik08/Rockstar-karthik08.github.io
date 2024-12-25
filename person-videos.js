
// Data for persons and their respective videos
const personData = {
  person1: {
    name: "Kishoth",
    videos: [
      { title: "Kishoth's Video 1", url: "https://www.youtube.com/embed/zmPmh2kgurY?si=ovB0gCzRxcqrJF75" },
      { title: "Kishoth's Video 2", url: "https://www.youtube.com/embed/raHDhsmjL9E?si=kZkDso1TTZs5o4yz" },
      { title: "Kishoth's Short 1", url: "https://www.youtube.com/embed/zmPmh2kgurY" },
      { title: "Kishoth's Short 2", url: "https://www.youtube.com/embed/raHDhsmjL9E" }
    ]
  },
  person2: {
    name: "Karthi",
    videos: [
      { title: "Karthi's Video 1", url: "https://www.youtube.com/embed/xbE9Ni3-lDA" },
      { title: "Karthi's Short 1", url: "https://www.youtube.com/embed/video3" }
    ]
  },
  person3: {
    name: "Michael Lee",
    videos: [
      { title: "Michael's Video 1", url: "https://www.youtube.com/embed/video5" },
      { title: "Michael's Short 1", url: "https://www.youtube.com/embed/video5" }
    ]
  }
};


// Function to get the person parameter from the URL
function getPersonFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('person');
}

// Function to display videos for a selected person
function displayVideos(personKey) {
  const videoSection = document.getElementById("videos-section");
  const personName = document.getElementById("person-name");
  const videoGrid = document.querySelector(".video-grid");

  const person = personData[personKey];

  // Set person name
  personName.textContent = `Videos by ${person.name}`;

  // Clear any previous videos
  videoGrid.innerHTML = "";

  // If there are no videos, show a message
  if (person.videos.length === 0) {
    videoGrid.innerHTML = "<p>No videos available for this person.</p>";
    return;
  }

  // Populate the videos for the selected person
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
}

// Get person from URL and display their videos
const personKey = getPersonFromURL();
if (personKey && personData[personKey]) {
  displayVideos(personKey);
} else {
  document.getElementById("videos-section").innerHTML = "<p>Person not found.</p>";
}
