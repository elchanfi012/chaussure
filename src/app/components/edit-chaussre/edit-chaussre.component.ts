import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-chaussre',
  templateUrl: './edit-chaussre.component.html',
  styleUrls: ['./edit-chaussre.component.css']
})
export class EditChaussreComponent implements OnInit {
  chaussure: Chaussure;
  marqueDispo = [];
  typeDispo = [];
  isLoading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private chaussureService: ChaussureService, private router: Router, 
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.marqueDispo = this.chaussureService.marqueDispo;
    this.typeDispo = this.chaussureService.typeDispo;
    this.chaussureService.getChaussureById(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe((data:
      Chaussure) => {
      this.chaussure = data;
      this.isLoading = false;
    });

  }
  onSubmit() {
    this.chaussureService.editChaussure(this.chaussure).subscribe(then => {
      this.router.navigate(['/chaussures']);
    });
    this.toastrService.success('Ta chaussure a été modifié avec succès', 'Félicitations !');
    

  }

}
