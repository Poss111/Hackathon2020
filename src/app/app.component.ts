import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Selenium Grid';
  loading: boolean;
  startJob: boolean;

  ngOnInit(): void {
    this.loading = false;
    this.startJob = false;
  }

  startSeleniumGrid() {
    this.startJob = true;
    setTimeout(() => {
      this.loading = true;
    }, 2000);
  }

}
