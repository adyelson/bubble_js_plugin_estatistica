function(instance, properties, context) {
        const tamanho = properties.list_of_value.length();  
        if(tamanho>0){
        const numero =  properties.list_of_value.get(0,tamanho);    
        let sequencia = numero.sort();
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
                }// push no lugar de append
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
        }
        instance.publishState('resultmoda', resultmoda);
        instance.publishState('freqmoda', freqmoda);
        instance.publishState('orderedlist',numero.sort().toString());
    }else{
        instance.publishState('resultmoda', '-');
        instance.publishState('freqmoda', '-');
        instance.publishState('orderedlist','-');
    }
}