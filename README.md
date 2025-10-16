Central 911 - Singleton demo

Estructura:
- src/central911.ts: Implementación del Singleton `Central911`.
- src/operador.ts: Clase `Operador` y tipo `Llamada`.
- src/main.ts: Demo que registra operadores y envía llamadas.

Cómo ejecutar:
1. Instalar dependencias: npm install
2. Compilar: npm run build
3. Ejecutar: npm start

Alternativamente usar ts-node para ejecutar sin compilar:
- npm run dev

Mejoras propuestas:
- Manejo de concurrencia y operadores ocupados.
- Pool de operadores y prioridad por tipo de llamada.
- Tests unitarios.
