import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { faEdit, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chaussure-detail',
  templateUrl: './chaussure-detail.component.html',
  styleUrls: ['./chaussure-detail.component.css']
})
export class ChaussureDetailComponent implements OnInit {
  isLoading: boolean;
  chaussure: Chaussure;
  faEdit = faEdit;
  faTrash = faTrash;
  faSpinner = faSpinner;

  constructor(private chaussureService: ChaussureService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.chaussureService.getChaussureById(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe((data: Chaussure) => {
      this.chaussure = data;
      this.isLoading = false;
    });
  }

}
