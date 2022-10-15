// sample: if (localStorage.uvc_hist === "hist") {
//  sinopse = "texto"   
// info = "texto"
//  }

var sinopse;
var info;
var subtitulo;  
localStorage.setItem('uvc_error','false')


if (localStorage.uvc_hist === "S_KER") {
    sinopse = "Kerry vivia feliz a partir do luxo com seus pais, porém do dia pra noite sua vida se torna um pesadelo, e sua maior ambição se torna a vingança."
    info = 'Kerry é Uma história violenta, sofrida e uma boa retratante da cidade desigual e perigosa que é Glen.Criado para ser um anti-herói com uma personalidade forte e temperamental, O personagem Kerry apareceu incialmente nas tramas de apocalipse que Telecinese passou, em 07/07/2019, e depois teve sua primeira(de muitas) histórias originais.Ele também aparece como um Guardião, em <a href="Guardiões.html" style="font-size:22.5px; Color:#cfd4ae; text-decoration:underline" >Guardiões</a>'
    document.title = 'Kerry, O Guerreiro Da Vingança'
    titulo = 'Kerry'
    subtitulo = 'O Guerreiro da Vingança'
  }
else if (localStorage.uvc_hist === "S_CIEC") {
    sinopse = "Conheça a origem de Ciecon, um dos mais influentes superpoderosos de todo universo e o líder dos Congregadores!"
    info = "Ciecon, o primeiro herói criado no ambiente universal, era pra ser um focado e influente em muitas histórias do UVC, e os congregadores uma equipe sempre crescente, forte e motivada contra os males gerais.Sua história, refeita diversas vezes, teve seu início no dia 22/08/2019.Ele aparece em 'Congregadores'."
    document.title = 'Ciecon,o Justiceiro Espacial'
    titulo = 'Ciecon'
    subtitulo = 'O Justiceiro Espacial'
  }  else if (localStorage.uvc_hist === "S_HAD") {
    sinopse = "Veja os objetivos malignos e a origem do grandioso e temido Hades, conhecido como o Demônio."   
    info = "O Vilão original e a representação do mal, Hades era pra ser uma história que explica outras histórias e a origem dos superpoderosos.Sem um final, o desfecho da história do grande Demônio será continuada em outras histórias, como Ciecon, Congregadores, Guardiões e muito mais! "
    document.title = 'Hades'
    titulo = 'Hades'
    subtitulo = ''
  }

