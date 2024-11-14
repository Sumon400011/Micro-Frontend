import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RemoteModule } from './remote/remote.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RemoteModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'remote-app';
}
