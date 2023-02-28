export default function getLastWeekDate() {
  const date = new Date();

  const last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);

  const day = last.getDate();
  const month = last.getMonth() + 1;
  const year = last.getFullYear();

  return year + '-' + month + '-' + day;
}
