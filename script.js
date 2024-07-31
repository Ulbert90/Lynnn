function openWhatsApp() {
    // Ganti nomor telepon dan pesan dengan yang diinginkan
    const phoneNumber = "6283845882743"; // Contoh nomor Indonesia (tanpa +62)
    const message = "  ";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Konfirmasi sebelum membuka WhatsApp (opsional)
    if (confirm("Apakah Anda yakin ingin mengirim pesan?")) {
        window.open(url, '_blank');
    }
}
