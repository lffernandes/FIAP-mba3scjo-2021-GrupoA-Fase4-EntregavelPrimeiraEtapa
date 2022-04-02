import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listas = null;

  constructor(
    private service: DataService,
  ) { }

  ngOnInit(): void {
    this.service.getTodasListas().subscribe((data: any) => this.listas = data);
  }
}
