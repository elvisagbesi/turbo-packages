import BusinessInformation from './BusinessInformation';
import { mapBusinessDataToBusinessComponentProps as mapBusinessDataToBusinessComponentProperties } from './BusinessInformation.map';
// import { useState } from "react";


export type BusinessInformationContainerProps = {
  entry: any;
};

export const BusinessInformationContainer = ({
  entry,
}: BusinessInformationContainerProps) => {

  // const [state, setState] = useState("");

  const componentData = mapBusinessDataToBusinessComponentProperties(
    entry.fields,
  );

  const { ...properties } = componentData;

  return (
    <BusinessInformation {...properties} />
  );
};


export default BusinessInformationContainer