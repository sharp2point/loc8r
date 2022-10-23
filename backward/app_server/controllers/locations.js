module.exports.homelist = (req, res) => {
  res.render("locations-list", {
    title: "Loc8r - find a place to work with wifi",
    pageHeader: {
      title: "Loc8r",
      strapline: "Find places to work with wifi near yoy!",
    },
    locations: [
      {
        name: "Starcups",
        address: "125 Hight Street, Reading, RG6 1PS",
        rating: 3,
        facilities: ["Hot drinks", "Food", "Premium WIFI"],
        distance: "100m",
      },
      {
        name: "Starcups",
        address: "125 Hight Street, Reading, RG6 1PS",
        rating: 3,
        facilities: ["Hot drinks", "Food", "Premium WIFI"],
        distance: "100m",
      },
      {
        name: "Starcups",
        address: "125 Hight Street, Reading, RG6 1PS",
        rating: 3,
        facilities: ["Hot drinks", "Food", "Premium WIFI"],
        distance: "100m",
      },
    ],
  });
};
module.exports.locationInfo = (req, res) => {
  res.render("location-info", { title: "Location Info" });
};
module.exports.addReview = (req, res) => {
  res.render("location-review-form", { title: "Add review" });
};
