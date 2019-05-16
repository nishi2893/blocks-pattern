import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {

  blockCount = 0;
  blocksPerRow = 0;
  blockCountArray: any[] = [];
  blocksGrouped: any[] = [];
  selectedDiv:any;
  showPattern:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.showPattern = ! this.showPattern;
    
    this.blockCount = form.value.blocks;
    this.blocksPerRow = form.value.blocksperrow;

    console.log("Block Count" + this.blockCount);
    console.log("Blocks per row" + this.blocksPerRow);

    this.genBlocks();
    this.groupBlocks();

  }

// This method groups the blocks based on the blocks needed per row
  groupBlocks() {
    console.log("in group blocks");
       for(let i = 0; i < this.blockCount; i = i + this.blocksPerRow) {
               let group = this.blockCountArray.slice(i, i + this.blocksPerRow);
               this.blocksGrouped.push(group);
           }
  
  }

// This method generates blocks and stores some random values which are replaced by divs in the HTML file  
  
   genBlocks() {
    console.log("in generate blocks");
        for(let i = 0; i < this.blockCount; i++){
        this.blockCountArray.push({ id: i, name: Math.random().toString(36).substring(7) });
       }

  }
  // This method receives the index of the div being clicked
  onSelect(index)
  {
      this.selectedDiv = index;   
  }

}
