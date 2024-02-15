chapitres de fonction ( requête ,  extra ,  javascriptConfig ,  sortie )  {
    ce . demande  =  demande ;
    ce . supplémentaire  =  supplémentaire ;
    ce . javascriptConfig  =  javascriptConfig ;
    ce . sortie  =  sortie ;
}
function  ModuleRequest ( url ,  méthode ,  en-têtes ,  httpBody )  {
    ce . URL  =  URL ;
    ce . méthode  =  méthode ;
    ce . en-têtes  =  en-têtes ;
    ce . httpCorps  =  httpCorps ;
}
function  Extra ( commandes ,  extraInfo )  {
    ce . commandes  =  commandes ;
    ce . extraInfo  =  extraInfo ;
}
 Commandes de fonction ( commandName ,  params )  {
    ce . nomcommande  =  nomcommande ;
    ce . paramètres  =  paramètres ;
}
fonction  JavascriptConfig ( RemoveJavascript ,  LoadInWebView ,  javaScript )  {
    ce . supprimerJavascript  =  supprimerJavascript ;
    ce . chargementInWebView  =  chargementInWebView ;
    ce . javaScript  =  javaScript ;
}
fonction  KeyValue ( clé ,  valeur )  {
    ce . clé  =  clé ;
    ce . valeur  =  valeur ;
}
fonction  Sortie (  vidéos ,  images ,  texte )  {
    ce . vidéo  =  vidéo ;
    ce . images  =  images ;
    ce . texte  =  texte ;
}
    
fonction  Vidéos ( besoinsResolver ,  rawVideo )  {
    ce . besoinsResolver  =  besoinsResolver ;
    ce . rawVideo  =  rawVideo ;
}
function  NeedsResolver ( solverIdentifier ,  lien )  {
    ce . solveurIdentifier  =  solveurIdentifier ;
    ce . privilège  =  privilège ;
}

fonction  getValueFromKey ( clés , clé )  {
    pour  ( var  x  =  0 ;  x  <  clés . longueur ;  x ++ )  {
        laissez  tKey  =  clés [ x ] ;
        si  ( tClé . clé  ==  clé )  {
            retourne  tKey . valeurs ;
        }
    }  retour  '' ;
}
    
var  saveData  =  document . getElementById ( 'ketsu-final-data' ) ;
const  parsedJson  =  JSON . analyseur ( saveData . innerHTML ) ;
const  emptyKeyValue  =  [ new  KeyValue ( '' ,  '' ) ] ;

var  sortie  =  parsedJson . sortir . vidéos ;
var  extraInfo  =  parsedJson . supplémentaire . informations supplémentaires ;
var  count  =  getValueFromKey ( extraInfo , 'count' ) ;
if  ( count  ==  0 )  {  output  =  nouvelles  vidéos ( [ ] , [ ] ) ;  }

if  ( parsedJson . request . url . include ( 'frenchstream' ) )  {
    laissez  lien  =  document . querySelector ( 'iframe' ) . src ;
    if  ( ! link . split ( 'php' ) [ 0 ] . include ( 'https:' ) )  {  link  =  'https:' + lien ;  }
    informations supplémentaires . push ( new  KeyValue ( '' + ( extraInfo . length - 2 ) ,  encodeURI ( lien ) ) ) ;
}  else  if  ( parsedJson . request . url . include ( 'play.php' ) )  {
    pour  ( script  du  document . querySelectorAll ( 'script' ) )  {
        if  ( script . innerHTML . include ( 'eval(function' ) )  {
            var  nouveauScript  =  document . createElement ( 'script' ) ;
            nouveauScript . innerHTML  =  script . intérieurHTML . replace ( 'return p' ,  'document.title = p; return p' ) ;
            document . corps . appendChild ( nouveauScript ) ;
            casser ;
        }
    }
    laissez  lien  =  parsedJson . exiger . URL . split ( 'play' ) [ 0 ]  +  document . titre . divisé ( 'src' ) [ 1 ] . diviseur ( '\"' ) [ 1 ] ;
    informations supplémentaires . push ( new  KeyValue ( '' + ( extraInfo . length - 2 ) ,  encodeURI ( lien ) ) ) ;
}  else  if  ( parsedJson . request . url . include ( 'playback.php' ) )  {
    laissez  lien  =  parsedJson . exiger . URL . split ( '/play' ) [ 0 ]  +  document . querySelector ( 'iframe' ) . src ;
    informations supplémentaires . push ( new  KeyValue ( '' + ( extraInfo . length - 2 ) ,  encodeURI ( lien ) ) ) ;
}  autre  {
    essayer  {
        laissez  lien  =  document . querySelector ( '[property=\"og:url\"]' ) . contenu ;
        sortir . besoinsRésolveur . push ( new  NeedsResolver ( '' ,  new  ModuleRequest ( lien ,  'get' ,  emptyKeyValue ,  null ) ) ) ;
    }  attraper { }
}

var  nextRequest  =  getValueFromKey ( extraInfo , '' + nombre ) ;
if  ( nextRequest . include ( 'play.php' ) )  {  var  noJS  =  false  }
sinon  {  var  noJS  =  vrai }
extraInfo [ 1 ] . valeur  =  '' + ( parseInt ( nombre )  + 1 ) ;

const  épisodesPageObject  =  nouveaux  chapitres ( new  ModuleRequest ( nextRequest ,  'get' ,  [ extraInfo [ 0 ] ] ,  null ) ,  new  Extra ( [ new  Commands ( '' ,  emptyKeyValue ) ] ,  extraInfo ) ,  new  JavascriptConfig ( noJS ,  false ,  ' ' ) ,  nouvelle  sortie (  sortie ,  null ,  null ) ) ;

données sauvegardées . interneHTML  =  JSON . stringify ( épisodesPageObject ) ;
@Yoyo1080
Commentaire
 
laissez un commentaire
 
Bas de page
© 2024 GitHub, Inc.
Navigation en pied de page
Termes
Confidentialité
Sécurité
Statut
Documents
Contact
Gérer les cookies
