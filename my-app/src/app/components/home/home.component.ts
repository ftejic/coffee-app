import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ApiService],
})
export class HomeComponent {
  imageUrl: string | null = null;

  constructor(private apiService: ApiService) {}

  onClick() {
    this.apiService.getImage().subscribe((data) => {
      this.imageUrl = data.file;
    });
  }
}
