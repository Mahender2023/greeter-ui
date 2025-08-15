import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // For the [(ngModel)]

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   name: string = '';
   greetingMessage: string = '';
     private apiUrl = 'https://greeter-api.onrender.com';
  constructor(private http: HttpClient) {}
   // This function will be called when the button is clicked because of (click)="getGreeting()"
  getGreeting(): void {
    const nameToSend = this.name || 'World'; // Use 'World' if the input is empty

    // Make the HTTP GET request to our backend API.
    // We expect the response to be an object with a 'message' property of type string.
    this.http.get<{ message: string }>(`${this.apiUrl}?name=${nameToSend}`)
      .subscribe(response => {
        // This code runs when the server's response arrives.
        console.log("Received response:", response);
        this.greetingMessage = response.message;
      });
  }
  protected title = 'greeter-ui';
}
