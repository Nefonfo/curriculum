class SwitchMode {
    
    constructor(element_class, element_click, active_class, storage) {
        this.element_class = element_class;
        this.element_click = document.querySelector(element_click);
        this.active_class = active_class;
        this.storage = storage;
        this.active = false;
    }

    init() {
        this.active = this.get_storage();
        if(this.active) {
            this.element_class.classList.add(this.active_class);
            this.element_class.classList.remove(this.unactive_class);
            this.element_click.classList.add('justify-end')
        }
        this.element_click.addEventListener('click', () => {
            this.active = !this.active;
            this.set_storage(this.active);
            this.element_class.classList.toggle(this.active_class);
            this.element_click.classList.toggle('justify-end')
            if(this.active) {
                
            }
        });
    }

    get_storage() {
        let data;
        try {
            data = JSON.parse(localStorage.getItem(this.storage));
        } catch(e){ 
            data = null
        }
        if(data === null) {
            this.set_storage(false);
        }
        return data;
    }

    set_storage(mode) {
        localStorage.setItem(this.storage, JSON.stringify(mode));
    }
}

export default SwitchMode;