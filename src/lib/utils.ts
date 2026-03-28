import type { WorkingHours } from '@/types';

export function isOpenNow(hours: WorkingHours[]): { open: boolean; message: string } {
  const now = new Date();
  const dayIndex = now.getDay(); // 0=Sunday
  const bgIndex = dayIndex === 0 ? 6 : dayIndex - 1; // convert to Mon=0
  const todayHours = hours[bgIndex];
  if (!todayHours) return { open: false, message: 'Затворено' };

  const [openH, openM] = todayHours.open.split(':').map(Number);
  const [closeH, closeM] = todayHours.close.split(':').map(Number);

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  const open = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (open) {
    const minutesToClose = closeMinutes - currentMinutes;
    if (minutesToClose <= 30) {
      return { open: true, message: `Затваря скоро в ${todayHours.close}` };
    }
    return { open: true, message: `Отворено до ${todayHours.close}` };
  }

  if (currentMinutes < openMinutes) {
    return { open: false, message: `Отваря в ${todayHours.open}` };
  }

  const tomorrowIndex = (bgIndex + 1) % 7;
  const tomorrowHours = hours[tomorrowIndex];
  return { open: false, message: `Затворено – утре от ${tomorrowHours?.open ?? ''}` };
}

export function formatPrice(price: number): string {
  return `€${price.toFixed(2)}`;
}

export const CATEGORY_LABELS: Record<string, string> = {
  coffee: 'Кафе',
  desserts: 'Десерти',
  breakfast: 'Закуска',
  pizza: 'Пици',
  drinks: 'Напитки',
};
