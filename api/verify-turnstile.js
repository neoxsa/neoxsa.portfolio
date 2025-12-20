export const config = { runtime: "nodejs" };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  const { token } = req.body || {};

  if (!token || typeof token !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Invalid or missing token'
    });
  }

  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.error('TURNSTILE_SECRET_KEY not configured');
    return res.status(500).json({
      success: false,
      error: 'Server config error'
    });
  }

  try {
    const params = new URLSearchParams();
    params.append('secret', process.env.TURNSTILE_SECRET_KEY);
    params.append('response', token);

    const upstream = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    const text = await upstream.text();

    let data;
    try {
      data = text ? JSON.parse(text) : null;
    } catch (err) {
      console.error('Invalid JSON from Turnstile upstream:', err.text);
      return res.status(502).json({
        success: false,
        error: 'Invalid upstream response'
      });
    }

    if (!upstream.ok) {
      console.error('Turnstile upstream error', upstream.status, data);
      return res.status(502).json({
        success: false,
        error: 'Verification service error',
        upstreamStatus: upstream.status,
        upstreamBody: data
      });
    }

    return res.status(200).json({
      success: data?.success === true,
      upstream: data
    });

  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}
