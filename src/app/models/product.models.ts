export class Product{
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public image: string,
        public date : Date,
        public cover_img : string,
        public editions: Object
    ){}
}