export type campaigns = {
  logo: string
  title: string
  campaignName: string
  campaignImage: string
  campaignDescription: string
}

const mockedCampaigns: campaigns[] = [
  {
    logo: 'https://www.saopaulo.sp.gov.br/wp-content/uploads/2020/05/cover.png',
    title: 'Inverno Solidario',
    campaignName: 'Campanha inverno solidario',
    campaignImage: 'https://tribovibe.com/wp-content/uploads/2021/05/9b06fdcd9ff509f198b22d17a17bf5bf.jpg',
    campaignDescription: 'A Campanha Inverno Solidário é uma iniciativa do Fundo Social de São Paulo.',
  },
  {
    logo: 'https://logodownload.org/wp-content/uploads/2015/05/unesco-logo-10.png',
    title: 'Crianca Esperanca',
    campaignName: 'Campanha Crianca Esperanca Brasil',
    campaignImage: 'https://fjsp.org.br/wp-content/uploads/2012/08/banner-criancaesperanca.jpg',
    campaignDescription:
      'Há 36 anos, o Criança Esperança cria oportunidades de desenvolvimento para crianças e jovens em todo o país.',
  },
  {
    logo: 'https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/51344475_2002514543151726_7450168250098253824_n.png?_nc_cat=108&ccb=1-6&_nc_sid=174925&_nc_eui2=AeE-0ZJk7xsaCPk_e4sp3HWnFXF5x326KpMVcXnHfboqkyAF5lSBsWCetXR-cGbAqbkTHEPWRHLCXhr26Mk7pHEI&_nc_ohc=--ehhtpBtU8AX91Gr9w&_nc_ht=scontent.fgru5-1.fna&oh=00_AT9opHkHelzRVbyryf34zRxJpkgo6YVpm8qbkCTAHhMtWQ&oe=629B58C3',
    title: 'Doacao de Sangue',
    campaignName: 'Campanha doacao de sangue',
    campaignImage: 'https://gkpb.com.br/wp-content/uploads/2021/07/sp-market-doacao-de-sangue.jpg',
    campaignDescription:
      'O shopping SP Market vai promover amanhã (02/07) uma campanha de Doação de Sangue em parceria com a ONG Amor se Doa e o Hemocentro São Lucas.',
  },
]

export { mockedCampaigns }
