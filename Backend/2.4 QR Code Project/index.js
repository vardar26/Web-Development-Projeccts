/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Lütfen bir URL girin:',
    }
  ])
  .then((answers) => {
    const url = answers.url;

    // PNG olarak QR kod oluştur ve dosyaya yaz
    const qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr.png'));

    // Kullanıcının girdiği URL'yi bir .txt dosyasına da kaydet
    fs.writeFile('user_url.txt', url, (err) => {
      if (err) throw err;
      console.log('Hem QR kod hem de URL kaydedildi.');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Terminal bu işlemi desteklemiyor.');
    } else {
      console.error('Bir hata oluştu:', error);
    }
  });