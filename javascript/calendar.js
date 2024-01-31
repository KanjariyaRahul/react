
const generateCalendar = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
  
    const calendar = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(day);
    }
  
    return calendar;
  };
  
 
  const year = 2024;
  const month = 1; 
  const calendarForJanuary2024 = generateCalendar(year, month);
  
  console.log(calendarForJanuary2024);
  