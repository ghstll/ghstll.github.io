var e=e=>{switch(e){case`index`:return`direction: down

Customer: {
  label: "Customer"
}
Saas: {
  label: "Our SaaS"
}
Auth_service: {
  label: "Auth service"
}

Customer -> Saas: "opens in browser"
Saas -> Auth_service
`;case`view_12d70h0`:return`direction: down

Customer: {
  label: "Customer"
}
Saas: {
  label: "Our SaaS"

  Ui: {
    label: "Frontend"
  }
  Backend: {
    label: "Backend Services"
  }
}
Auth_service: {
  label: "Auth service"
}

Customer -> Saas.Ui: "opens in browser"
Saas.Ui -> Saas.Backend: "fetches via HTTPS"
Saas.Backend -> Auth_service
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};