import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent {
  @ViewChild('userBox') userBox: ElementRef | undefined;
  detailsOpen: boolean = false;

  openinfo() {
    if (this.userBox) {
      this.userBox.nativeElement.classList.remove("hide-details");
      this.detailsOpen = true;
    }
  }

  closeinfo() {
    if (this.userBox) {
      this.userBox.nativeElement.classList.add("hide-details");
      this.detailsOpen = false;
    }
  }
}
