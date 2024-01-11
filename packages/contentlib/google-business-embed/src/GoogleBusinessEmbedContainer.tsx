
import { useState } from 'react';
import GoogleBusinessEmbed from './GoogleBusinessEmbed';
import { mapGoogleBusinessEmbedDataToGoogleBusinessEmbedProps } from './GoogleBusinessEmbed.map';


export const GoogleBusinessEmbedContainer = ({
  entry,
}: any) => {

  const [state, setState] = useState("")

  const properties = mapGoogleBusinessEmbedDataToGoogleBusinessEmbedProps(
    entry.fields,
  );

  return (
    <GoogleBusinessEmbed {...properties} />
  );
};
