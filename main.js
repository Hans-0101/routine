let today = new Date();

console.log(today.toJSON());

Date.prototype.string = function () {
    let yyyy = this.getFullYear();
    let mm = this.getMonth() + 1;
    let dd = this.getDate();
    let string = [yyyy, ("0" + mm).slice(-2), ("0" + dd).slice(-2)].join("-");
    
    return string;
}
let date = new Date(today.getFullYear(), today.getMonth()-1, 1).string().slice(0, 8);
console.log(date);

let bound = new Date(today.getFullYear(), today.getMonth()-1, 1);
let start = new Date(today.getFullYear(), today.getMonth(), 0);
console.log(bound.toString(), start.toString());

let todays = "2021-02-12";
console.log(todays < "3");