// Animate counting up for metrics
        document.addEventListener("DOMContentLoaded", function () {
          const metricValues = document.querySelectorAll(".metric-value");

          metricValues.forEach((value) => {
            const target = parseInt(value.textContent.replace(/[^\d]/g, ""));
            const suffix = value.textContent.replace(/[\d,]/g, "");
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);

            let current = start;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                clearInterval(timer);
                current = target;
              }
              value.textContent = Math.floor(current).toLocaleString() + suffix;
            }, 16);
          });
        });
      

// Scroll animation for post cards
document.addEventListener("DOMContentLoaded", function () {
    const postCards = document.querySelectorAll(".post-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Add staggered animation delays
    postCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 100}ms`;
      observer.observe(card);
    });
  });

  // Get modal element
  const modal = document.getElementById("analytics-modal");
  
  // Function to open modal
  function openAnalyticsModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }
  
  // Close modal when X is clicked
  document.querySelector(".close-modal").onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
  
  // Close when clicking outside modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
  
  // Optional: Close with ESC key
  document.onkeydown = function(evt) {
    if (evt.key == "Escape") {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  };

  // Project Analytics Data (you'll customize this for each project)
const projectAnalytics = {
  project1: {
    views: "1.5M",
    reach: "290.1K",
    "reach change": "+1.8K%",
    "content interactions": "9.8K",
    "content change": "+2.5K%",
    follows: "2.1K",
    "follows change": "+356%"
  },
  project2: {
    views: "490.9K",
    reach: "101K",
    "reach change": "-55%",
    "content interactions": "5.9K",
    "content change": "-57%",
    follows: "2.3K",
    "follows change": "-51%"
  },
  project3: {
    views: "3.5M",
    reach: "2.7M",
    "reach change": "+163.1%",
    "content interactions": "210.3K",
    "content change": "+130.3%",
    follows: "15K",
    "follows change": "+60.2%"
  },
  project4: {
    views: "1.2M",
    reach: "500K",
    "reach change": "+20%",
    "content interactions": "15K",
    "content change": "+10%",
    follows: "12K",
    "follows change": "+5%"
  },
  project5: {
    views: "3.2M",
    reach: "1.6M",
    "reach change": "+58.3%",
    "content interactions": "86.4K",
    "content change": "+52.4%",
    follows: "14K",
    "follows change": "+20.2%"
  },
  project6: {
    views: "529.3K",
    reach: "2.1M",
    "reach change": "+100%",
    "content interactions": "247.9K",
    "content change": "+100%",
    follows: "11K",
    "follows change": "+100%"
  },
};

function openProjectAnalytics(card) {
  const projectId = card.getAttribute("data-project-id");
  console.log("Clicked Project ID:", projectId); // Debugging

  // Get the project title
  const projectTitle = card.querySelector(".project-title").textContent;
  console.log("Project Title:", projectTitle); // Debugging

  const analytics = projectAnalytics[projectId] || {
    views: "N/A",
    reach: "N/A",
    "content interactions": "N/A",
    follows: "N/A",
    "reach change": "+0%",
    "content change": "+0%",
    "follows change": "+0%"
  };

  console.log("Analytics Data:", analytics); // Debugging

  // Update modal content with analytics data
  document.getElementById("analytics-project-title").textContent = projectTitle; // Update the modal title
  document.getElementById("analytics-views").textContent = analytics.views;
  document.getElementById("analytics-reach").textContent = analytics.reach;
  document.getElementById("analytics-content-interactions").textContent =
    analytics["content interactions"];
  document.getElementById("analytics-follows").textContent = analytics.follows;

  // Update reach change value and class
  const reachChangeElement = document.getElementById("analytics-reach-change");
  reachChangeElement.textContent = analytics["reach change"];
  if (analytics["reach change"].startsWith("+")) {
    reachChangeElement.classList.add("positive");
    reachChangeElement.classList.remove("negative");
  } else if (analytics["reach change"].startsWith("-")) {
    reachChangeElement.classList.add("negative");
    reachChangeElement.classList.remove("positive");
  } else {
    reachChangeElement.classList.remove("positive", "negative");
  }

  // Update content interactions change value and class
  const contentChangeElement = document.getElementById("analytics-content-change");
  contentChangeElement.textContent = analytics["content change"];
  if (analytics["content change"].startsWith("+")) {
    contentChangeElement.classList.add("positive");
    contentChangeElement.classList.remove("negative");
  } else if (analytics["content change"].startsWith("-")) {
    contentChangeElement.classList.add("negative");
    contentChangeElement.classList.remove("positive");
  } else {
    contentChangeElement.classList.remove("positive", "negative");
  }

  // Update follows change value and class
  const followsChangeElement = document.getElementById("analytics-follows-change");
  followsChangeElement.textContent = analytics["follows change"];
  if (analytics["follows change"].startsWith("+")) {
    followsChangeElement.classList.add("positive");
    followsChangeElement.classList.remove("negative");
  } else if (analytics["follows change"].startsWith("-")) {
    followsChangeElement.classList.add("negative");
    followsChangeElement.classList.remove("positive");
  } else {
    followsChangeElement.classList.remove("positive", "negative");
  }

  // Show the modal
  document.getElementById("analytics-modal").style.display = "block";
}

// Close modal functions remain the same...

// Add click event to all project cards
document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      openProjectAnalytics(card); // Pass the card element to the function
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const imageModal = document.getElementById("image-modal");
  const modalImg = document.getElementById("expanded-img");
  const captionText = document.getElementById("image-caption");
  const closeModal = document.querySelector(".image-modal .close-modal");

  // Ensure the modal is hidden on page load
  imageModal.style.display = "none";

  // Function to open the image modal
  function openImageModal(img) {
    imageModal.style.display = "flex"; // Use flex to show the modal
    modalImg.src = img.src;
    captionText.textContent = img.alt || "Image Preview";
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  // Add click event to all images in the social-posts section
  document.querySelectorAll("#social-posts .post-img").forEach((img) => {
    img.addEventListener("click", function () {
      openImageModal(this);
    });
  });

  // Close modal when the close button is clicked
  closeModal.addEventListener("click", function () {
    imageModal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
  });

  // Close modal when clicking outside the image
  imageModal.addEventListener("click", function (event) {
    if (event.target === imageModal) {
      imageModal.style.display = "none";
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  });

  // Close modal when the Esc key is pressed
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.key === "Esc") {
      if (imageModal.style.display === "flex") {
        imageModal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
      }
    }
  });
});

