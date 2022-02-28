import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookmarkModel } from '../../models/bookmark-model';

@Component({
  selector: 'app-bookmark-popup',
  templateUrl: './bookmark-popup.component.html',
  styleUrls: ['./bookmark-popup.component.css']
})
export class BookmarkPopupComponent implements OnInit {
  localData: BookmarkModel = new BookmarkModel(null);
  title: string = "";

  get validated(): boolean {
    if (this.localData === null)
      return false;
    return (this.localData.title != "" && this.localData.title.length < 150) &&
      (this.localData.description != "" && this.localData.description.length < 250);
  }

  constructor(public dialogRef: MatDialogRef<BookmarkPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title + " Bookmark";
    this.localData = data.content;
  }

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  onSaveClick(): void {
    this.dialogRef.close(this.localData);
  }
}
