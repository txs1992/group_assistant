import { FC } from 'react';

export interface MediaContainerProps extends FC {
  showDesktops?: boolean;
  showPhones?: boolean;
  showTablets?: boolean;
  className?:string;
  children?: any;
}

export interface MediaContainerState {}
