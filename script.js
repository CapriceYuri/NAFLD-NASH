const lockContent = document.querySelectorAll(".access");
const accessKey = document.querySelector('#key');
const accessKeybtn = document.querySelector('#keyBtn')

accessKeybtn.addEventListener('click', () => {
    if (accessKey.value === '835') {
        for (let x = 0; x < lockContent.length; x++) {
            lockContent[x].style.display = "block"
        }
        accessKey.style.display = "none";
        accessKeybtn.style.display = "none";
    }
})

