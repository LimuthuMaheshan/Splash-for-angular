import { AfterViewInit, Component, ElementRef, Renderer2, HostListener } from '@angular/core';








@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  isMenuCollapsed = true;
  loadingProgress = 0;

  showSplash = true;


   model: any;














  ngAfterViewInit() {
    // Simulate an asynchronous operation (e.g., API calls, data loading)
    setTimeout(() => {
      this.showSplash = false;
    }, 10000); // Set the timeout based on your loading time
    this.simulateLoading();
  }





  simulateLoading() {
    const interval = setInterval(() => {
      this.loadingProgress += 10; // Update the progress increment as needed
      if (this.loadingProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.showSplash = false;
        }, 500); // Add a slight delay before hiding the splash screen
      }
    }, 500);
  }



}
