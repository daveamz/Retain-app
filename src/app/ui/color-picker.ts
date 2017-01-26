import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'color-picker',
    styles: [`
       .color-selector {
        position: relative;
        }
        .selector {
        max-width: 100px;
        border: 1px solid lightgrey;
        padding: 5px;
        background-color: #efefef;
        position: absolute;
        bottom: -50px;
        left: 50px;
        }
        .color {
        height: 20px;
        width: 20px;
        border-radius: 100%;
        cursor: pointer;
        margin-right: 5px;
        margin-bottom: 5px;
        }
        .color:hover {
        border: 2px solid darkgrey;
        }
        .icon {
        font-size: 1.4rem;
        color: grey;
        cursor: pointer;
        }
    `],
    template: `
        <div class="color-selector">
            <i (click)="showSelector(true)" class="material-icons icon">color_lens</i>
            <div class="selector row center-xs" *ngIf="isSelectorVisible">
                <div
                    class="color"
                    *ngFor="let color of colors"
                    (click)="selectColor(color)"
                    [ngStyle]="{'background-color': color}"
                >
                </div>
            </div>
        </div>
    `
})

export class ColorPicker {
    @Input() colors: string[] = [];
    @Output() selected = new EventEmitter();
    
    isSelectorVisible: boolean = false;

    showSelector(value: boolean) {
        this.isSelectorVisible = value;
    }

    selectColor(color: string) {
        this.showSelector(false);
        this.selected.next(color); 
    }
};