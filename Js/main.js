var money = 0

function moremoney() {
    money += 1
};

function updategui() {
    document.getElementById("Hello, World!").textContent = "Hello, World! " + money
    
    setTimeout(updategui, 0.1*1000)
};
