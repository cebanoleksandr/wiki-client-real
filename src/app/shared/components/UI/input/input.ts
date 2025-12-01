import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputComponent {
  @Input() value: string | undefined;
  @Input() class: string | undefined;
  @Input() placeholder: string | undefined;

  @Output() valueChange = new EventEmitter<string>();

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }
}