else if (localStorage.uvc_hist === "S_PM") {
    sinopse = "OBS:É RECOMENDADO QUE ANTES DE VER ESSA HISTÓRIA VOCÊ LEIA CONGREGADORES, 'ATO I'. Entenda a origem dos Aedificantes, e como eles resistiram a soberania da Red Right Hand."   
    info = "A primeira espécie não humana apresentada nas histórias, os Aedificantes são um povo importante para o enredo geral do UVC. O fim da história é aberto, pois é continuado em Congregadores"
    document.title = 'Punho Mortal'  
    titulo = 'Punho Mortal'
    subtitulo = ''
  }

   else if (localStorage.uvc_hist === "S_GLAC") {
        sinopse = "Cole Froz chega na terra, e junto a um colega, decidiu tentar destruir todo o planeta."
        info = 'O Primeiro ato Secundário do UVC, O Glacial Fim do Mundo é também o segundo arco que apresenta um apocalipse mundial(seguido do apocalipse vampírico, Telecinese 2). Essa história é, além de uma dinâmica e cheia de ação, traz reflexões e problemas iminentes. Cole, da família rica Froz, ainda terá(ou talvez já tenha) histórias, tanto primárias quanto secundárias.Uma das mais recentes, foi construída em 28/01/2022 e, como Arner diz:"A Red Right perecerá durante a Eternidade" '
        document.title = 'O Glacial Fim do Mundo'
        titulo = 'O Glacial Fim do Mundo'
        subtitulo = ''
      }

      else if (localStorage.uvc_hist === "SE_CONG") {
        if (localStorage.uvc_ep == 0) {
          sinopse = 'Ciecon continua em suas atividades e se dá conta que talvez seja uma boa ideia criar uma equipe...'
          subtitulo = 'A Extinção'
        }

        if (localStorage.uvc_ep == 1) {
          sinopse = 'Junto com seu novo aliado,Ciecon sintetiza forças para derrotar o Robô que parecia ser implacável'
          subtitulo = 'Uma Nova Amizade'
        }

        if (localStorage.uvc_ep == 2) {
          sinopse = 'Ciecon conhece o mais o seu aliado numa missão repentina.Será que seu plano de formar uma equipe é o melhor caminho?'
          subtitulo = 'O Futuro Incerto'
        }
        titulo = 'Congregadores'
        let numeroep = parseInt(localStorage.uvc_ep)
        document.title = 'Congregadores EP' + ++numeroep
        info = 'A primeira equipe inter-universal foi criada primeiramente em 20/09/2019.Por sinal,seu primeiro nome foi "LACP",que significa liga anti colonização de planetas.Mas além de ser um nome enorme,não soa bem e não é sugestivo,além de ser parecido com terceiros.Sua ideia é ser uma equipe literalmente sem fim,que vai ter fases e fases,e vai perecer durante toda a vida do UVC. '
      }


      else if (localStorage.uvc_hist === "SE_GUA") {
        if (localStorage.uvc_ep == 0) {
          sinopse = "O Início da estadia da família de Beenie em Beatus já começa com episódios bizarros..."
          subtitulo = 'Mudanças'
        }

        if (localStorage.uvc_ep == 1) {
          sinopse = "Beenie se vê sem ninguém e sem chão,porém diante de tanta confusão ele descobre que tem um poder inexplicável."
          subtitulo = 'Dificuldades'
        }

        if (localStorage.uvc_ep == 2) {
          sinopse = 'Está na hora de Beenie testar seus poderes.Como será que ele vai se sair?'
          subtitulo = 'Poderes'
        }

        titulo = 'Os Guardiões'
       let numeroep = parseInt(localStorage.uvc_ep)
        document.title = 'Guardiões EP' + ++numeroep
        info = "Os Guardiões,a primeira história de equie criada é a imagem do UVC,uma equipe formada por uma família comum,com defeitos e trejeitos de pessoas normais.A primeira história criada foi em 09/06/2019,mas o Telecinese foi o primeiro herói criado quando eu era apenas uma criança,em meados de 2016."
      }

   else if (localStorage.uvc_hist === "SE_RRH") { 
        if (localStorage.uvc_ep == 0) {
          sinopse = "A primeira de muitas reuniões da Red Right Hand.Quais serão seus objetivos?"   
          document.title = 'Red Right Hand,EP 00'
          subtitulo = 'A reunião'
        }
        if (localStorage.uvc_ep == 1) {
            sinopse = 'As corridas se iniciam, e os poderosos da Red Right Hand devem garantir a paz e tornar o ambiente mais seguro possível para o dinheiro ser movimentado, enquanto um roubo silencioso está para ser efetuado.'    
            document.title = 'Red Right Hand,EP 01'
            subtitulo = 'Corrida Capitalista'
          }
          if (localStorage.uvc_ep == 2) {
            sinopse = 'O roubo tem seu início.Será que os irmãos conseguirão o tão sonhado tesouro?'
           document.title = 'Red Right Hand,EP 02' 
           subtitulo = 'Invasões'  
          }
          if  (localStorage.uvc_ep == 3) {
            sinopse = 'A tranquilidade é interrompida em Severum. Será que a praça se tornará um campo de guerra?'  
            document.title = 'Red Right Hand,EP 03' 
            subtitulo = 'Brechas do passado' 
          }
          if  (localStorage.uvc_ep == 4) {
            
            sinopse = 'Arner reune todos pra reunir os fatos e decidir o futuro de Severum.'   
            document.title = 'Red Right Hand,EP 04' 
            subtitulo = 'O Veredicto'
          }
          if  (localStorage.uvc_ep == 5) {
            sinopse = 'a'   
            document.title = 'Red Right Hand,EP 05' 
            subtitulo = 'Novos Conflitos'
          }
          if  (localStorage.uvc_ep == 6) {
            sinopse = 'a'
            document.title = 'Red Right Hand,EP 06'  
            subtitulo = ''  
          }
          if  (localStorage.uvc_ep == 7) {
            sinopse = 'a'    
            document.title = 'Red Right Hand,EP 07'
            subtitulo = ''
            subtitulo = ''
          }
          if  (localStorage.uvc_ep == 8) {
            sinopse = 'a'   
            document.title = 'Red Right Hand,EP 08'
            subtitulo = '' 
          }
          if  (localStorage.uvc_ep == 9) {
            sinopse = 'a'    
            document.title = 'Red Right Hand,EP 09'
            subtitulo = ''
          }
          if  (localStorage.uvc_ep == 10) {
            sinopse = 'a'
            document.title = 'Red Right Hand,EP 10'
            subtitulo = ''    
          }
          if  (localStorage.uvc_ep == 11) {
            sinopse = 'a'   
            'Red Right Hand,EP 11'
            subtitulo = '' 
          }
          if  (localStorage.uvc_ep == 12) {
            sinopse = 'a'  
            'Red Right Hand,EP 12'
            subtitulo = '' 
          }
          titulo = 'Red Right Hand'
          info = 'Red Right Hand, uma das principais e mais influentes equipes do Ato I do UVC, foi criada recentemente e com o intuito de dividir opiniões, andar pelo certo, ou arriscar o errado?Paz ou o Triunfo?Descubra qual você acha o melhor caminho!'

    } else {
      titulo = 'Error 404'
      substitulo = ' '
      sinopse = ' '
      info = ' '
      localStorage.setItem('uvc_error','true')
      document.querySelector('#boxtexto').innerHTML = '<h1 style="font-size=30px;color:black; font-family=Roboto_Serifa">Ocorreu um erro :(<h1><br><a style="font-size=30px" href="Contos.html">Voltar para o Lobby</a>'

    // }
    // if (!subtitulo) {
    //   subtitulo = 'ocorreu um erro'
    //   sinopse = 'Ocorreu um erro.Contate ao Suporte'
    }

    

    boxsinopse = document.querySelector('#boxsinopse')
    boxinfos = document.querySelector('#dropboxinfos')
    selectitulo = document.querySelector('#titulonomehist')
    selecsubtitulo = document.querySelector('#subtitulonomehist')

    boxsinopse.innerText = sinopse
    boxinfos.innerHTML = info
    selectitulo.innerText = titulo
    selecsubtitulo.innerText = subtitulo



