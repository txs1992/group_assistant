import React from 'react';
import classnames from 'classnames';
import { MediaContainerProps } from './types.d';
import './style.scss';

/**
 * @prop {bool} showDesktops 是否在桌面端显示
 * @prop {bool} showPhones 是否在移动端显示
 * @prop {bool} showTablets 是否在平板端展示
 * @prop {string} className 自定义className
 * @prop {any} children 包含的内容
 */

class MediaContainer extends React.Component<MediaContainerProps> {
  constructor(props:MediaContainerProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, children, showDesktops, showPhones, showTablets } = this.props;
    const _className:string = classnames('media_container', className, { showDesktops, showPhones, showTablets });
    return (
      <div className={_className}>
        {children}
      </div>
    );
  }
}

export default MediaContainer;
