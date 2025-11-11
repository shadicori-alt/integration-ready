export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      message: "✅ API متصل ويعمل بنجاح",
      note: "يمكنك الآن إرسال طلبات من الواجهة."
    });
  }

  if (req.method === "POST") {
    const { action, data } = req.body || {};

    switch (action) {
      case "test_connection":
        return res.status(200).json({ reply: "📡 الاتصال بالـAPI ناجح." });
      case "send_message":
        return res.status(200).json({ reply: `💬 تم إرسال الرسالة: ${data}` });
      case "comment_reply":
        return res.status(200).json({ reply: `🗨️ تم الرد على التعليق: ${data}` });
      case "ai_reply":
        return res.status(200).json({ reply: `🤖 رد تجريبي من الذكاء الاصطناعي: ${data}` });
      case "save_order":
        return res.status(200).json({ reply: `📝 تم حفظ الطلب بنجاح: ${data}` });
      default:
        return res.status(400).json({ error: "⚠️ لم يتم التعرف على نوع الطلب." });
    }
  }

  return res.status(405).json({ error: "❌ نوع الطلب غير مدعوم (GET أو POST فقط)." });
}

