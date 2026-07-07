var e=e=>{switch(e){case`index`:return`---
title: "Landscape view"
---
graph TB
  Customer@{ shape: rectangle, label: "customer" }
  Admin@{ shape: rectangle, label: "admin" }
  Sys@{ shape: rectangle, label: "sys" }
  Payment_service@{ shape: rectangle, label: "payment_service" }
  Email_service@{ shape: rectangle, label: "email_service" }
  Customer -.-> Sys
  Admin -.-> Sys
`;case`view_1ldkqb`:return`---
title: "sys"
---
graph TB
  Customer@{ shape: rectangle, label: "customer" }
  Admin@{ shape: rectangle, label: "admin" }
  subgraph Sys["\`sys\`"]
    Sys.Frontend@{ shape: rectangle, label: "frontend" }
    Sys.Admin_panel@{ shape: rectangle, label: "admin_panel" }
    Sys.Api_backend@{ shape: rectangle, label: "api_backend" }
    Sys.Postgres_db@{ shape: rectangle, label: "postgres_db" }
  end
  Customer -.-> Sys.Frontend
  Admin -.-> Sys.Admin_panel
  Sys.Frontend -.-> Sys.Api_backend
  Sys.Api_backend -.-> Sys.Postgres_db
`;case`components`:return`---
title: "components"
---
graph TB
  SysFrontend@{ shape: rectangle, label: "frontend" }
  SysAdmin_panel@{ shape: rectangle, label: "admin_panel" }
  subgraph SysApi_backend["\`api_backend\`"]
    SysApi_backend.Auth@{ shape: rectangle, label: "auth" }
    SysApi_backend.Catalog@{ shape: rectangle, label: "catalog" }
    SysApi_backend.Orders@{ shape: rectangle, label: "orders" }
    SysApi_backend.Notifications@{ shape: rectangle, label: "notifications" }
  end
  SysFrontend -.-> SysApi_backend
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};