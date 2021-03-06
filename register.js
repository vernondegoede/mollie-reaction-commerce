/* eslint camelcase: 0 */
import { Reaction } from "/server/api";
import { ISSUER_LIST_MODAL } from "./misc/consts";

Reaction.registerPackage({
  label: "Mollie",
  name: "mollie",
  icon: "fa fa-credit-card-alt",
  autoEnable: true,
  settings: {
    apiKey: "",
    methods: [],
    supports: [
      "Authorize",
    ],
    "mollie": {
      enabled: false,
      apiKey: "",
      methods: [],
      support: [
        "Authorize",
        "Capture",
        "Refund",
      ],
      shopLocale: false,
      idealQr: false,
      issuerList: ISSUER_LIST_MODAL,
      description: "Cart %",
    },
  },
  registry: [
    // Settings panel
    {
      label: "Mollie",
      provides: ["paymentSettings"],
      container: "dashboard",
      template: "mollieSettings",
      hideForShopTypes: ["merchant", "affiliate"],
    },
    // Payment form for checkout
    {
      template: "molliePaymentForm",
      provides: ["paymentMethod"],
      icon: "fa fa-credit-card-alt",
    },
    {
      route: "/mollie/return",
      template: "mollieReturn",
      workflow: "coreWorkflow",
    },
    {
      route: "/mollie/ideal",
      template: "mollieIdeal",
      workflow: "coreWorkflow",
    },
  ],
});
