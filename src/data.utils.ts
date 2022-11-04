export const getData = async (url: string): Promise<T> => {
    const res = await fetch(url);
    return await res.json();
};