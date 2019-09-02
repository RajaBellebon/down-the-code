import React from 'react';
import { mount } from 'enzyme';
import cases from 'jest-in-case';
import Nepal from '../../pages/page-2';
import Wedding from '../../pages/page-3';
import WA from '../../pages/page-4';
import NZ from '../../pages/page-5';
import Data from '../../pages/page-6';
import Blogs from '../../pages/page-7';
import AboutUs from '../../pages/page-8';

cases.skip(
  'Pages',
  opts => {
    expect(mount(opts.component)).toBeDefined();
  },
  [
    { name: 'Nepal', component: Nepal },
    { name: 'Wedding', component: Nepal },
    { name: 'NZ', component: NZ },
    { name: 'WA', component: WA },
    { name: 'About us', component: AboutUs },
    { name: 'Blogs', component: Blogs },
    { name: 'Data projects', component: Data },
  ],
);
