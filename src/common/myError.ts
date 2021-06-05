const enum TypeError {
    error,
    warn,
    info,
    http,
    verbose,
    debug,
}
type Type = keyof typeof TypeError;

class MyError extends Error {
    constructor(message: string, type: "error" | "warn" | "info" | "http" | "verbose" | "debug" , status: number) {
        super(message);
        this.type = type;
        this.status = status;
        this.message = message;
    }

    type: Type;
    status: number;
    message: string
}

export {MyError};
