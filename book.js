exports.handler = async function (event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const required = ['name', 'email', 'phone', 'service', 'date', 'time'];
  const missing = required.filter((k) => !body[k] || String(body[k]).trim() === '');
  if (missing.length) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing fields: ' + missing.join(', ') }) };
  }

  // Minimal email check
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email)) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid email address' }) };
  }

  // At this point you would persist the booking to a DB, send a notification, etc.
  // For this simple function we return success with the booking preview.

  const booking = {
    name: body.name,
    email: body.email,
    phone: body.phone,
    service: body.service,
    date: body.date,
    time: body.time,
    notes: body.notes || '',
    receivedAt: new Date().toISOString(),
  };

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ message: 'Booking received', booking }),
  };
};
