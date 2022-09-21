const Keyboard = {
    elements:{
        main: null,
        keysContainer: null,
        keys: []

    },

    eventHandlers:{
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init(){
        //create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // adding classes

        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        //add to DOM

        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        //Automatically use keyboard for elements

        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", ()=>{
                this.open(element.value, currentValue =>{
                    element.value = currentValue;
                })
            })
        })


    },

    _createKeys(){
        const fragment = document.createDocumentFragment();
        const keyLayout = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
                            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
                            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
                            "done", "z", "x", "c", "v", "b", "n", "n", "m", ",", ".", "?",
                            "space"
                        ];


        // Create html for icons
        //const createIconHTML = (icon_name)=> {
          //  return '<i class="material-icons">${icon_name}</i>';
        //};

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?" ].indexOf(key) !== -1;

            //adding attributes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch(key){
                    case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = '<i class="material-icons">backspace</i>';

                    keyElement.addEventListener("click", ()=> {

                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");

                    });
                    break;

                    case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = '<i class="material-icons">keyboard_capslock</i>';

                    keyElement.addEventListener("click", ()=> {
                        this._toggleCapsLock();
                        if(this.properties.capsLock){
                        keyElement.classList.add("keyboard__key--active");
                        } else{
                            keyElement.classList.remove("keyboard__key--active");
                        }

                    });
                    break;

                    case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = '<i class="material-icons">keyboard_return</i>';

                    keyElement.addEventListener("click", ()=> {

                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });
                    break;

                    case "space":
                        keyElement.classList.add("keyboard__key--extra-wide");
                        keyElement.innerHTML = '<i class="material-icons">space_bar</i>';
    
                        keyElement.addEventListener("click", ()=> {
    
                            this.properties.value += " "
                            this._triggerEvent("oninput");
                        });
                    break;

                    case "done":
                            keyElement.classList.add("keyboard__key--wide","keyboard__key--dark");
                            keyElement.innerHTML = '<i class="material-icons">check_circle</i>';
        
                            keyElement.addEventListener("click", ()=> {
        
                                this.close();
                                this._triggerEvent("onclose");
                            });
                    break;

                    default:
                        keyElement.textContent = key.toLowerCase();
                        keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                        });

                        break;
            }
            fragment.appendChild(keyElement);

            if (insertLineBreak){
                fragment.appendChild(document.createElement("br"));
            }

        });

        return fragment;

    },

    _triggerEvent(handlerName){
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }

    },

    _toggleCapsLock(){
        this.properties.capsLock = !this.properties.capsLock;



        for(const key of this.elements.keys){
            if(key.childElementCount === 0){
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose){

        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close(){
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
};

window.addEventListener("DOMContentLoaded", function(){
    Keyboard.init();
});