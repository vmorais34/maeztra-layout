https://github.com/vmorais34?tab=repositories
https://www.linkedin.com/in/vinicius-santos-de-morais/


### quest1 [ x ]

- produto indisponivel e disponivel

### quest2 [  ]

- Adicionar live shopping no manifest e listar comandos necessários para instalação

"peerDependencies": {
+   "vtexventures.livestreaming": "0.x"
 }

 O live shopping é instalado nas peerDependencies o que significa que precisaremos rodar uma major na versão de publicação para passar com sucesso.

Feito isso: 
- rodamos o comando do git para enviar as alterações
- Com o repo atualizado rodamos o vtex release major stable
- geralmente se roda o vtex deploy --force após o release concluir com sucesso a etapa de vtex publish.
- Feito isso navegaremos até a master pelo CLI da vtex: vtex use master
- e instalamos a nova versão da loja: vtex install account.theme@1.x

### quest3 - [ x ]

- Bugs: 
  Entregavel Arquivos corrrigidos 

### quest4 - [ ]

- slider com infocards (Precisa conter titulo,slider,info-cards)
- adicionar dependencias no manisfest

### quest5 - [ ]

https://app.diagrams.net/ - tabela CL no master data chamado “isNewsletter” = true.

- Explorar trigger no master data para enviar

- enviar para o CrM o email resgatado que tem o campo "isNewsletter" = true



Nesta atividade nós queremos entender o racional usado para resolver esse problema, voce pode enviar qualquer arquivo de desenho, escrita e etc em que possamos entender como voce solucionaria este caso.

OBJETIVO: Nosso cliente atualmente usa o componente nativo da VTEX de newsletter, e para ele o componente funciona da maneira esperada, ele gostaria de aproveitar o momento em que um cliente se inscreve na newsletter e enviar para a ferramenta de CRM os mesmos dados colhidos que nesse caso seria exclusivamente o email.

OBS: quando um cliente se cadastra na newsletter sobe um lead na tabela CL no master data chamado “isNewsletter” = true.

https://developers.vtex.com/docs/apps/vtex.store-newsletter

Nos foi compartilhada a documentação de como enviar os dados de clientes para plataforma parceira na linguagem NODE, não podendo ser em outra linguagem.  

yarn add @mailCRM/mailCRM_marketing  


Nao precisa detalhar a nível de codigo o que voce faria, a ideia é a solução a nível macro, quanto mais detalhada a explicação melhor, mas não se prenda ao codigo e sim na resolução como um todo
recomendamos que use a ferramenta https://whimsical.com/ para que consiga criar uma documentação ou desenho e nos compartilhar o link publico da pagina em que voce criar sua arquitetura.

Exemplo de desenho ou documentação: https://drive.google.com/file/d/1FgHbUVAQHTYcAll5yVZFu4xIgRVeGnk1/view?usp=sharing