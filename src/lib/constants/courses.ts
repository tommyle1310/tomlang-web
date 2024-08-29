export const courses = [
    { title: 'ok', poster: 'https://github.com/shadcn.png', estimatedTime: 30, status: 'learned' , id: '01'},
    { title: 'ko', poster: 'https://github.com/shadcn.png', estimatedTime: 40, status: 'unlocked', id: '02' },
    { title: 'ko', poster: 'https://github.com/shadcn.png', estimatedTime: 28, status: 'locked', id: '03' }
];

export interface LessonItem {
    title: string;
    poster: string;
    estimatedTime: number;
    status: string;
    id: string;
  }