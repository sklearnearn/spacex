export default {
  ServerBaseURL: "https://api.spacexdata.com/v3",
  api: {
    launches: {
      all: "/launches",
      one: "/launches/",
      past: "/launches/past",
      upcoming: "/launches/upcoming",
      latest: "/launches/latest",
      next: "/launches/next",
      success: "/launches?launch_success=true",
      failure: "/launches?launch_success=false",
    },
  },
};
