
import {Component} from '@angular/core';

@Component({
    selector: 'app-warning',
    template:   `
                <h1 class="alert alert-warning"> This  is warning component </h1>`,
    styles: [ `
                    h1 {
                        color: #ffbf00;
                    }`]
})
export class WarningComponent {}