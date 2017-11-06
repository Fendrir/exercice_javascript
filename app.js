function test1(z)
{
   z = z + "suffixe";
}

var x = "démo";
test1(x);

console.log(x);




// _____________________________________________________________

function test2(a)
{
   a.push("ajouté");
}

x = ["un", "deux", "trois"];
test2(x);

console.log(x);