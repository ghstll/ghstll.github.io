var e=e=>{switch(e){case`index`:return`direction: down

Customer: {
  label: "customer"
}
Admin: {
  label: "admin"
}
Sys: {
  label: "sys"
}
Payment_service: {
  label: "payment_service"
}
Email_service: {
  label: "email_service"
}

Customer -> Sys
Admin -> Sys
`;case`view_1ldkqb`:return`direction: down

Customer: {
  label: "customer"
}
Admin: {
  label: "admin"
}
Sys: {
  label: "sys"

  Frontend: {
    label: "frontend"
  }
  Admin_panel: {
    label: "admin_panel"
  }
  Api_backend: {
    label: "api_backend"
  }
  Postgres_db: {
    label: "postgres_db"
  }
}

Customer -> Sys.Frontend
Admin -> Sys.Admin_panel
Sys.Frontend -> Sys.Api_backend
Sys.Api_backend -> Sys.Postgres_db
`;case`components`:return`direction: down

SysFrontend: {
  label: "frontend"
}
SysAdmin_panel: {
  label: "admin_panel"
}
SysApi_backend: {
  label: "api_backend"

  Auth: {
    label: "auth"
  }
  Catalog: {
    label: "catalog"
  }
  Orders: {
    label: "orders"
  }
  Notifications: {
    label: "notifications"
  }
}

SysFrontend -> SysApi_backend
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};