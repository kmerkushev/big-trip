export const createDay = () => (
  `<li class="trip-days__item  day">
  <div class="day__info">
    <span class="day__counter">1</span>
    <time class="day__date" datetime="2019-03-19">MAR 19</time>
  </div>

  <ul class="trip-events__list">
    <li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/sightseeing.png" alt="Event type icon">
        </div>
        <h3 class="event__title">Sightseeing in Chamonix</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-19T11:20">14:20</time>
            —
            <time class="event__end-time" datetime="2019-03-19T13:00">13:00</time>
          </p>
          <p class="event__duration">1H 20M</p>
        </div>

        <p class="event__price">
          €&nbsp;<span class="event__price-value">50</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">Book tickets</span>
            +
            €&nbsp;<span class="event__offer-price">40</span>
           </li>
           <li class="event__offer">
             <span class="event__offer-title">Lunch in city</span>
             +
             €&nbsp;<span class="event__offer-price">30</span>
            </li>
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>

    <li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
        </div>
        <h3 class="event__title">Drive to Geneva</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-19T10:00">16:00</time>
            —
            <time class="event__end-time" datetime="2019-03-19T11:00">17:00</time>
          </p>
          <p class="event__duration">1H</p>
        </div>

        <p class="event__price">
          €&nbsp;<span class="event__price-value">20</span>
        </p>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>

    <li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">
        </div>
        <h3 class="event__title">Flight to Geneva</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-19T18:00">18:00</time>
            —
            <time class="event__end-time" datetime="2019-03-19T19:00">19:00</time>
          </p>
          <p class="event__duration">1H</p>
        </div>

        <p class="event__price">
          €&nbsp;<span class="event__price-value">20</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">Add luggage</span>
            +
            €&nbsp;<span class="event__offer-price">30</span>
           </li>
           <li class="event__offer">
             <span class="event__offer-title">Switch to comfort</span>
             +
             €&nbsp;<span class="event__offer-price">100</span>
            </li>
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  </ul>
</li>`
);
