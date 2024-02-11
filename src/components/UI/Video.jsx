/* eslint-disable react/prop-types */

import { AdvancedVideo, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { useMemo } from 'react';


const Video = ({ src, className,id }) => {
   
    const cld = useMemo(() => new Cloudinary({ cloud: { cloudName: 'dlfimxdin' } }), []);
   
    
    return <div className="flex items-center justify-center w-full cursor-pointer" id={id}>
        <AdvancedVideo
            cldVid={cld.video(`${src}`).quality('auto')}
            className={className}
            plugins={[lazyload()]}
            controls
           
        />
       
    </div>
}

export default Video;



