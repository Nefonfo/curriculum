
class ButtonMenu {
    constructor(button_click, button_active_class, modal, modal_active_class, off_canvas_close) {
        this.button_click = button_click;
        this.button_active_class = button_active_class;
        this.modal = modal;
        this.modal_active_class = modal_active_class;
        this.off_canvas_close = off_canvas_close;
        this.init();
    }

    init() {
        this.button_click.addEventListener('click', () => this.toggle_menu());
        this.off_canvas_close.addEventListener('click', () => this.toggle_menu());
    }

    toggle_menu() {
        this.button_click.classList.toggle(this.button_active_class);
        this.modal.classList.toggle(this.modal_active_class);
    }
}

export default ButtonMenu;