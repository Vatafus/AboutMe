import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent {
  @ViewChild('userBox') userBox: ElementRef | undefined;

  openinfo() {
    if (this.userBox) {
      this.userBox.nativeElement.classList.remove("hide-details");
    }
  }

  closeinfo() {
    if (this.userBox) {
      this.userBox.nativeElement.classList.add("hide-details");
    }
  }
}
