// 
//Script from index.html



//Script from menu.html
let buttonRunning;
        document.addEventListener("DOMContentLoaded", function() {
            // Fungsi yang akan berjalan otomatis setelah 3 detik
            function autoRunFunction() {
              buttonRunning = 1;
                console.log("This function runs automatically!");

                // Tambahkan kode atau panggil fungsi lain yang ingin dijalankan sekali setelah beberapa waktu di sini
                element.style.color = 'black';
                //element.style.backgroundColor = '';
                element.style = 'background-color: rgba(255, 255, 255, 0.0'
                elementBtn1.style.color = 'white';
                elementBtn1.style.backgroundColor = '#29ca04';
                elementBtn1.style.border = ' rgba(255, 255, 255, 0.0';
                elementBtn2.style.color = 'white';
                elementBtn2.style.backgroundColor = '#29ca04';
                elementBtn2.style.border = ' rgba(255, 255, 255, 0.0';
                elementBtn3.style.color = 'white';
                elementBtn3.style.backgroundColor = '#29ca04';
                elementBtn3.style.border = ' rgba(255, 255, 255, 0.0';
                document.body.style.color = 'white';
                document.body.style.background = 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)';
                textSkeleton.style.backgroundColor = ' rgba(255, 255, 255, 0.0)';
                textSkeleton.style.padding = '0px 0px';
                textSkeleton.style.margin = '0px 0px';

                // Animasi teks mengetik dan menghapus
                animateText(["Welcome to UngGas Machine", "Click About Website for information!",
                "Contact me to report bugs",
                "Explore the features!",
                "Enjoy this website!"], document.getElementById("typingText"), 0, 50);
            }

            // SetTimeout untuk menjalankan fungsi sekali setelah 3 detik
            setTimeout(autoRunFunction, 3000); // Ganti dengan waktu yang sesuai

            // Fungsi untuk animasi teks mengetik dan menghapus
            function animateText(texts, targetElement, index, speed) {
                let currentIndex = index % texts.length;
                typeText(texts[currentIndex], targetElement, 0, speed, function() {
                    setTimeout(function() {
                        eraseText(targetElement, speed, function() {
                            animateText(texts, targetElement, index + 1, speed);
                        });
                    }, 1000); // Waktu tunggu sebelum menghapus teks
                });
            }

            // Fungsi untuk animasi teks mengetik
            function typeText(text, targetElement, index, speed, callback) {
                if (index < text.length) {
                    targetElement.innerHTML += text.charAt(index);
                    index++;
                    setTimeout(function() {
                        typeText(text, targetElement, index, speed, callback);
                    }, speed);
                } else {
                    callback();
                }
            }

            // Fungsi untuk animasi menghapus teks
            function eraseText(targetElement, speed, callback) {
                let text = targetElement.innerHTML;
                let index = text.length - 1;

                if (index >= 0) {
                    targetElement.innerHTML = text.substring(0, index);
                    index--;
                    setTimeout(function() {
                        eraseText(targetElement, speed, callback);
                    }, speed);
                } else {
                    callback();
                }
            }
        });
        
        document.addEventListener("DOMContentLoaded", function() {
    const bubbles = document.querySelectorAll('.bubbles');

    function moveBubble(bubble) {
        const randomTop = Math.random() * window.innerHeight;
        const randomLeft = Math.random() * window.innerWidth;
        bubble.style.top = `${randomTop}px`;
        bubble.style.left = `${randomLeft}px`;
    }

    function moveAllBubbles() {
        bubbles.forEach(moveBubble);
    }

    setInterval(moveAllBubbles, 3000); // Ubah waktu sesuai kebutuhan
});

function buttonRunningDetected() {
if (buttonRunning === 1) {
function over1() {
  elementBtn1.style.backgroundColor = "white"
  elementBtn1.style.border = "1px solid #29ca04"
  elementBtn1.style.color = "#29ca04"
  window.location.href = 'mcp.html';
}

function out1() {
  elementBtn1.style.backgroundColor = "#29ca04"
  elementBtn1.style.border = "1px solid #29ca04"
  elementBtn1.style.color = "white"
}

function over2() {
  elementBtn2.style.backgroundColor = "white"
  elementBtn2.style.border = "1px solid #29ca04"
  elementBtn2.style.color = "#29ca04"
}

function out2() {
  elementBtn2.style.backgroundColor = "#29ca04"
  elementBtn2.style.border = "1px solid #29ca04"
  elementBtn2.style.color = "white"
}

function over3() {
  elementBtn3.style.backgroundColor = "white"
  elementBtn3.style.border = "1px solid #29ca04"
  elementBtn3.style.color = "#29ca04"
}

function out3() {
  elementBtn3.style.backgroundColor = "#29ca04"
  elementBtn3.style.border = "1px solid #29ca04"
  elementBtn3.style.color = "white"
}
}
}
