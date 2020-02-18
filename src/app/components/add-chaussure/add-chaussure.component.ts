import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-chaussure',
  templateUrl: './add-chaussure.component.html',
  styleUrls: ['./add-chaussure.component.css']
})
export class AddChaussureComponent implements OnInit {
  chaussure: Chaussure;
  marqueDispo = [];
  typeDispo = [];


  constructor(private chaussureService: ChaussureService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.chaussure = new Chaussure();
    this.chaussure.dateEntryStock = new Date();
    this.marqueDispo = this.chaussureService.marqueDispo;
    this.typeDispo = this.chaussureService.typeDispo;
  }
  onSubmit() {
    this.chaussureService.addChaussure(this.chaussure).subscribe(then => { this.router.navigate(['/chaussures']); });
    this.toastrService.success('Ta chaussure a été ajouté avec succès', 'Félicitation !');


  }

}
