import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contents: any[] = [
    {
      title: 'Song 1',
      artist: 'Artist A',
      image: 'path-to-image-1.jpg',
    },
    {
      title: 'Song 2',
      artist: 'Artist B',
      image: 'path-to-image-2.jpg',
    },
    // Add more content items as needed
  ];

}
