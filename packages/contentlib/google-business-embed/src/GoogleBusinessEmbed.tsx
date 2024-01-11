export type GoogleBusinessEmbedProps = {
  googleMyBusinessEmbedUrl?: string;
  googleMapReplacementImage?: {
    url: string;
  };
  inspectorConfigs?: ({ fieldId }: { fieldId: string }) => any;
};

export default function GoogleBusinessEmbed({
  inspectorConfigs,
  ...componentData
}: GoogleBusinessEmbedProps) {
  return (
    <div className="col-span-1 h-full w-full">
      Google business embed
    </div>
  );
}
