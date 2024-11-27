import React from 'react';

const Rcolor = () => {
  function random() {
    // Menghasilkan nilai acak untuk r, g, b
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);

    // Mengubah warna latar belakang halaman dengan warna acak
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <button onClick={random}>Click to Change BG Color</button>
  );
}

export default Rcolor;
