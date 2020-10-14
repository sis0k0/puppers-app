import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService, BreedImagesResponse } from '../dog.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {
  breed: string;
  dogUrls: string[];
  failedToFetchDogs = false;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs() {
    this.breed = this.route.snapshot.paramMap.get('breed');
    this.dogService.findMany(this.breed, 20)
      .subscribe((result: BreedImagesResponse) => {
        if (result.status === 'success') {
          this.dogUrls = result.message;
          console.log(this.dogUrls);
        } else {
          this.failedToFetchDogs = true;
        }
      });
  }

}
