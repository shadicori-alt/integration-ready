export default function handler(req, res) {
  res.status(200).json({
    message: "✅ API is connected and running successfully!",
    note: "أضف كودك هنا لتشغيل الأداة أو الرد التلقائي."
  });
}
