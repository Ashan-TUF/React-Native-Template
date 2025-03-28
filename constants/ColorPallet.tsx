export const COLORS={
    darkGray:'#bdc3c7',
    orange:'#c0392b',
    light:'#FFF',
    blue: '#3498db',
    primary:'#2c3e50'
} as const;

export type ColorTypes = keyof typeof COLORS;