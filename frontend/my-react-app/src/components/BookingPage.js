import React, { useState } from 'react'; // Убедитесь, что useState импортирован
import './BookingPage.css'; // Подключение CSS

const BookingPage = () => {
  const [selectedSlot, setSelectedSlot] = useState(null); // useState для хранения выбранного слота

  // Данные о слотах (моковые)
  const slots = [
    { id: 1, time: '10:00 - 11:00', isBooked: false },
    { id: 2, time: '11:00 - 12:00', isBooked: false },
    { id: 3, time: '12:00 - 13:00', isBooked: true },
    { id: 4, time: '13:00 - 14:00', isBooked: false },
    { id: 5, time: '14:00 - 15:00', isBooked: true },
  ];

  // Обработчик выбора слота
  const handleSlotSelect = (slot) => {
    if (!slot.isBooked) {
      setSelectedSlot(slot);
      alert(`Вы выбрали слот: ${slot.time}`);
    } else {
      alert('Этот слот уже забронирован!');
    }
  };

  return (
    <div className="booking-page">
      <div className="header">
        <h1>Страница Бронирования</h1>
      </div>
      <div className="slots-container">
        {slots.map((slot) => (
          <div
            key={slot.id}
            className={`slot ${slot.isBooked ? 'booked' : ''} ${
              selectedSlot?.id === slot.id ? 'selected' : ''
            }`}
            onClick={() => handleSlotSelect(slot)}
          >
            {slot.time}
          </div>
        ))}
      </div>
      {selectedSlot && (
        <div className="confirmation">
          <p>Вы выбрали слот: {selectedSlot.time}</p>
          <button onClick={() => alert('Бронирование подтверждено!')}>
            Подтвердить бронирование
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
