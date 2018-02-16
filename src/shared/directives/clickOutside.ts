import { DirectiveOptions, DirectiveFunction, VNodeDirective } from "vue";

interface ClickOutsideDirectiveOptions extends DirectiveOptions {
    'handler'?: EventListener
}

let ClickOutside: ClickOutsideDirectiveOptions = {
    'bind': (el: HTMLElement, binding: VNodeDirective) => {
        if (!binding.value || typeof binding.value !== 'function') return;
        let callback: Function = binding.value;
        ClickOutside.handler = function (event: Event) {
            let curEl: HTMLElement = <HTMLElement> event.target;
            if (curEl === el) {
                return;
            } else {
                while(curEl.parentElement) {
                    if (curEl.parentElement === el) {
                        return;
                    } else {
                        curEl = curEl.parentElement;
                    }
                }
            }
            if (callback) callback();
        };

        document.addEventListener('click', ClickOutside.handler); //bind
    },
    'unbind': (el: HTMLElement, binding) => {
        if (ClickOutside.handler)
            document.removeEventListener('click', ClickOutside.handler); //unbind
    }
}

export default ClickOutside;

