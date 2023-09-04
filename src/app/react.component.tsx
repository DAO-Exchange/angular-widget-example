import * as React from 'react';
import {ChainvineWidget} from "@chainvine/widget";

const MyReactComponent: React.FC = () => {
  // return <div>Hello from React in TypeScript!</div>;
  return <ChainvineWidget
      isOpen={true}
      userIdentifier={'0xDE3bdb8dfA5204A45fd014bd800D14F206f5FB64'}
      identifierType={'wallet'}
      campaignId={'oDk0d3Jl'}
      mode={'Modal'}
      clientConfig={{ testMode: true}}
  />;
};

export default MyReactComponent;
