/** Fotos de ejemplo (Unsplash, licencia libre) servidas desde /public/photos.
 *  El degradado queda debajo como placeholder mientras carga la imagen. */
export const PHOTOS: { id: string; title: string; author: string; initials: string; css: string }[] = [
  // unsplash photo-1494791368093-85217fbbf8de (cielo tormentoso sobre mar y costa rocosa)
  { id: 'p1', title: 'Amenazas', author: 'Participante #07', initials: 'A7', css: "url('/photos/p1.webp') center/cover no-repeat, linear-gradient(160deg,#1e3a5f 0%,#2c5282 40%,#718096 75%,#cbd5e0 100%)" },
  // unsplash photo-1769638551746-1eafdf3eeffc (playa pálida, mar en calma, marea baja)
  { id: 'p2', title: 'Marea baja', author: 'Participante #12', initials: 'B2', css: "linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)), url('/photos/p2.webp') center/cover no-repeat, linear-gradient(180deg,#a3bffa 0%,#cbd5e0 55%,#e2e8f0 100%)" },
  // unsplash photo-1669158424196-1664940cec7d (acantilado rocoso con cueva junto al mar)
  { id: 'p3', title: 'Acantilado', author: 'Participante #03', initials: 'C3', css: "url('/photos/p3.webp') center/cover no-repeat, linear-gradient(150deg,#2d3748 0%,#4a5568 45%,#a0aec0 100%)" },
  // unsplash photo-1775048620819-2531d8ec3095 (grúas de puerto industrial silueteadas al atardecer)
  { id: 'p4', title: 'Hierro & sal', author: 'Participante #21', initials: 'D1', css: "url('/photos/p4.webp') center/cover no-repeat, linear-gradient(120deg,#dd6b20 0%,#ed8936 35%,#f6ad55 65%,#1a202c 100%)" },
  // unsplash photo-1495616811223-4d98c6e9c869 (lago al atardecer con embarcadero y barca)
  { id: 'p5', title: 'La luz que se va', author: 'Participante #15', initials: 'E5', css: "url('/photos/p5.webp') center/cover no-repeat, linear-gradient(135deg,#742a2a 0%,#c05621 40%,#ed8936 70%,#2d3748 100%)" },
  // unsplash photo-1753623010551-f417b96c2366 (flor magenta/rosa en macro)
  { id: 'p6', title: 'Sed en flor', author: 'Participante #09', initials: 'F9', css: "url('/photos/p6.webp') center/cover no-repeat, radial-gradient(circle at 40% 35%,#d53f8c 0%,#97266d 30%,#1a202c 80%)" },
]
