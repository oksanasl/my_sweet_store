import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[ss-dropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') get opened() {
        return this.isOpen;
    }
    @HostListener('click') open() {
        this.isOpen = true;
    }
    @HostListener('mouseleave') close() {
        this.isOpen = false;
    }
    private isOpen = false;
}


/**
 * Created by Окси on 20.04.2017.
 */
