function(instance, properties, context) {
    let compararNumeros = (a,b)=> a-b;
    const tamanho = properties.list_of_value.length();  
    if(tamanho>0){ 
        const numero =  properties.list_of_value.get(0,tamanho);    
        const sum = numero.reduce((partial_sum, a) => partial_sum + a, 0);
        let parouimpar = tamanho%2;    
        let media = sum/tamanho; //media  
        let posicao=0; //mediana \/\/\/\/
        let mediana=0;
        let listaOrdenada = numero.sort(compararNumeros);
        if (parouimpar==0) {
        posicao = (tamanho/2)-1;
        let summediana = listaOrdenada[posicao]+listaOrdenada[posicao+1];
        mediana = summediana/2;     
        }else {
        posicao = (tamanho-1)/2;
        mediana = listaOrdenada[posicao];
        }//fim mediana   
        let sequencia = listaOrdenada;  //moda numeros \/\/\/\/\/
        let moda = [];
        let frequencia = 0;
        let frequenciaant=0;
        let check = [];
        let modatamanho = sequencia.length;
        let contador = 0; 
        let resultmoda= "";
        let freqmoda = "";
        for (let i = 0; i < modatamanho; i++){
            contador=0;
            for (let a = 0; a < modatamanho; a++){ 
                if (sequencia[i] == sequencia[a]){contador++;}
                if (frequencia<contador){
                    moda=[];
                    moda[0]=sequencia[i];
                    frequencia =contador;
                }else if (frequencia==contador){
                        if(moda.length!=0){
                            let ultimo=moda[moda.length-1]; 
                            if (ultimo!=sequencia[i]){
                                moda.push(sequencia[i]);
                            }
                        }
                }
            }
            if (frequenciaant==0){
                if (frequencia==contador){
                check.push(sequencia[i]);
                }
            }else{
                if (frequenciaant==contador){
                check.push(sequencia[i]);
                }
            }
            frequenciaant=frequencia;
        }
        if (check.toString()==sequencia.toString()){
            resultmoda="No mode";
            freqmoda = frequencia.toString();
        }else{
            resultmoda = moda.toString(); 
            freqmoda = frequencia.toString();
        }//fim moda            
        let listavariancia = [];//variancia\/\/\/\/    
        for (let w = 0; w < tamanho; w++){        
            listavariancia.push(Math.pow((numero[w]-media),2));
        }
        let somavariancia = listavariancia.reduce((partial_sum, a) => partial_sum + a, 0);//soma de todos os valores
        let variancia = somavariancia/tamanho;//fim variancia
        let desviopadrao = Math.sqrt(variancia);//desvio padrao     
        let range = sequencia[sequencia.length-1]-sequencia[0];//alcance
        let listamad = [];//MAD\/\/\/
        for (let z = 0; z < tamanho; z++){            
            listamad.push(Math.abs(numero[z]-media));
        }
        let somamad = listamad.reduce((partial_sum, a) => partial_sum + a, 0);//soma de todos os valores 
        let mad = somamad/tamanho;//fim MAD
        let distorcao = (media-mediana)/desviopadrao;//distorcao    
        instance.publishState('distorcao', distorcao);
        instance.publishState('mad', mad);
        instance.publishState('desviopadrao', desviopadrao); 
        instance.publishState('variancia', variancia); 
        instance.publishState('range', range);
        instance.publishState('resultmoda', resultmoda);
        instance.publishState('freqmoda', freqmoda);
        instance.publishState('media', media);
        instance.publishState('mediana', mediana);
        instance.publishState('orderedlist',numero.sort(compararNumeros).toString());
        instance.publishState('sum',sum);
    }else{
        instance.publishState('distorcao', 0);
        instance.publishState('mad', 0);
        instance.publishState('desviopadrao', 0); 
        instance.publishState('variancia', 0); 
        instance.publishState('range', 0);
        instance.publishState('resultmoda', "-");
        instance.publishState('freqmoda', "-");
        instance.publishState('media', 0);
        instance.publishState('mediana', 0);
        instance.publishState('orderedlist',"-");
        instance.publishState('sum',0);
        }
}