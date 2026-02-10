
// Preload images for better performance
const preloadImages = () => {
  const images = [
    'https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true',
    'https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true',
    'https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true',
    'https://media.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif',
    'https://media.tenor.com/2Ctk5j4dP7cAAAAj/shy-cat-cat-blushing.gif'
  ];

  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

document.addEventListener("DOMContentLoaded", function () {
  preloadImages();

  const images = document.querySelectorAll(".reaction-image");

  function setRandomPosition(element) {
    element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  }

  images.forEach(function (image) {
    setRandomPosition(image);
  });
});

let counter = 0;
const sadCat = [
  "https://media.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif",
  "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
  "https://media.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif",
  "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
  "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
  "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
];

const blackmail = [
  "Please..🥹",
  "I'm begging you..😭",
  "My heart is breaking..💔",
  "Don't do this to me..😭",
  "Please say yes..🙏",
  "I'll be so sad..😿",
  "You're breaking my heart..💔"
];

function angry() {
  const images = document.querySelectorAll(".reaction-image");
  const absImg = document.getElementById("absImg");
  const mainImg = document.getElementById("mainImg");

  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  mainImg.style.animation = "shake 0.5s ease-in-out";

  absImg.style.display = "block";

  images.forEach(function (image) {
    image.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  });

  setTimeout(() => {
    mainImg.style.animation = "";
  }, 500);
}

function happy() {
  const images = document.querySelectorAll(".reaction-image");
  const absImg = document.getElementById("absImg");
  const mainImg = document.getElementById("mainImg");

  absImg.style.display = "block";
  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  mainImg.style.animation = "pulse 1s ease-in-out";

  images.forEach(function (image) {
    image.src = "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
  });
}

function normal() {
  const absImg = document.getElementById("absImg");
  const mainImg = document.getElementById("mainImg");

  absImg.style.display = "none";
  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
  mainImg.style.animation = "";
}

function no() {
  counter++;

  const sadMusic = document.getElementById("sadMusic");
  const happyMusic = document.getElementById("happyMusic");

  happyMusic.pause();
  sadMusic.currentTime = 0;
  sadMusic.play();

  const model = document.getElementById("model");
  const modelImage = document.getElementById("modelImg");
  const modelText = document.getElementById("modelText");

  modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
  modelText.innerText = blackmail[Math.floor(Math.random() * blackmail.length)];

  model.style.display = "flex";
}

function yes() {
  if (counter >= 3) {
    const model = document.getElementById("model2");
    const model2 = document.getElementById("model");
    const sadMusic = document.getElementById("sadMusic");
    const happyMusic = document.getElementById("happyMusic");

    sadMusic.pause();
    model2.style.display = "none";

    happyMusic.currentTime = 0;
    happyMusic.play();

    const wedate = document.getElementById("wedate");
    const btns = document.getElementById("btns");

    btns.style.display = "none";
    wedate.innerText = "We are each other's Valentine now! 💕";

    setTimeout(() => {
      model.style.display = "flex";
      // Open flower page in new tab after a delay
      setTimeout(() => {
        window.open("index1.html", "_blank");
      }, 2000);
    }, 100);
  } else {
    const modal = document.createElement('div');
    modal.className = 'toast';
    modal.innerHTML = `
      <div class="toast-content">
        Don't say yes right away, cutie. Play around a bit 😉😘
      </div>
    `;
    document.body.appendChild(modal);

    setTimeout(() => {
      modal.classList.add('show');
    }, 10);

    setTimeout(() => {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.remove();
      }, 300);
    }, 3000);
  }
}

function ly2() {
  const model = document.getElementById("model2");
  model.style.display = "none";

  const happyMusic = document.getElementById("happyMusic");
  happyMusic.pause();
}

// Add CSS for toast notification
const toastStyle = document.createElement('style');
toastStyle.textContent = `
  .toast {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    background: linear-gradient(135deg, #ff6b8b, #ff4f99);
    color: white;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 2000;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 90vw;
    text-align: center;
  }

  .toast.show {
    transform: translateX(-50%) translateY(0);
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
`;
document.head.appendChild(toastStyle);