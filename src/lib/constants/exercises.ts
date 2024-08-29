export const exercises : ExerciseItem[] = [
    { title: 'ex 1', poster: 'https://github.com/shadcn.png', estimatedTime: 12, score: 10 , id: '01'},
    { title: 'ex 2', poster: 'https://github.com/shadcn.png', estimatedTime: 3, score: 50, id: '02' },
    { title: 'ex 3', poster: 'https://github.com/shadcn.png', estimatedTime: 45, score: 100, id: '03' }
];

export interface ExerciseItem {
    title: string;
    poster: string;
    estimatedTime: number;
    score: number;
    id: string;
  }