import { rest } from 'msw';

const user_handler = [
    rest.get('/api/v1/users/{id}', (req, res, ctx) => {

        return res(
            ctx.json(
                {
                    email: "string",
                    id: "string",
                }
            ),
        );
    }),
    
];

export default user_handler;