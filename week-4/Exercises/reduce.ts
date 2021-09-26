type AccumulatorObject = { [key:string] : string; }
let mything = ["stuff", "things"].reduce((acc,item)=> {
        const obj:AccumulatorObject =  {...acc};
        obj[item] = item;
        return obj;
    }, {} as AccumulatorObject);

console.log(mything);