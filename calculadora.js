let option=""

function menu(){
    option=prompt("Escolha uma das opções de operação listadas\n"+
    "\n1- Calcular area de um círculo"+
    "\n2- Calcular area de um quadrado"+
    "\n3- Calcular area de um retangulo"+
    "\n4- Calcular area de um triangulo"+
    "\n5- Calcular area de um trapézio"+
    "\n6- Sair"
    )
}

function areaCiculo(){
    let raio=prompt("Digite o raio do circulo:")
    return alert("A area do circulo é: "+3.14*(raio*raio))
}

function areaQuadrado(){
    let lado=prompt("Digite o lado do quadrado:")
    return alert("A area do quadrado é: "+lado*lado)
}

function areaRetangulo(){
    let comprimento=prompt("Digite o comprimento do retangulo:")
    let altura=prompt("Digite a altura do retangulo:")
    return alert("A area do retangulo é: "+comprimento*altura)
}

function areaTriangulo(){
    let base=prompt("Digite a base do triangulo:")
    let altura=prompt("Digite a altura do triangulo: ")
    return alert("A area do triangulo é: "+(base*altura)/2)
}

function areaTrapezio(){
    let baseMaior=parseFloat( prompt("Digite o tamanho da base maior do trapézio:"))
    let baseMenor=parseFloat( prompt("Digite o tamanho da base menor do trapézio:"))
    let altura=parseFloat( prompt("Digite a altura do trapézio:"))
    return alert("A area do trapézio é: "+((baseMaior+baseMenor)*altura)/2)

}


do {
    menu()

    switch(option){
        case "1":
            areaCiculo()
            break
        case "2":
            areaQuadrado()
            break
        case "3":
            areaRetangulo()
            break
        case "4":
            areaTriangulo()
            break
        case "5":
            areaTrapezio()
            break
        case "6":
            alert("Encerrando")
            break
        default:
            alert ("Digite uma opção valida!!")
            
    }
} while (option!="6");