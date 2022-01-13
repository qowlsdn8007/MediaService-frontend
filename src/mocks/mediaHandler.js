import { rest } from 'msw';

const media_handler = [
    rest.get('/api/v1/media/{id}', (req, res, ctx) => {
        
        return res(
            ctx.json(
                {
                    mediaSeries: {
                        id: "id",
                        mediaAllSeries: {
                            id: "id",
                            isSeries: true,
                            rate: "string",
                            synopsis: "string",
                            thumbnail: "string",
                            title: "string",
                            trailer: "string",
                        },
                        order: {},
                        title: "string",
                    },
                    name: "string",
                    order: {},
                    synopsis: "string",
                }
            ),
        );
    }),
    rest.get('/api/v1/media-series/{id}', (req, res, ctx) => {

        return res(
            ctx.json(
                {
                    mediaAllSeries: {
                        id: "id",
                        isSeries: true,
                        rate: "string",
                        synopsis: "string",
                        thumbnail: "string",
                        title: "string",
                        trailer: "string",
                    },
                    order: {},
                    title: "string",
                }
            ),
        );
    }),
    rest.get('/api/v1/media-series/all/{id}', (req, res, ctx) => {

        return res(
            ctx.json(
                {
                    id: "id",
                    isSeries: true,
                    rate: "string",
                    synopsis: "string",
                    thumbnail: "string",
                    title: "string",
                    trailer: "string",
                },
            ),
        );
    }),
    

];

export default media_handler;