#### Modül İndirme:

```bash
  npm install prayer-times-turkey
```

#### Örnek Kullanım:
```js
const prayer = require('prayer-times-turkey')
const date = () => new Date()

console.log(date(), 'System opened!')

setTimeout(async () => {
    //plate seçeneği ile plaka kodu yazarak arama yapabilirsiniz.
    //place seçeneği ile il adı yazarak arama yapabilirsiniz.
    //Uyarı place ve plate opsiyonları aynı anda kullanılırsa place verisi işlenir.
    const information = await prayer.times({ plate: 41 })
    console.log(information)
}, 2000);
```

#### Örnek Çıktı:
```json
{
  "place": { "name": "Kocaeli", "plate": "41" },
  "times": [
      { "name": "İmsak", "time": "05:22" },
      { "name": "Güneş", "time": "06:48" },
      { "name": "Öğle", "time": "13:11" },
      { "name": "İkindi", "time": "16:40" },
      { "name": "Akşam", "time": "19:25" },
      { "name": "Yatsı", "time": "20:45" }
  ]
}
```

[![ISC License](https://img.shields.io/badge/License-ISC-green.svg)](https://choosealicense.com/licenses/isc/)

#### Geri Bildirim

**E-posta:** me@cihatksm.com adresinden bana ulaşın.
<small>
Herhangi bir sorun teşkil ediyorsa, problem oluşturuyorsa ya da oluşturduysa önce tarafıma bilgi verilmesi rica olunur.
</small>