interface User {
    id: number;
    email: string;
    name: string;
    surname: string;
    role?: string;
}

interface AuthResponse {
    token: string;
}

interface LoginRequest {
    email: string;
    password: string;
}

interface RegisterRequest {
    email: string;
    name: string;
    surname: string;
    password: string;
}

interface SendCodeRequest {
    email: string;
}

interface ResetPasswordRequest {
    email: string;
    password: string;
    code: string;
}

interface ApiError {
    status: number;
    message: string;
    description?: string;
}