export const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return token !== null && token !== "null";
};

export const login = token => {
    localStorage.setItem("token", token);
};

export const logout = () => {
    localStorage.setItem("token", "");
};

export default {
    logout,
    isLoggedIn,
    login
};
