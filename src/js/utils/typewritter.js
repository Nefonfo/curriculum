class Typewritter {
    constructor(paragraph_selector, text, interval){
        this.paragraph = document.querySelector(paragraph_selector);
        this.text = text;
        this.interval = interval;
    }

    init() {
        let counter = 0;
        const interval = setInterval(() => {
            if(counter < this.text.length) {
                this.paragraph.innerHTML = this.paragraph.innerHTML + this.text.charAt(counter);
                counter++;
            } else {
                clearInterval(interval);
            }
        }, this.interval);
    }
}

export default Typewritter;