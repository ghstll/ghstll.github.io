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
skinparam rectangle<<Saas>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Auth_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Customer" <<Customer>> as Customer
rectangle "==Our SaaS" <<Saas>> as Saas
rectangle "==Auth service" <<Auth_service>> as Auth_service

Customer .[#8D8D8D,thickness=2].> Saas : <color:#8D8D8D>opens in browser
Saas .[#8D8D8D,thickness=2].> Auth_service
@enduml
`;case`view_12d70h0`:return`@startuml
title "Our SaaS"
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
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SaasUi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SaasBackend>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Auth_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Customer" <<Customer>> as Customer
rectangle "Our SaaS" <<Saas>> as Saas {
  skinparam RectangleBorderColor<<Saas>> #3b82f6
  skinparam RectangleFontColor<<Saas>> #3b82f6
  skinparam RectangleBorderStyle<<Saas>> dashed

  rectangle "==Frontend" <<SaasUi>> as SaasUi
  rectangle "==Backend Services" <<SaasBackend>> as SaasBackend
}
rectangle "==Auth service" <<Auth_service>> as Auth_service

Customer .[#8D8D8D,thickness=2].> SaasUi : <color:#8D8D8D>opens in browser
SaasUi .[#8D8D8D,thickness=2].> SaasBackend : <color:#8D8D8D>fetches via HTTPS
SaasBackend .[#8D8D8D,thickness=2].> Auth_service
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};