export type campaign = {
  logo: string
  title: string
  campaignName: string
  campaignImage: string
  campaignDescription: string
  campaignText: string
}

const mockedCampaigns: campaign[] = [
  {
    logo: 'https://www.saopaulo.sp.gov.br/wp-content/uploads/2020/05/cover.png',
    title: 'Inverno Solidario',
    campaignName: 'Campanha inverno solidario',
    campaignImage: 'https://tribovibe.com/wp-content/uploads/2021/05/9b06fdcd9ff509f198b22d17a17bf5bf.jpg',
    campaignDescription: 'A Campanha Inverno Solidário é uma iniciativa do Fundo Social de São Paulo.',
    campaignText:
      'Criada em 1947, tem como objetivo arrecadar cobertores e peças de vestuário novas. AS peças arrecadadas são destinadas para os municípios paulistas e para as entidades sociais da capital cadastradas no Fundo Social, além de hospitais e albergues, que se encarregam de distribuí-las para o público em situação de vulnerabilidade social.\n\nSe você quer participar da arrecadação de cobertores e agasalhos deste ano (2021), procure o Fundo Social do seu município e entregue a doação.\n\nPrecisamos da sua colaboração!',
  },
  {
    logo: 'https://logodownload.org/wp-content/uploads/2015/05/unesco-logo-10.png',
    title: 'Crianca Esperanca',
    campaignName: 'Campanha Crianca Esperanca Brasil',
    campaignImage: 'https://fjsp.org.br/wp-content/uploads/2012/08/banner-criancaesperanca.jpg',
    campaignDescription:
      'Há 36 anos, o Criança Esperança cria oportunidades de desenvolvimento para crianças e jovens em todo o país.',
    campaignText:
      'Criança Esperança é uma campanha nacional de mobilização social que busca a conscientização em prol dos direitos  da criança e do adolescente, promovida pela TV Globo, em parceria com a UNICEF entre 1986 e 2003, e desde 2004 com a UNESCO.\n\nO projeto é uma das mais bem-sucedidas marcas relacionadas a programas sociais dirigidos às crianças carentes em todo o mundo.\n\nAnualmente, são realizados os shows que incentivam as doações feitas pelos telespectadores e por várias instituições.',
  },
  {
    logo: 'https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/51344475_2002514543151726_7450168250098253824_n.png?_nc_cat=108&ccb=1-6&_nc_sid=174925&_nc_eui2=AeE-0ZJk7xsaCPk_e4sp3HWnFXF5x326KpMVcXnHfboqkyAF5lSBsWCetXR-cGbAqbkTHEPWRHLCXhr26Mk7pHEI&_nc_ohc=--ehhtpBtU8AX91Gr9w&_nc_ht=scontent.fgru5-1.fna&oh=00_AT9opHkHelzRVbyryf34zRxJpkgo6YVpm8qbkCTAHhMtWQ&oe=629B58C3',
    title: 'Doacao de Sangue',
    campaignName: 'Campanha doacao de sangue',
    campaignImage: 'https://gkpb.com.br/wp-content/uploads/2021/07/sp-market-doacao-de-sangue.jpg',
    campaignDescription:
      'O shopping SP Market vai promover amanhã (02/07) uma campanha de Doação de Sangue em parceria com a ONG Amor se Doa e o Hemocentro São Lucas.',
    campaignText:
      'Atento a importância de incentivar ações solidárias durante a pandemia da Covid-19, o SP Market, shopping da Zona Sul de São Paulo, promove, no dia 2 de julho, uma campanha especial de Doação de Sangue.\n\nEm parceria com a ONG Amor Se Doa e o Hemocentro São Lucas, o mall tem como meta conseguir 120 doadores para participar da ação e ajudarem a salvar vidas que dependem da transfusão de sangue.\n\nDe acordo com dados do Ministério da Saúde, devido a pandemia, no ano de 2020, houve uma queda de 15% a 20% no número de doações e, mesmo com o avanço gradual da vacinação, os bancos de sangue ainda se mostram preocupados com seus níveis de estoque Percebendo a fragilidade da nossa sociedade, acreditamos que sempre há um meio de fazer a diferença.\n\nQuando pensamos em promover a Campanha de Doação de Sangue, buscamos uma maneira de tirar a ação do papel e engajar nosso público, que sempre se mostra disposto a contribuir”, relata Maíra Santos, gerente de marketing do SP Market.',
  },
]

export { mockedCampaigns }
