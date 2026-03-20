import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatDate = (date: Date | string | number): string => {
  const d = new Date(date);
  // Проверка на валидность даты
  return isNaN(d.getTime())
    ? 'Invalid Date'
    : d.toLocaleString();
};

export const formatFileSize = (bytes: number): string => {
  if (bytes <= 0 || isNaN(bytes)) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  // Вычисляем индекс для массива sizes
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // Ограничиваем индекс, чтобы не выйти за пределы массива
  const unitIndex = Math.min(i, sizes.length - 1);
  const value = parseFloat((bytes / Math.pow(k, unitIndex)).toFixed(2));

  return `${value} ${sizes[unitIndex]}`;
};

