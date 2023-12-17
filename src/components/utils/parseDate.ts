export const parseDate = (date: string) => {
    return date.split(/[-T]/).slice(0, 3).reverse().join('/')
}