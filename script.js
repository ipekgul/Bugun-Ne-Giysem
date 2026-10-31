// kiyafet listeleri
const ustGiyimListesi = [
    "Kayık Yaka Bej Üst",
    "Puantiyeli Dantelli Bluz ",
    "Siyah Kazak",
    "Lacivert Polo Yaka",
    "Siyah Askılı Crop",
    "Çizgili Gömlek",
    "Beyaz Tek Omuz Üst"
];

const altGiyimListesi = [
    "İspanyol Paça Jean ",
    "Kot Etek",
    "Beyaz Dantelli Uzun etek",
    "Çizgili Keten Pantolon",
    "Yeşil Saten Etek",
    "Pembe Dantelli Etek",
    "Acı Kahve Etek"
];

const ayakkabiListesi = [
    "Lacivert Samba",
    "Kahverengi Stiletto ",
    "Bordo Kısa Topuklu",
    "Kahverengi Spezial",
    "Siyah Çizme",
    "Kırmızı Babet",
    "Hasır Parmak Arası Terlik"
];

// html deki elementleri js de tanımlama
const ustGiyimYazisi = document.getElementById("ust-giyim");
const altGiyimYazisi = document.getElementById("alt-giyim");
const ayakkabiYazisi = document.getElementById("ayakkabi");
const kombinButonu = document.getElementById("kombin-butonu");

const ustGiyimFoto = document.getElementById("ust-giyim-foto");
const altGiyimFoto = document.getElementById("alt-giyim-foto");
const ayakkabiFoto = document.getElementById("ayakkabi-foto");


function kombinYap() {
    // Her kategori için rastgele bir index seçiyoruz
    const ustIndex = Math.floor(Math.random() * ustGiyimListesi.length);
    const altIndex = Math.floor(Math.random() * altGiyimListesi.length);
    const ayakkabiIndex = Math.floor(Math.random() * ayakkabiListesi.length);

    // Seçilen kıyafet isimleri
    const rastgeleUst = ustGiyimListesi[ustIndex];
    const rastgeleAlt = altGiyimListesi[altIndex];
    const rastgeleAyakkabi = ayakkabiListesi[ayakkabiIndex];

    // Kıyafet isimlerini ekrana yazdırıyoruz
    ustGiyimYazisi.textContent = rastgeleUst;
    altGiyimYazisi.textContent = rastgeleAlt;
    ayakkabiYazisi.textContent = rastgeleAyakkabi;

    // Seçilen kıyafetlerin fotoğraflarını gösteriyoruz
    ustGiyimFoto.src = ustGiyimFotolari[ustIndex];
    altGiyimFoto.src = altGiyimFotolari[altIndex];
    ayakkabiFoto.src = ayakkabiFotolari[ayakkabiIndex];
}


// butona tıklanma özelliğini bağlıyoruz
// "Butona tıklandığında kombinYap fonksiyonunu çalıştır" diyoruz
kombinButonu.addEventListener("click", kombinYap);

// html deki elementleri js de tanımlama

const baslangicEkrani = document.getElementById("baslangic-ekrani");
const rastgeleEkran = document.getElementById("rastgele-kombin-alani");
const kendiKombinEkrani = document.getElementById("kendi-kombin-ekrani");
const rastgeleSec = document.getElementById("rastgele-secsin");
const kendinSec = document.getElementById("kendim-sec");
const rastgeleGeri = document.getElementById("rastgele-geri");
const kendiGeri = document.getElementById("kendi-geri");

//başlangıçta sadece başlangıç ekranını gösterir diğerlerini gizledim

rastgeleEkran.style.display = "none";
kendiKombinEkrani.style.display = "none";

rastgeleSec.addEventListener("click", function() {
    baslangicEkrani.style.display = "none";
    rastgeleEkran.style.display = "block";
});

kendinSec.addEventListener("click", function() {
    baslangicEkrani.style.display = "none";
    kendiKombinEkrani.style.display = "block";
});

rastgeleGeri.addEventListener("click", function() {
    rastgeleEkran.style.display = "none";
    baslangicEkrani.style.display = "block";
});

kendiGeri.addEventListener("click", function() {
    kendiKombinEkrani.style.display = "none";
    baslangicEkrani.style.display = "block";
});

// dizideki elemanlari kaybetmemek icin const yaziyoruz

