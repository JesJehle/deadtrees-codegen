
    // @ts-nocheck
    /* eslint-disable */
    /* tslint:disable */
    // This class is auto-generated by Plasmic; please do not edit!
    // Plasmic Project: ezXstb24MmF1SndvtETBh2

    

    import * as React from "react"
    import {hasVariant, ensureGlobalVariants} from "@plasmicapp/react-web";
    import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { Compss9SkoXNfjWg } from "./Compss9SkoXNfjWg";  // plasmic-import: ss9skoXNfjWg/codeComponent
import { CompwFm7NsJeGEe } from "./CompwFm7NsJeGEe";  // plasmic-import: wFM7NSJe_GEe/codeComponent
import { CompUO3Wl2WYw4S } from "./CompUO3Wl2WYw4S";  // plasmic-import: _uO3WL2WYw4s/codeComponent
    

    export interface GlobalContextsProviderProps {
      children?: React.ReactElement;
      antdConfigProviderProps?: Partial<
           Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">>;
customActionsProps?: Partial<
           Omit<React.ComponentProps<typeof Compss9SkoXNfjWg>, "children">>;
globalFileContextProps?: Partial<
           Omit<React.ComponentProps<typeof CompwFm7NsJeGEe>, "children">>;
stateTestProps?: Partial<
           Omit<React.ComponentProps<typeof CompUO3Wl2WYw4S>, "children">>;
    }

    export default function GlobalContextsProvider(props: GlobalContextsProviderProps) {
      
      const {
        children,
        antdConfigProviderProps,
customActionsProps,
globalFileContextProps,
stateTestProps
      } = props;

      
      return (
      <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={(antdConfigProviderProps && "borderRadius" in antdConfigProviderProps) ? antdConfigProviderProps.borderRadius! : 6}
colorBgBase={(antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps) ? antdConfigProviderProps.colorBgBase! : "#ffffff"}
colorError={(antdConfigProviderProps && "colorError" in antdConfigProviderProps) ? antdConfigProviderProps.colorError! : "#ff4d4f"}
colorInfo={(antdConfigProviderProps && "colorInfo" in antdConfigProviderProps) ? antdConfigProviderProps.colorInfo! : "#1677ff"}
colorPrimary={(antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps) ? antdConfigProviderProps.colorPrimary! : "#1677ff"}
colorSuccess={(antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps) ? antdConfigProviderProps.colorSuccess! : "#52c41a"}
colorWarning={(antdConfigProviderProps && "colorWarning" in antdConfigProviderProps) ? antdConfigProviderProps.colorWarning! : "#faad14"}
controlHeight={(antdConfigProviderProps && "controlHeight" in antdConfigProviderProps) ? antdConfigProviderProps.controlHeight! : 32}
defaultDark={(antdConfigProviderProps && "defaultDark" in antdConfigProviderProps) ? antdConfigProviderProps.defaultDark! : false}
lineWidth={(antdConfigProviderProps && "lineWidth" in antdConfigProviderProps) ? antdConfigProviderProps.lineWidth! : 1}
loadingText={(antdConfigProviderProps && "loadingText" in antdConfigProviderProps) ? antdConfigProviderProps.loadingText! : undefined}
removeLoading={(antdConfigProviderProps && "removeLoading" in antdConfigProviderProps) ? antdConfigProviderProps.removeLoading! : undefined}
sizeStep={(antdConfigProviderProps && "sizeStep" in antdConfigProviderProps) ? antdConfigProviderProps.sizeStep! : 4}
sizeUnit={(antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps) ? antdConfigProviderProps.sizeUnit! : 4}
themeStyles={(antdConfigProviderProps && "themeStyles" in antdConfigProviderProps) ? antdConfigProviderProps.themeStyles! : true ? {"fontFamily":"Inter","fontSize":"16px","fontWeight":"400","lineHeight":"1.5","color":"#535353","letterSpacing":"normal"} : undefined}
wireframe={(antdConfigProviderProps && "wireframe" in antdConfigProviderProps) ? antdConfigProviderProps.wireframe! : false}
      >
        
      <Compss9SkoXNfjWg
      {...customActionsProps}
      
      >
        
      <CompwFm7NsJeGEe
      {...globalFileContextProps}
      
      >
        
      <CompUO3Wl2WYw4S
      {...stateTestProps}
      
      >
        { children }
      </CompUO3Wl2WYw4S>
    
      </CompwFm7NsJeGEe>
    
      </Compss9SkoXNfjWg>
    
      </AntdConfigProvider>
    )
    }
  