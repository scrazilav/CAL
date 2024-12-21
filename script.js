function hitungKalori() {
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const usia = parseInt(document.getElementById('usia').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const aktivitas = document.getElementById('aktivitas').value;

    let bmr;

    // Menghitung BMR berdasarkan gender
    if (gender === "laki-laki") {
        bmr = 66.5 + (13.75 * berat) + (5.003 * tinggi) - (6.75 * usia);
    } else {
        bmr = 655.1 + (9.563 * berat) + (1.850 * tinggi) - (4.676 * usia);
    }

    let kebutuhanKalori;
    let aktivitasKeterangan = "";

    // Menentukan kebutuhan kalori berdasarkan aktivitas
    switch (aktivitas) {
        case "sedentary":
            kebutuhanKalori = bmr * 1.2;
            aktivitasKeterangan = "Kurang aktif (BMR X 1,2): Jika Anda sangat jarang berolahraga atau tidak sama sekali.";
            break;
        case "light":
            kebutuhanKalori = bmr * 1.375;
            aktivitasKeterangan = "Aktif ringan (BMR X 1,375): Jika Anda berolahraga ringan selama satu hingga tiga hari dalam seminggu.";
            break;
        case "moderate":
            kebutuhanKalori = bmr * 1.55;
            aktivitasKeterangan = "Cukup aktif (BMR X 1,55): Jika Anda berolahraga dengan intensitas sedang sekitar tiga hingga lima hari dalam seminggu.";
            break;
        case "active":
            kebutuhanKalori = bmr * 1.725;
            aktivitasKeterangan = "Sangat aktif (BMR X 1,725): Jika Anda berolahraga dengan intensitas berat selama enam hingga tujuh hari dalam seminggu.";
            break;
        case "extra":
            kebutuhanKalori = bmr * 1.9;
            aktivitasKeterangan = "Ekstra aktif (BMR X 1,9): Jika Anda berolahraga dengan intensitas sangat berat sekitar enam hingga tujuh hari dalam seminggu atau melakukan pekerjaan fisik yang ekstra dan membutuhkan stamina serta fisik kuat.";
            break;
    }

    // Menampilkan hasil dan keterangan aktivitas
    document.getElementById('bmrResult').innerText = `BMR: ${bmr.toFixed(2)} kalori/hari`;
    document.getElementById('kaloriResult').innerText = `Kebutuhan Kalori Harian: ${kebutuhanKalori.toFixed(2)} kalori/hari`;
    document.getElementById('aktivitasKeterangan').innerText = aktivitasKeterangan;
    
    // Menyembunyikan form dan menampilkan hasil
    document.getElementById('hasil').style.display = 'block';
    document.querySelector('.form-container').style.display = 'none';
}
