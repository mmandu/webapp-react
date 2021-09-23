import loadable from '@loadable/component'

function Page({contentId}) {

  const Component = loadable(() => import(`../page/${contentId}`))

  return (
    <Component>

    </Component>
  );
}

export default Page;