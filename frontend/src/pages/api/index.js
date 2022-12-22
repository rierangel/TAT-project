// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  fetch('https://tatsite.arasait.com/back/paginas/2', {
    method: 'get',
    headers: {
      'Accept': 'application/vnd.api+json'
    }
  }
  ).then(resApi => {
    res.status(200).json({ resApi })
  }).catch(err => {
    res.status(400).json({ erro: err })

  })


}
