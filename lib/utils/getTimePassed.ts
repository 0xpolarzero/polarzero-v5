const getTimePassed = (date: Date): string => {
  const now = new Date();
  const diff = (now.getTime() - date.getTime()) / 1000;
  const minuteDiff = Math.floor(diff / 60);
  const hourDiff = Math.floor(diff / 3600);
  const dayDiff = Math.floor(diff / 86400);
  const weekDiff = Math.floor(dayDiff / 7);
  const monthDiff = Math.floor(dayDiff / 30);
  const yearDiff = Math.floor(dayDiff / 365);

  return isNaN(dayDiff) || dayDiff < 0
    ? ''
    : dayDiff === 0
    ? diff < 60
      ? 'just now'
      : diff < 120
      ? '1 minute ago'
      : diff < 3600
      ? `${minuteDiff} minutes ago`
      : diff < 7200
      ? '1 hour ago'
      : `${hourDiff} hours ago`
    : dayDiff === 1
    ? 'Yesterday'
    : dayDiff < 7
    ? `${dayDiff} days ago`
    : weekDiff === 1
    ? '1 week ago'
    : weekDiff < 5
    ? `${weekDiff} weeks ago`
    : monthDiff === 1
    ? '1 month ago'
    : monthDiff < 12
    ? `${monthDiff} months ago`
    : yearDiff === 1
    ? '1 year ago'
    : `${yearDiff} years ago`;
};

const getDurationApprox = (start: Date, end?: Date): string => {
  // Get the duration in various units
  const days = end
    ? Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) + 1)
    : Math.floor((new Date().getTime() - start.getTime()) / (1000 * 60 * 60 * 24) + 1);
  const months = Math.floor(days / 30) + 1;
  const years = Math.floor(days / 365) + 1;

  // The displayed duration
  return days < 60
    ? `${days} day${days > 1 ? 's' : ''}`
    : months < 10
    ? `${months} month${months > 1 ? 's' : ''}`
    : `${years} year${years > 1 ? 's' : ''}`;
};

export default getTimePassed;
export { getDurationApprox };
