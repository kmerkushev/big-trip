import {createSiteMenuTemplate} from "./view/menu.js";
import {createTripInfo} from "./view/tripInfo.js";
import {createFilters} from "./view/tripFilters.js";
import {createTripSort} from "./view/tripSort.js";
import {createEventAddForm} from "./view/eventAddForm.js";
import {createEventEditForm} from "./view/eventEditForm.js";
import {createDaysList} from "./view/daysList.js";
import {createDay} from "./view/day.js";

const TRIP_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteBodyElement = document.querySelector(`.page-body`);
const siteTripMainElement = document.querySelector(`.trip-main`);
const siteHeaderElement = siteBodyElement.querySelector(`.trip-controls`);
const sitePageMainElement = siteBodyElement.querySelector(`.page-main`);
const siteTripEventsElement = sitePageMainElement.querySelector(`.trip-events`);

render(siteTripMainElement, createTripInfo(), `afterbegin`);
render(siteHeaderElement, createSiteMenuTemplate(), `afterbegin`);
render(siteHeaderElement, createFilters(), `beforeend`);
render(siteTripEventsElement, createTripSort(), `beforeend`);
//render(siteTripEventsElement, createEventAddForm(), `beforeend`);
render(siteTripEventsElement, createEventEditForm(), `beforeend`);

render(siteTripEventsElement, createDaysList(), `beforeend`);
const siteDaysListElement = siteTripEventsElement.querySelector(`.trips-days`);
for (let i = 0; i < TRIP_COUNT; i++) {
  render(siteDaysListElement, createDay(), `beforeend`);
}
