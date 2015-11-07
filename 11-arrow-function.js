var inputs = process.argv.slice(2);
var result = inputs.map((s)=>{ return s[0]; })
                   .reduce((c1, c2)=>{ return c1 + c2; });

console.log(result);
