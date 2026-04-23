import {
  createProject,
  connectAnimationAppearanceElements,
} from '../../modules/Utilities';
import { headerScroll } from '../../modules/Header';
import { sidebarMenu } from '../../modules/sidebar-menu';
import { dataProjects } from '../../modules/Data';

headerScroll();
sidebarMenu();

const projectsContainer = document.querySelector('.projects__wrapper');

connectAnimationAppearanceElements(
  projectsContainer,
  dataProjects,
  createProject,
);
