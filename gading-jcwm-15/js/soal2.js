
function cariFibonacci(event){
    event.preventDefault()

    let angka = parseInt(document.getElementById("inputAngka").value)
    let tipe = document.getElementById("inputTipe").value


    if(tipe == "show"){

        var a = 0;
        var b = 1;
        var f = a + b;
        var x = "";
        while(f < angka){
            x += `${f} `
            f = a + b;
            a = b;
            b = f;
        
        document.getElementById("hasilJawaban").innerHTML = `${x}`
        }
    }else if(tipe == "ganjil"){
        var a = 0;
        var b = 1;
        var f = a + b;
        var x = [];
        while(f < angka){
            
            if(f % 2 != 0){
                x.push(f)
            }
            
            f = a + b;
            a = b;
            b = f;
            var sum = x.reduce(function(a,b){
                return a+b
            },0)
        document.getElementById("hasilJawaban").innerHTML = `${x} = ${sum}`
        }
    }else if(tipe == "genap"){
        var a = 0;
        var b = 1;
        var f = a + b;
        var x = [];
        while(f < angka){
            
            if(f % 2 == 0){
                x.push(f)
            }
            
            f = a + b;
            a = b;
            b = f;
            var sum = x.reduce(function(a,b){
                return a+b
            },0)
        document.getElementById("hasilJawaban").innerHTML = `${x} = ${sum}`
        }
    }

}