//первый список содержит хоть один элемент из второго
export function contains(where:Array<any>, what:Array<any>){
    const intersection = where.filter(value => what.includes(value));
    return intersection.length>0;
}