import loadable from '@loadable/component'

function Contents() {
  const contentType = 'page';
  // const contentId = 'about';
  const contentId = 'contact';

  const Component = loadable(() => import(`./${contentType}/${contentId}`))

  return (
    <Component>

    </Component>
  );
}

export default Contents;