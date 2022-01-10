export const setCookie = (name, value, expiredDay) => { 
    const expired = new Date(); 
    expired.setTime(expired.getTime() + expiredDay * 24 * 60 * 60 * 1000); 
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + expired.toUTCString() + ';path=/';
};

export const getCookie = (name) => { 
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)'); 
    return value ? decodeURIComponent(value[2]) : null; 
};

export const getLocalItem = (key, defaultValue) => {
    try {
      const storedValue = localStorage.getItem(key)
      return storedValue ? JSON.parse(storedValue) : defaultValue
    } catch {
      return defaultValue
    }
}

export const setLocalItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch {
        console.error();
    }
}

export const removeLocalItem = (key) => {
    try {
        localStorage.removeItem(key);
    } catch {
        console.error();
    }
}
