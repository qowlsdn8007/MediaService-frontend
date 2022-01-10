import { rest } from 'msw';

const handlers = [
    rest.get('/auth/sign-in', (req, res, ctx) => {
        const { email, password } = req;

        if (email && password) {   // email & password 임시 확인 로직
            return res(
                ctx.status(200, 'ok'),
                ctx.json({
                    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                })
            );
        } else {
            return console.error();
        }
    })
]

export default handlers;