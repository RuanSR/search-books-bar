export class Book{
  constructor(id, image, title, subtitle, description, publishedDate){
    this.id = id;
    this.image = image;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.publishedDate = publishedDate;
    this.addedIn = new Date().toLocaleString();
  }
}