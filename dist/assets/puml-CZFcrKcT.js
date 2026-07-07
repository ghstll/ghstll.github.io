var e=e=>{switch(e){case`index`:return`@startuml
title "Landscape view"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Admin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Sys>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Payment_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Email_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==customer" <<Customer>> as Customer
rectangle "==admin" <<Admin>> as Admin
rectangle "==sys" <<Sys>> as Sys
rectangle "==payment_service\\n<size:10>[Stripe]</size>" <<Payment_service>> as Payment_service
rectangle "==email_service\\n<size:10>[Amazon SES]</size>" <<Email_service>> as Email_service

Customer .[#8D8D8D,thickness=2].> Sys
Admin .[#8D8D8D,thickness=2].> Sys
@enduml
`;case`view_1ldkqb`:return`@startuml
title "sys"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Admin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SysFrontend>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SysAdmin_panel>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SysApi_backend>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SysPostgres_db>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==customer" <<Customer>> as Customer
rectangle "==admin" <<Admin>> as Admin
rectangle "sys" <<Sys>> as Sys {
  skinparam RectangleBorderColor<<Sys>> #3b82f6
  skinparam RectangleFontColor<<Sys>> #3b82f6
  skinparam RectangleBorderStyle<<Sys>> dashed

  rectangle "==frontend" <<SysFrontend>> as SysFrontend
  rectangle "==admin_panel" <<SysAdmin_panel>> as SysAdmin_panel
  rectangle "==api_backend" <<SysApi_backend>> as SysApi_backend
  rectangle "==postgres_db" <<SysPostgres_db>> as SysPostgres_db
}

Customer .[#8D8D8D,thickness=2].> SysFrontend
Admin .[#8D8D8D,thickness=2].> SysAdmin_panel
SysFrontend .[#8D8D8D,thickness=2].> SysApi_backend
SysApi_backend .[#8D8D8D,thickness=2].> SysPostgres_db
@enduml
`;case`components`:return`@startuml
title "components"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<SysFrontend>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SysAdmin_panel>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SysApi_backendAuth>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SysApi_backendCatalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SysApi_backendOrders>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SysApi_backendNotifications>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==frontend" <<SysFrontend>> as SysFrontend
rectangle "==admin_panel" <<SysAdmin_panel>> as SysAdmin_panel
rectangle "api_backend" <<SysApi_backend>> as SysApi_backend {
  skinparam RectangleBorderColor<<SysApi_backend>> #3b82f6
  skinparam RectangleFontColor<<SysApi_backend>> #3b82f6
  skinparam RectangleBorderStyle<<SysApi_backend>> dashed

  rectangle "==auth" <<SysApi_backendAuth>> as SysApi_backendAuth
  rectangle "==catalog" <<SysApi_backendCatalog>> as SysApi_backendCatalog
  rectangle "==orders" <<SysApi_backendOrders>> as SysApi_backendOrders
  rectangle "==notifications" <<SysApi_backendNotifications>> as SysApi_backendNotifications
}

SysFrontend .[#8D8D8D,thickness=2].> SysApi_backend
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};