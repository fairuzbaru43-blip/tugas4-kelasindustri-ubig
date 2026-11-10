
// 1. Fungsi Ganjil Genap
function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}

console.log("=== Ganjil Genap ===");
console.log(ganjilGenap(7));  // ganjil
console.log(ganjilGenap(12)); // genap
console.log(ganjilGenap(0));  // genap


// 2. Konversi Celsius ke Fahrenheit
const celsiusKeFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
};

console.log("=== Celsius ke Fahrenheit ===");
console.log(celsiusKeFahrenheit(0));   // 32
console.log(celsiusKeFahrenheit(100)); // 212
console.log(celsiusKeFahrenheit(-40)); // -40


// 3. Mencari Nilai Terbesar
function nilaiTerbesar(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log("=== Nilai Terbesar ===");
console.log(nilaiTerbesar(5, 9, 2));    // 9
console.log(nilaiTerbesar(80, 75, 80)); // 80
console.log(nilaiTerbesar(-3, -7, -1)); // -1


// 4. Tahun Kabisat
function tahunKabisat(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("=== Tahun Kabisat ===");
console.log(tahunKabisat(2024)); // true
console.log(tahunKabisat(2026)); // false
console.log(tahunKabisat(1900)); // false
console.log(tahunKabisat(2000)); // true


// 5. Harga Setelah Diskon
function hargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total * 0.8;
    } else if (total >= 100000) {
        return total * 0.9;
    } else {
        return total;
    }
}

console.log("=== Harga Setelah Diskon ===");
console.log(hargaSetelahDiskon(250000)); // 200000
console.log(hargaSetelahDiskon(100000)); // 90000
console.log(hargaSetelahDiskon(75000));  // 75000
