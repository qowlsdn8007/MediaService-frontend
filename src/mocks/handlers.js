import { rest } from 'msw';

const handlers = [
    rest.post('/api/v1/auth/sign-in', (req, res, ctx) => {

        const errorCode = req.url.searchParams.get('error_code');
        if (errorCode) {
            console.log(errorCode)
            return res(
            ctx.status(errorCode))
        }

        const { email, password } = req.body;

        if (email && password) {   // email & password 임시 확인 로직
            return res(
                ctx.status(200, 'ok'),
                ctx.cookie('refreshToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InJlZnJlc2giLCJpYXQiOjE1MTYyMzkwMjJ9.ivXkjpB44NTmQpBTJBr3bZ48Z_QaUoFK9SYS_w6scrI'),
                ctx.json({
                    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                })
            );
        } else {
            return console.error();
        }
    }),
    rest.post('/api/v1/auth/silent-refresh', (req, res, ctx) => {
        //const accessToken = req.headers['Authorization'];
        const refreshToken = req.cookies['refreshToken'];
        if (refreshToken) {
            const arr = new Array(30).fill(true);
            const newAccessToken  = arr.map(data => Math.random().toString(36)).toString();
            return res(
                ctx.status(200, 'ok'),
                ctx.cookie('refreshToken', refreshToken),
                ctx.json({
                    accessToken: newAccessToken,
                })
            );
        } else {
            return console.error();
        }
    })
]

export default handlers;