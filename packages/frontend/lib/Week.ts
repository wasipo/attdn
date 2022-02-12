


export type WeekUnion = typeof week[number];
export const week = ['日','月','火','水','木','金','土'] as const;
export const getDayOfWeek = (day:number):WeekUnion => week[(new Date((new Date()).setDate(day))).getDay()];
