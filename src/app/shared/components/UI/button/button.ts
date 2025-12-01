import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class ButtonComponent {
  @Input() link: boolean = false;
  @Input() to: string = '/';
  @Input() mode: 'success' | 'error' | 'warning' | 'primary' | '' = '';
  @Input() disabled: boolean = false;
  @Input() full: boolean = false;
  @Input() class: string = '';

  get classes(): string {
    const base = [
      'px-4',
      'py-2',
      'font-inherit',
      'rounded-full',
      'transition-colors',
      'duration-200',
      'ease-in-out',
      'flex',
      'items-center',
      'gap-2',
      this.class
    ];

    const disabledClasses = this.disabled
      ? ['bg-gray-100', 'cursor-not-allowed', 'border', 'border-gray-300', 'text-gray-800']
      : ['cursor-pointer'];

    let modeClasses: string[] = [];
    let hoverClasses: string[] = [];

    if (!this.disabled) {
      switch (this.mode) {
        case 'success':
          modeClasses = ['bg-green-500', 'border', 'border-green-500', 'text-white'];
          hoverClasses = ['hover:bg-green-600', 'hover:border-green-600', 'active:bg-green-700'];
          break;

        case 'error':
          modeClasses = ['bg-red-500', 'border', 'border-red-500', 'text-white'];
          hoverClasses = ['hover:bg-red-600', 'hover:border-red-600', 'active:bg-red-700'];
          break;

        case 'warning':
          modeClasses = ['bg-yellow-500', 'border', 'border-yellow-500', 'text-white'];
          hoverClasses = ['hover:bg-yellow-600', 'hover:border-yellow-600', 'active:bg-yellow-700'];
          break;

        case 'primary':
          modeClasses = ['bg-indigo-500', 'border', 'border-indigo-500', 'text-white'];
          hoverClasses = ['hover:bg-indigo-600', 'hover:border-indigo-600', 'active:bg-indigo-700'];
          break;

        default:
          modeClasses = ['bg-gray-100', 'border', 'border-gray-300', 'text-gray-800'];
          hoverClasses = ['hover:bg-gray-200', 'active:bg-gray-300'];
      }
    }

    const fullClasses = this.full ? ['w-full'] : [];

    const linkClasses = this.link ? ['no-underline', 'flex', 'justify-center'] : [];

    return [
      ...base,
      ...disabledClasses,
      ...modeClasses,
      ...hoverClasses,
      ...fullClasses,
      ...linkClasses
    ].join(' ');
  }
}
