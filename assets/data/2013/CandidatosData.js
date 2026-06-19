// ============================================================
// ARCHIVO: src/assets/data/2013/CandidatosData.js
// ============================================================

const imageModules = import.meta.glob('../../img/**/*.{png,jpg,jpeg,svg}', {
  eager: false
});

const img = (path) => {
  const fullPath = `../../img/${path}`;
  const loader = imageModules[fullPath];

  if (loader) {
    return async () => {
      const mod = await loader();
      return mod.default;
    };
  }

  console.warn(`⚠️ Imagen no encontrada en glob: ${path}`);
  return async () => "";
};

// ============================================================
// 1. LEYENDA DE COLORES
// ============================================================

export const dessertsData = [];

// ============================================================
// 2. DICCIONARIO DE CANDIDATOS
// ============================================================

export const candidatoData = [];
