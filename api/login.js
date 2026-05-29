export default function handler(req, res) {

  if(req.method !== 'POST'){
    return res.status(405).end();
  }

  const { password } = req.body;

  if(password !== process.env.PAGE_PASSWORD){
    return res.status(401).json({ ok:false });
  }

  res.setHeader(
    'Set-Cookie',
    'auth=ok; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400'
  );

  return res.status(200).json({ ok:true });
}
