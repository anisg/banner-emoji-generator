
      import { merge } from './render/lib';
      import {RenderBadgeLiveDesign, RenderBadgeLiveDesignProps} from './render/RenderBadgeLiveDesign';
    
      export type BadgeLiveDesignProps = {
      } & RenderBadgeLiveDesignProps;

      export const BadgeLiveDesign = function(props:BadgeLiveDesignProps){
        return (<RenderBadgeLiveDesign 
          {...props}
          frames={merge(props.frames, {
            // edit frames here
          })}
        />);
      }
    