import { createDataTestSelector } from "../../createDataTestSelector";

export default {
  menuButton: createDataTestSelector("account-options-menu-button"),
  connectedSites: createDataTestSelector("global-menu-connected-sites"),
  disconnectButton: ".connected-sites-list__content-row-link-button",
  connectedSiteName: ".connected-sites-list__subject-name",
};
