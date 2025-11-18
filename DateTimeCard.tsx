import { useEffect, useState } from 'react';

export default function DateTimeCard() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dateOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      };
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };

      const dateString = now.toLocaleDateString('zh-CN', dateOptions);
      const timeString = now.toLocaleTimeString('zh-CN', timeOptions);

      setDate(dateString);
      setTime(timeString);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="datetime-card w-48">
      <div className="date-part">
        {date}
      </div>
      <div className="time-part">
        {time}
      </div>
    </div>
  );
}
