
    //chama o javaScript quando o site é aberto
    window.onload = function () {

      var t = document.getElementById('titulo');
        var subt = document.getElementById('subtitulo');
        var subsubt = document.getElementById('subsubt');

      // Chama a função passando o elemento e as cores iniciais
      //brilha(port, 53, 67, 197, 1, 11, 44);
      brilhaTransparente(t,255,255,247,0, 0.3, 50)
      brilhaTransparente(subt,255,255,247,0, 0.08, 100) 
      brilhaTransparente(subsubt,255,255,247,0, 0.01, 250)    
    };

//brilha(elemento, (rgb), (rgb)) pode reuzar para qualquer background




                // Função que aplica o efeito de brilho
                function brilha(elemento, r, g, b, r2, g2, b2,) {
                    setInterval(() => {
                        //potência que eu quero de cores
                    r = (r + 1) % 54;
                    g = (g + 1) % 64;
                    b = (b + 1) % 168;
                        //potência que eu quero de cores2
                    r2 = (r2 + 0.5) % 5;
                    g2 = (g2 + 0.55) % 19;
                    b2 = (b2 + 0.5) % 50;

                    //atualiza no site
                    elemento.style.background = `linear-gradient(to left, rgba(${r}, ${g}, ${b}), rgba(${r2}, ${g2}, ${b2}))`;
                    
                    }, 200);
                }





                // Função que aplica o efeito de brilho
                function brilhaTransparente(elemento, r,g,b,a, almentar,  s) {
                    var intervalo = setInterval(() => {
                        //potência que eu quero de cores
                    a = (a + 0.03) % 1;
                    if(a >= 0.99){clearInterval(intervalo)}
                    
                    //atualiza no site
                    elemento.style.color =`rgba(${r}, ${g}, ${b}, ${a})`;
                }, s);
            }