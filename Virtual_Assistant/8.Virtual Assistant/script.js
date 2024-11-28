let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "en-GB"
    window.speechSynthesis.speak(text_speak)
}

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    voice.style.display = "block"
    btn.style.display = "none"
})
function takeCommand(message) {
    voice.style.display = "none"
    btn.style.display = "flex"
    if (message.includes("hello") || message.includes("hey") || message.includes("hi")) {
        speak("hello ,How can I help you?")
    }
    else if (message.includes("good morning")) {
        speak("Good morning , have a nice day")
    } 
    else if (message.includes("good afternoon")) {
        speak("Good afternoon sir mam ")
    }
    else if (message.includes("good evening")) {
        speak("Good evening sir mam")
    }
    else if (message.includes("good night")) {
        speak("Good night,Sweet dreams")
    }
    else if (message.includes("who are you")) {
        speak("I am Eli, your virtual assistant ,created by sathi Mondal ,my purpose is to assist you with inforamtion ,tasks,creative ideas ,problem solving and much more")
    }
    else if (message.includes("open youtube")) {
        speak("opening youtube...")
        window.open("https://youtube.com/", "_blank")
    }
    else if (message.includes("open google")) {
        speak("opening google...")
        window.open("https://google.com/", "_blank")
    }
    else if (message.includes("open facebook")) {
        speak("opening facebook...")
        window.open("https://facebook.com/", "_blank")
    }
    else if (message.includes("open instagram")) {
        speak("opening instagram...")
        window.open("https://instagram.com/", "_blank")
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if (message.includes("open spotify")) {
        speak("Opening spotify..")
        window.open("https://open.spotify.com/")

    }
    else if (message.includes("open netflix")) {
        speak("Opening netflix..")
        window.open("https://www.netflix.com/in/")

    }
    else if (message.includes("open hotstar")) {
        speak("Opening hotstar..")
        window.open("https://www.hotstar.com/")

    }
    
    else if (message.includes("open telegram")) {
        speak("Opening telegram..")
        window.open("https://web.telegram.org/k/")

    }
    else if (message.includes("open linkedin")) {
        speak("Opening linkedin..")
        window.open("https://www.linkedin.com/feed/")

    }
    else if (message.includes("open jiosaavn")) {
        speak("Opening jiosaavn..")
        window.open("https://www.jiosaavn.com/")
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak(time)
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        speak(date)
    }
    else if (message.includes("year")) {
        let year = new Date().toLocaleString(undefined, { year: "numeric" })
        speak(year)
    }
    else {
        let finalText = "this is what i found on internet regarding" + message.replace("eli", "") 
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("eli", "")}`, "_blank")
    }
}