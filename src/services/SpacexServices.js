import API from "../api/API";
import endpoints from "../api/endpoints";

class SpaceServices {
  static getAllLaunches() {
    return API.get(endpoints.api.launches.all);
  }
  static getOneLaunch(id) {
    return API.get(endpoints.api.launches.one + id);
  }
  static getUpcomingLaunches() {
    return API.get(endpoints.api.launches.upcoming);
  }
  static getLatestLaunches() {
    return API.get(endpoints.api.launches.latest);
  }
  static getPastLaunches() {
    return API.get(endpoints.api.launches.past);
  }
  static getNextLaunches() {
    return API.get(endpoints.api.launches.next);
  }
  static getAllSuccessfulLaunches() {
    return API.get(endpoints.api.launches.success);
  }
  static getAllFailedLaunches() {
    return API.get(endpoints.api.launches.failure);
  }
}
export default SpaceServices;
