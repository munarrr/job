import { FunctionComponent } from "react"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"
import { LayoutProps } from "./Layout.interface"


 const Layout = ({children}:LayoutProps):JSX.Element => {
      return (
            <div>
                  <Header />
                  {children}
                 <Footer />
          </div>
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