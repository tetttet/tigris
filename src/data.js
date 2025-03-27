export const contactInfo = [
  {
    icon: "",
    text: "+880 1234 56789",
  },
  {
    icon: "",
    text: "Merkez mah. Buyukdere cad. Samanyolu Apt. no:33-35 D6 K2 Şişli/ İstanbul",
    subtext: "Istanbul",
    link: "mailto:info@tigristour.com",
  },
];

export const HTTP_ROUTE = {
  website1: { path: "/tigrisgroup" },
  website2: {
    path: "/tigrishealth",
    services_path: "/medical-services",
    all_services_path: "/all-services",
  },
};

// TIGRIS ROUTES
export const HTTP_ROUTE_TIGRIS_MEET = `${HTTP_ROUTE.website1.path}/target-meet-expert`;
export const HTTP_ROUTE_TIGRIS_TARGET = `${HTTP_ROUTE.website1.path}/target-tourism`;
export const HTTP_ROUTE_TIGRIS_ABOUT = `${HTTP_ROUTE.website1.path}/about-us`;
export const HTTP_ROUTE_TIGRIS_MEDICAL = `${HTTP_ROUTE.website2.path}`;
export const HTTP_ROUTE_TIGRIS_CONTACT = `${HTTP_ROUTE.website1.path}/contact`;

// MED ROUTES
export const HTTP_ROUTE_MED_ABOUT = `${HTTP_ROUTE.website2.path}/about`;
export const HTTP_ROUTE_MED_CONTACT = `${HTTP_ROUTE.website2.path}/contact`;
export const HTTP_ROUTE_MED_DOCTORS = `${HTTP_ROUTE.website2.path}/services`;
export const HTTP_ROUTE_MED_FAQ = `${HTTP_ROUTE.website2.path}/`;
export const HTTP_ROUTE_MED_HOME = `${HTTP_ROUTE.website2.path}/`;

export const HTTP_ROUTE_MED_SERVICES = `${HTTP_ROUTE.website2.path}${HTTP_ROUTE.website2.services_path}`;
export const HTTP_ROUTE_ALL_SERVICES = `${HTTP_ROUTE.website2.path}${HTTP_ROUTE.website2.services_path}${HTTP_ROUTE.website2.all_services_path}`;
export const HTTP_ROUTE_MENU_SERVICE = `${HTTP_ROUTE.website2.path}${HTTP_ROUTE.website2.services_path}/menu`;

export const HTTP_ROUTE_MED_DETAIL = `/medical-details`;

export const LinksToPages = [
  { to: HTTP_ROUTE_TIGRIS_ABOUT, label: "About Us" },
  { to: HTTP_ROUTE_MED_DOCTORS, label: "Meet Our Services" },
  { to: HTTP_ROUTE_TIGRIS_CONTACT, label: "Get in Touch" },
  { to: HTTP_ROUTE_MED_FAQ, label: "FAQs & Help" },
];

export const navItems = [
  { to: HTTP_ROUTE_TIGRIS_ABOUT, label: "About Our Company" },
  { to: HTTP_ROUTE_MED_DOCTORS, label: "Explore policy" },
  { to: HTTP_ROUTE_TIGRIS_CONTACT, label: "Contact" },
  { to: HTTP_ROUTE_MED_FAQ, label: "FAQ" },
];
