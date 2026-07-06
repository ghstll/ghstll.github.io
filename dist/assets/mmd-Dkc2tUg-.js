var e=e=>{switch(e){case`index`:return`---
title: "Landscape view"
---
graph TB
  Customer@{ shape: rectangle, label: "Customer" }
  Saas@{ shape: rectangle, label: "Our SaaS" }
  Auth_service@{ shape: rectangle, label: "Auth service" }
  Customer -. "\`opens in browser\`" .-> Saas
  Saas -.-> Auth_service
`;case`view_12d70h0`:return`---
title: "Our SaaS"
---
graph TB
  Customer@{ shape: rectangle, label: "Customer" }
  subgraph Saas["\`Our SaaS\`"]
    Saas.Ui@{ shape: rectangle, label: "Frontend" }
    Saas.Backend@{ shape: rectangle, label: "Backend Services" }
  end
  Auth_service@{ shape: rectangle, label: "Auth service" }
  Customer -. "\`opens in browser\`" .-> Saas.Ui
  Saas.Ui -. "\`fetches via HTTPS\`" .-> Saas.Backend
  Saas.Backend -.-> Auth_service
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};