document.addEventListener('DOMContentLoaded', function () {
  const qrTexts = document.getElementById('text-qr');
  const sizesselect = document.getElementById('sizesselect');
  const generateBtn = document.getElementById('generateBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const qrContainer = document.querySelector('.body-qr');

  let size = sizesselect.value;

  downloadBtn.classList.remove('active');
  downloadBtn.classList.add('inactive');

  generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (qrTexts.value.trim().length > 0) {
      generateQRCode();
      downloadBtn.classList.remove('inactive');
      downloadBtn.classList.add('active');
    } else {
      alert('Insira um texto ou URL (link) antes de gerar o QR Code');
    }
  });

  sizesselect.addEventListener('change', (e) => {
    size = e.target.value;
  });

  downloadBtn.addEventListener('click', (e) => {
    const img = document.querySelector('.body-qr img');

    if (img !== null) {
      const imgAtr = img.getAttribute('src');
      downloadBtn.setAttribute('href', imgAtr);
    } else {
      e.preventDefault();
    }
  });

  function generateQRCode() {
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
      text: qrTexts.value,
      height: size,
      width: size,
      colorLight: '#fff',
      colorDark: '#000',
    });
  }
});
