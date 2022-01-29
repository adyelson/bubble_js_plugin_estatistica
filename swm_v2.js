function(instance, properties, context) {         
    let compararNumeros = (a,b)=> a-b;
    const tamanho = properties.list_of_value.length();
    const tamanhopeso = properties.list_of_weight.length();  //arry length          
    if(tamanho>0 && tamanho>0 && tamanho==tamanhopeso){     
        const numero =  properties.list_of_value.get(0,tamanho); //numbers values
        const pesos = properties.list_of_weight.get(0,tamanho); //weights values      
        const listmultiplicacao = [];       
        for (let z = 0; z < tamanho; z++){        
            listmultiplicacao.push((numero[z]*pesos[z]));
        }    
        let sum = listmultiplicacao.reduce((partial_sum, a) => partial_sum + a, 0);
        let sumpesos = pesos.reduce((partial_sum, a) => partial_sum + a, 0);
        let media = sum/sumpesos; //media   
        let sumpeso = pesos.reduce((partial_sum, a) => partial_sum + a, 0);//soma de todos os valores          
        let sumvalores = numero.reduce((partial_sum, a) => partial_sum + a, 0);//soma de todos os valores    
        instance.publishState('media', media);
        instance.publishState('sumpeso',sumpeso);     
        instance.publishState('sumvalores',sumvalores);            
        instance.publishState('orderedlistpesos',pesos.sort(compararNumeros).toString());
        instance.publishState('orderedlistvalores',numero.sort(compararNumeros).toString()); 
     }else{
        instance.publishState('media', 0);
        instance.publishState('sumpeso',0);     
        instance.publishState('sumvalores',0);            
        instance.publishState('orderedlistpesos','-');
        instance.publishState('orderedlistvalores','-');
     }
}// corigido bug no calculo da media ponderada