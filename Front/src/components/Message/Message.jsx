import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import { Icon } from 'antd';

const Message = ({ messageClass, iconType, title, messageText }) => (
   <div className={cx('message', messageClass, 'grid')}>
      <Icon type={iconType} theme="filled" style={{ fontSize: '50px', color: '#1890ff' }} />
      <h1 className="message-title">{title}</h1>
      <span className="message-text">{messageText}</span>
   </div>
);

Message.propTypes = {
   messageClass: string,
   iconType: string,
   title: string,
   messageText: string
}

export default Message;