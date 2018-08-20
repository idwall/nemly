/*Os termos estão setados aqui, porém em futura atualização os mesmos estarão
inseridos em um arquivo Json */

var total = [
"Conteúdo",
"Configurações de anúncios",
"Foro",
"Exclusivo Proprietário",
"Sua conta e risco exclusivo",
"Você concorda que",
"Serão de sua responsabilidade",
"A qualquer momento",
"Reserva o Direito",
"Aviso prévio",
"Ciente",
"Permanece",
"Conduta",
"Responsável",
"Não será responsável",
"Responderá",
"Obrigada",
"Você reembolsará",
"Taxas e encargos",
"Cobrados",
"Cobrança",
"Valores adicionais",
"Indenização",
"Não reembolsável",
"Método secundário de cobrança",
"Certificação Privacy Shield",
"Privacidade",
"Você fornece",
"Fornecer a terceiros",
"Política de Dados Compartilhar informações",
"Coletamos informações",
"Usamos informações",
"Repassar",
"Informações públicas",
"Impressão digital",
"Consentimento",
"Perpétua, irrevogável, transferível, isenta de royalties, e com direito a sublicenciar",
"Sublicenciada",
"Armazenar",
"Divulgar",
"Vender",
"Revender",
"A seu critério exclusivo",
"Royalties",
"Isenta",
"Prestador Terceiro",
"Licença mundial",
"Exclusão de informações",
"Não exclusiva",
"Direitos autorais",
"Medidas de Segurança",
"Outorga",
"Você é responsável",
"Atribuir",
"sem aviso prévio"];


/*função que troca as palavras por uma marcação deixando em evidência
*além de inserir uma div para futura localização*/
var match = 0;
var teste = total;
for (i = 0; i < total.length; i++) {
    document.body.innerHTML = document.body.innerHTML.split(total[i]).join('<div style="display: inline;" id="'+i+'"><mark style="background-color: yellow;color:black">'+total[i]+'</mark></div>');
    if(document.body.innerHTML == document.body.innerHTML.split(total[i])){
      match ++;
      teste[i] = teste[i] - total[i];
    }//match ++ ;
}
if(match != 0){
  var match =  total.length - match;
  console.log('Foram encontradas '+match+' correspondências');
  for (i = 0; i < total.length; i++) {
        console.log('!!!!!!!!!! '+teste[i]+' ----->');
        if (!!teste[i]){
          chrome.runtime.sendMessage(teste[i]);
        }

  }


  chrome.runtime.sendMessage('Foram encontradas '+match+' correspondências');
}
