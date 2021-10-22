export const colors = {
    white: '#FFFFFF',
    black: '#141930',

    primary: '#2563EB',

    gray700: '#6E7191',
    gray500: '#8A8D9F',
    gray300: '#D0D3E5',
    gray100: '#EFF0F6',

    blue: '#466FFF',
    pink: '#F52D6A',
    orange: '#EB2323',
    purple: '#522ED2',
    yellow: '#FFBF35',
    green: '#01BCAD',
    red: '#DC2626',
}

export const opacity = (number) => {
    if (number <= 0) return '00'
    if (number >= 100) return 'FF'
    return Number(Math.round(number * 2.55)).toString(16)
}
