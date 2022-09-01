import { Test } from "../Components/Test/Test.component"
import { RouteConfig } from "./types"



export const routeConfiguration : RouteConfig[] =  [ {
      path: 'Test',
      name: "Test",
      Component:Test,
      exact: true, 
    }]