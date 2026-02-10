import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get("/", (req, res) => {
    console.log("Saludos desde la Web");
    res.json({
        status: 200,
        message: "Solicitud recibida."
    });
});

// Rutas del router
app.use("/api/usuarios", usuarioRoutes);

app.listen(PORT, () => {
    console.log(`El servidor está iniciado en el puerto ${PORT}`);
});
