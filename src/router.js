import equipoRoutes from './routes/routes'

export default (app) => {

  app.use('', equipoRoutes);

}