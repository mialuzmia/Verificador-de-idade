function verificar(){
   let data = new Date
   let ano = data.getFullYear()

   let boxano = document.querySelector('input#boxano')
   let res = document.getElementById('res')

   if(boxano.value == 0 || boxano.value > ano){
        window.alert("Ano inválido, verifique os dados e tente novamente.")
   }
   else{
        let boxsex = document.getElementsByName('radsex')
        let idade = ano - Number(boxano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')

        if(boxsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <= 5){
                //bebê
                img.setAttribute('src', 'bebemenino.png')
            }
            else if(idade <= 15){
                //criança
                img.setAttribute('src', 'criancamenino.png')
            }
            else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            }
            else if(idade <= 60){
                //adulto
                img.setAttribute('src','adultohomem.png')
            }
            else{
                // idoso
                img.setAttribute('src', 'idosohomem.png')
            }

        }
        else if (boxsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade <= 5){
                //bebê
                img.setAttribute('src', 'bebemenina.png')
            }
            else if(idade <= 15){
                //criança
                img.setAttribute('src', 'criancamenina.png')
            }
            else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            }
            else if(idade <= 60){
                //adulto
                img.setAttribute('src', 'adultomulher.png')
            }
            else{
                // idoso
                img.setAttribute('src', 'idosomulher.png')
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
   }
}