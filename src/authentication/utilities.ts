const getToken = (authHeader: string | undefined): string | false => {
    if (authHeader) {
        const [author, token] = authHeader.split(' ');
        if (token && (author === 'Bearer')) {
            return token;
        }
        return false;
    }
    return false;
};
export {getToken};
