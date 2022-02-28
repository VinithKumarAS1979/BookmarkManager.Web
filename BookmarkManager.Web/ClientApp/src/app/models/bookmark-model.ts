export class BookmarkModel {
  public id: number = 0;
  public title: string = "";
  public description: string = "";
  public isActive: boolean = false;
  public createdOn: Date | any = null;
  public updatedOn: Date | any = null;
  public isDeleted: boolean = false;

  constructor(data: any) {
    if (data === null)
      return;
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.isActive = data.isActive;
    this.createdOn = data.createdOn;
    this.updatedOn = data.updatedOn;
    this.isDeleted = data.isDeleted;
  }
}
