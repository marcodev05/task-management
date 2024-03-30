export class Sorting {
    field: string;
    ascending: boolean;

    constructor(field: string, ascending: boolean = true){
        this.field = field;
        this.ascending = ascending;
    }
}