import express, { type Router } from 'express'
import { moviesController } from './movies.controller.js'

const movieRouter: Router = express.Router({ mergeParams: true })

movieRouter.get('/search', moviesController.searchMovies)
movieRouter.get('/now-playing', moviesController.nowPlayingMovies)
movieRouter.get('/top-rated', moviesController.topRatedMovies)
movieRouter.get('/popular', moviesController.popularMovies)

export default movieRouter
