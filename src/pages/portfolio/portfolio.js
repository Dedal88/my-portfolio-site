import '../../style.css';

import {
  createProject,
  animationAppearanceElements,
} from '../../modules/Utilities';
import { headerScroll } from '../../modules/Header';
import { sidebarMenu } from '../../modules/sidebar-menu';
import { dataProjects } from '../../modules/Data';
import { connectModalWindow } from '../../modules/Modal';

headerScroll();
sidebarMenu();
connectModalWindow();

const projectsContainer = document.querySelector('.projects__wrapper');

animationAppearanceElements(projectsContainer, dataProjects, createProject);
