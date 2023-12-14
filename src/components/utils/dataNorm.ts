export const dateNorm = (date: string) => {
    return date.split(/[-T]/).slice(0, 3).reverse().join('/')
}