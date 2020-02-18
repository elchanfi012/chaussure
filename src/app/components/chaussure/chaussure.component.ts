import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { faEdit, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chaussure',
  templateUrl: './chaussure.component.html',
  styleUrls: ['./chaussure.component.css']
})
export class ChaussureComponent implements OnInit {
  isLoading: boolean;
  chaussures: Chaussure[];
  nbChaussures: number;
  faEdit = faEdit;
  faTrash = faTrash;
  faSpinner = faSpinner;

  constructor(private chaussureService: ChaussureService) { }

  
  ngOnInit() {
    this.isLoading = true;
    return this.chaussureService.getChaussures().subscribe((data: Chaussure[]) => {
      this.chaussures = data;
      this.nbChaussures = this.chaussures.length;
      this.isLoading = false;
    });
  }

}
