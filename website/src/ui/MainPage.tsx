
      import { merge } from './render/lib';
      import {RenderMainPage, RenderMainPageProps} from './render/RenderMainPage';
    
      export type MainPageProps = {
      } & RenderMainPageProps;

      export const MainPage = function(props:MainPageProps){
        return (<RenderMainPage 
          {...props}
          frames={merge(props.frames, {
            // edit frames here
          })}
        />);
      }
    