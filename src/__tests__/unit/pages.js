import React from 'react';
import { mount } from 'enzyme';
import cases from 'jest-in-case';
// import { Nepal } from '../../pages/nepal';
// import Wedding from '../../pages/wedding-shooting';
// import WA from '../../pages/western-australia';
// import NZ from '../../pages/new-zealan';
// import NT from '../../pages/northern-territory';
// import Data from '../../pages/data-projects';
// import Blogs from '../../pages/blogs';
// import AboutUs from '../../pages/about-us';
// TODO: https://github.com/RajaBellebon/tulec/issues/14
cases.skip(
  'Pages',
  opts => {
    expect(opts.component).toBeDefined();
  },
  [
    //  { name: 'Nepal', component: mount(<Nepal/>) },
    // { name: 'Wedding', component: Wedding },
    // { name: 'NZ', component: NZ },
    // { name: 'NT', component: NT },
    // { name: 'WA', component: WA },
    // { name: 'About us', component: AboutUs },
    // { name: 'Blogs', component: Blogs },
    // { name: 'Data projects', component: Data },
  ],
);
