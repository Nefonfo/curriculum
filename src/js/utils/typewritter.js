class Typewritter {
    constructor(paragraph_selector, text_array, interval){
        this.paragraph = document.querySelector(paragraph_selector);
        this.text_array = text_array;
        this.interval = interval;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async init() {
        let index = 0;
        this.paragraph.innerHTML = " ";
        for(const text of this.text_array) {
            const letters = text.split('');  
            for(const letter of letters) {
                this.paragraph.innerHTML = this.paragraph.innerHTML + letter;
                await this.sleep(this.interval);
            }
            await this.sleep(this.interval * 20);
            if(index < this.text_array.length - 1) {
                for(let return_index = this.paragraph.innerHTML.length; return_index >= 0; return_index--) {
                    this.paragraph.innerHTML = this.paragraph.innerHTML.substring(0, return_index);
                    await this.sleep(this.interval);
                }
            }
            index++;
        }
        
    }
}

export default Typewritter;