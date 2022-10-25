import { component$, useResource$, Resource } from '@builder.io/qwik';

export default component$(() => {

  const supResource = useResource$<any>( async () => {
    const res = await fetch('http://server:8080')
    return res.json();
  })

  return (
      <div class="logo">
        <span>sup dawg?</span>
        <Resource
          value={supResource}
          onPending={() => <div>Loading...</div>}
          onResolved={(sup) => {
            return <div>from server: {sup}</div>;
          }}
        />
      </div>
  );
});
