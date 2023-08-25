import { Component, Input } from '@angular/core';

@Component({
  selector: 'parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.sass']
})
export class ParallaxComponent {
  @Input() backgroundImagePath: string = '';
}
