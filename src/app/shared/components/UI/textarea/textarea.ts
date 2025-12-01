import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  standalone: false,
  templateUrl: './textarea.html',
  styleUrl: './textarea.css',
})
export class TextareaComponent {
  @Input() value: string | undefined;
  @Input() rows: number = 3;
  @Input() className: string | undefined;
  @Input() placeholder: string | undefined;

  @Output() valueChange = new EventEmitter<string>();
  @Output() keyUp = new EventEmitter<KeyboardEvent>();

  onInput(e: Event) {
    const textarea = e.target as HTMLTextAreaElement;
    this.valueChange.emit(textarea.value);
  }

  onKeyUp(e: KeyboardEvent) {
    this.keyUp.emit(e);
  }
}
