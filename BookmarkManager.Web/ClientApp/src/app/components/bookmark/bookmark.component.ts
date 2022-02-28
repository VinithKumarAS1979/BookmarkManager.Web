import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookmarkModel } from '../../models/bookmark-model';
import { ApiResponse } from '../../models/common/api-response';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  private savedSuccessfully: string = "Saved successfully";
  apiInfo: ApiResponse = new ApiResponse(null);
  bookmarksList: BookmarkModel[] = [];
  filteredRecords: BookmarkModel[] = [];
  displayColumns: string[] = [
    "id"
    , "title"
    , "description"
    , "createdOn"
    , "updatedOn"
    , "isActive"
    , "btnsList"
  ];
  dataSource = new MatTableDataSource<BookmarkModel>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  searchString: string = "";

  get totalRecordsLength() {
    return this.bookmarksList.length;
  }

  constructor(private _bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.loadBookmarksForListing();
  }

  private loadBookmarksForListing(): void {
    this._bookmarkService.getAll().subscribe((x:any) => {
      this.bookmarksList = x;

      this.dataSource = new MatTableDataSource(this.bookmarksList);
      this.filteredRecords = this.bookmarksList;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addHandler() {
    console.log("Add => ");
  }

  editHandler(data: BookmarkModel) {
    console.log("Edit => ", data);
  }

  deleteHandler(data: BookmarkModel) {
    console.log("Delete => ", data);
  }

  filterRecords(rec: BookmarkModel | any, valueToCheck: string): boolean {
    if (this.searchString === "")
      return true;
    let totalProperties: number = this.displayColumns.length;
    let recordValue: string = "";
    let result: boolean = false;
    for (let i = 0; i < totalProperties-1; i++) {
      if (this.searchString != "") {
        recordValue = rec[this.displayColumns[i]] === null ? "" : rec[this.displayColumns[i]].toString();
        result = recordValue.toUpperCase().indexOf(this.searchString.toUpperCase()) >= 0;
        if (result)
          break;
      }
    }
    return result;
  }

  private computeFilteredDataForDisplay(valueToCheck: string = "") {
    let filtered: BookmarkModel[] = [];
    let validation: boolean = false;
    this.bookmarksList.forEach(x => {
      validation = this.filterRecords(x, valueToCheck);
      if (validation)
        filtered.push(x);
    });

    this.filteredRecords = filtered;
    this.dataSource = new MatTableDataSource<BookmarkModel>(filtered);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSearchTextChangeHandler(value: any | undefined) {
    console.log("SearchTextChange => ", value);
    this.computeFilteredDataForDisplay();
  }
}
