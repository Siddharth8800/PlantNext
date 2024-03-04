
export const useLocalStorage = (key: string) => {
    const setItem = ({id,name,description,url}: Readonly<{ id: number;name: string;description: string; url: string;}>) => {
        window.localStorage.setItem(key, JSON.stringify({id,name,description,url}));
    }
    const getItem = () => {
        const item = window.localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        } 
    }
    return {setItem};
};