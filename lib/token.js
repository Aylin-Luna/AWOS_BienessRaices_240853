const generarToken = () => Date.now().toString(32) + Math.random().toString(32).slice(2)
+ "#AEL-26";

export { generarToken }