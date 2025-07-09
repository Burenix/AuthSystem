import {createContext, useState, ReactNode} from "react";


type AuthState = {
    user: User | boolean;
    token: string | null;
    isLoading: boolean;
    error: string | null;
};

type AuthActions = {
    login: (data:LoginRequest) => Promise<void>;
    register: (data: RegisterRequest) => Promise<void>;
    resetPassword: (data: ResetPasswordRequest) => Promise<void>;
    sendResetCode: (data: SendCodeRequest) => Promise<void>;
    loadUser: () => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthState & AuthActions>(null!);