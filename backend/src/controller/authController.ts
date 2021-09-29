import { verify } from 'jsonwebtoken';

export const authentication = (request: any, response: any, next: any) => {
    // console.log('authHeader', request);
    const authHeader = request.headers.authorization;
    const token = authHeader.split(' ')[1];
    console.log('token', token);
    verify(token, 'skjSdfuDaF73j2GSjd923b4k!j.ewr717@$2', (err: any, user: any) => {
        if (err) {
            console.log('403: user has a token but token is expired', err);
        }
        // response.send({ user });
        // console.log('auth user', user);
        request.user = user;
        next();
    });
};
