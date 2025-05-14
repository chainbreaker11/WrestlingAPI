// este middleware se encarga de manejar los errores que ocurren en la aplicación y enviar una respuesta adecuada al cliente.
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    error: {
      status,
      message,
    },
  });
};
