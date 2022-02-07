import { FunctionComponent } from "react"
import { Header } from "./header/Header"
import { LayoutProps } from "./Layout.interface"


 const Layout = ({children}:LayoutProps):JSX.Element => {
      return (
           <Header />
      )
}

export const withLayout =<T extends Record<string,unknown>>(Component:FunctionComponent<T>) => {
     return function WithLayoutProvaider(props:T):JSX.Element {
            return (
                  <Layout>
                        <Component {...props} />
                  </Layout>
            )
      }
}