const ustGiyimFotolari = [ 
    "ust1.jpeg",
    "ust2.jpeg",
    "ust3.jpeg",
    "ust4.jpeg",
    "ust5.jpeg",
    "ust6.jpeg",
    "ust7.jpeg",
];

const altGiyimFotolari = [
    "alt1.jpeg",
    "alt2.jpeg",
    "alt3.jpeg",
    "alt4.jpeg",
    "alt5.jpeg",
    "alt6.jpeg",
    "alt7.jpeg"
];

const ayakkabiFotolari = [
    "ayakkabi1.jpeg",
    "ayakkabi2.jpeg",
    "ayakkabi3.jpeg",
    "ayakkabi4.jpeg",
    "ayakkabi5.jpeg",
    "ayakkabi6.jpeg",
    "ayakkabi7.jpeg"
];

// Her kategori için önizlemede güncellenecek fotoğraf ve yazı alanları.
const onizlemeAlanlari = {
    ust: { foto: "onizleme-ust-foto", ad: "onizleme-ust-adi" },
    alt: { foto: "onizleme-alt-foto", ad: "onizleme-alt-adi" },
    ayakkabi: { foto: "onizleme-ayakkabi-foto", ad: "onizleme-ayakkabi-adi" }
};

// Tıklanan ürünün seçili durumunu ve önizlemesini günceller.
function urunSeciminiGuncelle(urunDugmesi) {
    // HTML'deki data-kategori ve data-index değerlerini alıyoruz.
    const kategori = urunDugmesi.dataset.kategori;
    const urunSirasi = Number(urunDugmesi.dataset.index);

    // Kategori veya ürün numarası geçersizse devam etmemesi için
    if (!onizlemeAlanlari[kategori] || Number.isNaN(urunSirasi)) {
        console.error("Ürün düğmesinde geçerli kategori veya sıra numarası bulunamadı.");
        return;
    }

    // Tıklanan ürün düğmesinin içindeki fotoğrafı ve adını buluyoruz.
    const urunFotografi = urunDugmesi.querySelector("img");
    const urunAdi = urunDugmesi.querySelector("span");
    // yine geçersizse uyarı veriyo

    if (!urunFotografi || !urunAdi) {
        console.error("Ürün düğmesinde img veya span elemanı bulunamadı.");
        return;
    }

    // Sadece aynı kategorideki diğer ürünleri seçilmemiş yapıyoruz.
    const ayniKategoriDugmeleri = document.querySelectorAll(
        '.urun-secimi[data-kategori="' + kategori + '"]'
    );

    // eski seçili olanın seçilmemiş şekilde gözükmesi için
    ayniKategoriDugmeleri.forEach(function (dugme) {
        dugme.setAttribute("aria-pressed", "false");
    });

    // Tıklanan düğmeyi seçili işaretliyoruz; CSS bu değere göre görünümünü değiştirir.
    urunDugmesi.setAttribute("aria-pressed", "true");

    // Kategoriye karşılık gelen önizleme fotoğrafını ve adını alıyoruz.
    const alanBilgisi = onizlemeAlanlari[kategori];
    const onizlemeFotografi = document.getElementById(alanBilgisi.foto);
    const onizlemeAdi = document.getElementById(alanBilgisi.ad);

    if (!onizlemeFotografi || !onizlemeAdi) {
        console.error("Bu kategori için önizleme alanı index.html içinde bulunamadı.");
        return;
    }

    // Seçilen ürünün fotoğrafını ve adını önizleme bölümüne kopyalıyoruz.
    onizlemeFotografi.src = urunFotografi.currentSrc || urunFotografi.src;
    onizlemeFotografi.alt = "Seçilen ürün: " + urunAdi.textContent.trim();
    onizlemeFotografi.hidden = false;
    onizlemeAdi.textContent = urunAdi.textContent.trim();

    // Seçilen sıra numarasını tarayıcının geliştirici konsolunda gösteriyoruz.
    console.log(kategori + " kategorisinde " + urunSirasi + ". sıradaki ürün seçildi.");
}

// Sayfadaki bütün ürün düğmelerine tıklama olayı bağlıyoruz.
const urunDugmeleri = document.querySelectorAll(".urun-secimi");
urunDugmeleri.forEach(function (dugme) {
    dugme.addEventListener("click", function () {
        // Tıklanan düğmeyi seçim fonksiyonuna iletiyoruz.
        urunSeciminiGuncelle(dugme);
    });
});
