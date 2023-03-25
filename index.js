function desconto(valorVenda, convenio, cartaoDaLoja){
    if(cartaoDaLoja && convenio){
        console.log('voce possui um desconto de 15%')
        valorVenda = valorVenda - (valorVenda * 0.15);
        return valorVenda;
        
    }else if( cartaoDaLoja || convenio){
        console.log('voce possui um desconto de 10%')
        valorVenda = valorVenda - (valorVenda * 0.10);
        return valorVenda
    }
    return valorVenda;

    }
    
    let vai = desconto(1000, false, true)
    console.log(vai)

 function limiteDesconto(desconto){
    if(desconto > 100){
        valordesconto = 100;
     return valordesconto
     }
 }
 let vaii = limiteDesconto(1000)
 console.log(vaii)