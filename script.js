function openSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

async function testConnection() {
  const res = await fetch('/api', { method: 'GET' });
  const data = await res.json();
  document.getElementById('testResponse').innerText = data.message;
}

async function sendMessage() {
  const msg = document.getElementById('msgInput').value;
  const res = await fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'send_message', data: msg })
  });
  const data = await res.json();
  document.getElementById('msgResponse').innerText = data.reply;
}

async function sendComment() {
  const comment = document.getElementById('commentInput').value;
  const res = await fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'comment_reply', data: comment })
  });
  const data = await res.json();
  document.getElementById('commentResponse').innerText = data.reply;
}

async function fakeConnect(service) {
  document.getElementById('connectResponse').innerText = `✅ تم ربط ${service} بنجاح (وهميًا مؤقتًا)`;
}

async function askAI() {
  const q = document.getElementById('aiInput').value;
  const res = await fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'ai_reply', data: q })
  });
  const data = await res.json();
  document.getElementById('aiResponse').innerText = data.reply;
}

async function saveOrder() {
  const order = document.getElementById('orderInput').value;
  const res = await fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'save_order', data: order })
  });
  const data = await res.json();
  document.getElementById('orderResponse').innerText = data.reply;
}
