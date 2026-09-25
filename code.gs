function doGet(e) {
  // เปลี่ยนมาใช้ Template เพื่อให้ฝังรูปภาพจากหลังบ้านได้
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('ระบบบันทึกผลการพัฒนาคุณภาพผู้เรียน (E-สกร4)')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// ฟังก์ชันสำหรับดึงรูปโลโก้มาแปลงเป็น Base64 (แก้ปัญหาภาพหายตอนเซฟ PDF/Print 100%)
function getLogoBase64() {
  var url = "https://img2.pic.in.th/751fbc5f60625bbaf98c4b5834e75912.png";
  try {
    var response = UrlFetchApp.fetch(url);
    var blob = response.getBlob();
    var b64 = Utilities.base64Encode(blob.getBytes());
    return "data:" + blob.getContentType() + ";base64," + b64;
  } catch(e) {
    return url; 
  }
}
