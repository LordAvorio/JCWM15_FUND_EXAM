function cariPattern(event){
    event.preventDefault()

    console.log("button diklik")

    let fieldAngka = document.getElementById("inputAngka")
    let angka = parseInt(document.getElementById("inputAngka").value)
    let tipe = document.getElementById("inputTipe").value

    let abjad = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var temp = `<p>`
    let x = 1

    if(fieldAngka == ""){
        alert("Inputan tidak boleh kosong")
    }else if(angka > 4 || angka <= 0){
        alert("Inputan max 4 dan tidak boleh minus")
    }else{
        if(tipe == "ganjil"){
            for (let i = 0; i <angka; i++){
                for (let j = 0; j <= i; j++){
                    temp += `${x} `
                    x += 2
                }
                temp += `</br>`
            }
            temp += `</p>`
            document.getElementById("hasilPattern").innerHTML = `${temp}`
        }else if(tipe == "huruf"){
            for (let i = 0; i <angka; i++){
                for (let j = 0; j <= i; j++){
                    temp += `${abjad[x]} `
                    x += 2
                }
                temp += `</br>`
            }
            temp += `</p>`
            document.getElementById("hasilPattern").innerHTML = `${temp}`
        }
    }
}