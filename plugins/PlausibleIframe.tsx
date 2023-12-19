import {Box} from '@sanity/ui';

export default function ({tool}: any) {
  const {website, auth} = tool?.options;

  if (!website || !auth)
    return (
      <Box padding={[3, 3, 4, 5]}>
        <div style={{fontSize: '1.6em', marginBottom: '0.5rem'}}>
          Configuration analytics manquante.
        </div>
        <div>Merci de nous contacter pour corriger cela.</div>
      </Box>
    );

  return (
    <div style={{height: '100%'}}>
      <iframe
        plausible-embed="true"
        src={`https://plausible.io/share/${tool?.options?.website}?auth=${tool?.options?.auth}&embed=true&theme=light`}
        style={{overflow: 'hidden', border: '0px', minWidth: '100%', height: '100%'}}
      ></iframe>
      <script async src="https://plausible.io/js/embed.host.js"></script>
    </div>
  );
}