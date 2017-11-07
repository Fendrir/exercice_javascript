// function test1(z)
// {
//    z = z + "suffixe";
// }

// var x = "démo";
// test1(x);

// console.log(x);




// _____________________________________________________________

// function test2(a)
// {
//    a.push("ajouté");
// }

// x = ["un", "deux", "trois"];
// test2(x);

// console.log(x);

// ________________________ faire un tri des chiffres ____________________________________


// tab = [1,4,2,5,1,5,3,20,15,50,1,5,-2,-20];


// tab.sort(function(i, j) {

//     if (i < j) {
            
//         return -1;
            
//     } else if (i > j) {
            
//         return 1;
            
//     } else {
            
//         return 0;
            
//     }

// });



// alert(tab);


// ________________________________ essayer autre façon ___________________________________


// tab = [1,4,2,5,1,5,3,20,15,50,1,5,-2,-20];


// var func = function(a,b){
//     return a>b ;
//  };

function tri(tab,func){

    for (var i = 0; i < tab.length; i++) {

        for (var j = i+1; j < tab.length; j++){

            if(tab[j] > tab[i]){

                var tabTri = tab[j];
                tab[j]=tab[i];
                tab[i]=tabTri;

            }

        }

        
    }
    
    return tab;

};

console.log(tri([1,4,2,5,1,5,3,20,15,50,1,5,-2,-20],function(a,b){

    return a>b;
}));

alert(tri([1,4,2,5,1,5,3,20,15,50,1,5,-2,-20],function(a,b){

    return a>b;
}));

 