import { Photo } from "./Photo";
import { SiteLink } from "./SiteLink";

export class Citation{
   links: SiteLink[];
   photos: Photo[];
   constructor(public text: string, public author: string){
      this.links=[];
      this.photos = [];
   }
}