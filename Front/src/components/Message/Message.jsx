import React from 'react';
import cx from 'classnames';
import { Icon } from 'antd';
import { MessagePropTypes } from '../../assets/prop-types/Message.prop-types';

const Message = ({ messageClass, iconType, title, messageText }) => (
   <div className={cx('message', messageClass, 'grid')}>
      <Icon type={iconType} theme="filled" style={{ fontSize: '50px', color: '#1890ff' }} />
      <h1 className="message-title">{title}</h1>
      <span className="message-text">{messageText}</span>
   </div>
);

Message.propTypes = MessagePropTypes;

export default Message;