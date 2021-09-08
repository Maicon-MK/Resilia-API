var botao =$('#botao')
console.log(botao)

botao.on('click',()=>{
    $.ajax({
        url:`https://api.nasa.gov/planetary/apod?api_key=nMeHdp9pC8YIEau9bxjExZCZO1x67lvx2v0Ta4UM&date=${date.value}`,
        success: function(result){
            $('#imagem').css(
            'background-image',`url(${result.url})`
            )
            $('#texto').html(`${result.explanation}`)

     }
    });
  });
   