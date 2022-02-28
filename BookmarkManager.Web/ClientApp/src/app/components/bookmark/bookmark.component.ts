import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookmarkModel } from '../../models/bookmark-model';
import { ApiResponse } from '../../models/common/api-response';
import { BookmarkService } from '../../services/bookmark.service';
import { BookmarkPopupComponent } from '../bookmark-popup/bookmark-popup.component';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  private savedSuccessfully: string = " - Bookmark Saved successfully";
  private deletedSuccessfully: string = "Bookmark Deleted successfully";
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

  constructor(private _bookmarkService: BookmarkService, public dialog: MatDialog) { }

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
    //console.log("Add => ");
    let newData: BookmarkModel = new BookmarkModel(null);
    let popupData: any = this.buildPopupDataContent("New", newData);
    const dialogRef = this.dialog.open(BookmarkPopupComponent,
      {
        data: popupData
      });

    dialogRef.afterClosed().subscribe((result: string | any | null | undefined) => {
      if (result != undefined && result != null && result.length != 0) {
        result.createdOn = new Date();
        this._bookmarkService.create(result).subscribe((result: ApiResponse) => {
          this.apiInfo = result;
          if (this.apiInfo.status) {
            this.apiInfo.message = "New" + this.savedSuccessfully;
            this.loadBookmarksForListing();
          }
        }
        , (error: HttpErrorResponse) => {
            this.setExceptionDetails(error);
        });
      }
    });
  }

  editHandler(data: BookmarkModel) {
    //console.log("Edit => ", data);
    let popupData: any = this.buildPopupDataContent("Modify", data);
    const dialogRef = this.dialog.open(BookmarkPopupComponent,
      {
        data: popupData
      });

    dialogRef.afterClosed().subscribe((result: string | any | null | undefined) => {
      if (result != undefined && result != null && result.length != 0) {
        result.createdOn = new Date();
        this._bookmarkService.update(result).subscribe((result: ApiResponse) => {
          this.apiInfo = result;
          if (this.apiInfo.status) {
            this.apiInfo.message = "Modified" + this.savedSuccessfully;
            this.loadBookmarksForListing();
          }
        }
          , (error: HttpErrorResponse) => {
            this.setExceptionDetails(error);
          });
      }
    });
  }

  deleteHandler(data: BookmarkModel) {
    //console.log("Delete => ", data);
    let popupData: any = this.buildPopupDataContent("Delete", data);
    const dialogRef = this.dialog.open(BookmarkPopupComponent,
      {
        data: popupData
      });

    dialogRef.afterClosed().subscribe((result: string | any | null | undefined) => {
      if (result != undefined && result != null && result.length != 0) {
        result.createdOn = new Date();
        this._bookmarkService.delete(result).subscribe((result: ApiResponse) => {
          this.apiInfo = result;
          if (this.apiInfo.status) {
            this.apiInfo.message = this.deletedSuccessfully;
            this.loadBookmarksForListing();
          }
        }
          , (error: HttpErrorResponse) => {
            this.setExceptionDetails(error);
          });
      }
    });
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

  buildPopupDataContent(mode: string, data: BookmarkModel) {
    return {
      title: mode,
      content: data
    };
  }

  private setExceptionDetails(error: HttpErrorResponse) {
    this.apiInfo = new ApiResponse(null);
    this.apiInfo.message = error.message;
  }
}
